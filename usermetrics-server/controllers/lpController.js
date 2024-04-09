import axios from "axios";
import Emails from "../models/email.js";
// import sendEmail from "./sendEmail.js";

import { sendVerificationEmail, sendCompleteWaitlist } from "./loopEmail.js";

const saveEmail = async (req, res) => {
    const { email } = req.body;

    const count = await Emails.countDocuments({}).exec();
    const newEmail = new Emails({ email: email, place: count + 1 });
    try {
        await newEmail.save();

        // await sendVerificationEmail(email);

        await axios.post("https://api.usermetrics.co/api/discord/newEmailNotification", { "email": email });
        
        return res.status(200).send("Data received");
    }
    catch (error) {
        console.log(error.message);
        return res.status(500).send(error.message);
    }
}

const verifyEmail = async (req, res) => {
    const { email } = req.body;
    try {
        const foundEmail = await Emails.findOne({email: email});
        if (!foundEmail.isVerified) {
            await sendCompleteWaitlist(email);
        }
        await Emails.updateOne({email: email}, {$set: { isVerified: true }});
        const count = await Emails.countDocuments({}).exec();

        res.send({
            status: 200,
            success: 1,
            number: count + 800,
            place: foundEmail.place + 800,
            email: foundEmail.email
        });
        return;
        
    }
    catch (error) {
        res.send({
            success: 0,
            error: error.message
        });
        return;
    }
}

const shareEmail = async (req, res) => {
    const { email } = req.body;
    try {
        await Emails.updateOne({email: email}, {$set: { isShared: true }});
        res.send({
            status: 200,
            success: 1,
        });
        return;
    }
    catch (error) {
        res.send({
            success: 0,
            error: error.message
        });
        return;
    }
}

const getCount = async (req, res) => {
    try {
        const count = await Emails.countDocuments({}).exec();
        res.send({
            status: 200,
            success: 1,
            number: count + 800
        });
        return;
    } catch (error) {
        res.send({
            success: 0,
            error: error.message
        });
        return;
    }
}

export {saveEmail, verifyEmail, shareEmail, getCount}