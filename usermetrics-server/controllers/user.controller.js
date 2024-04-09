import User from "../models/user.model.js";
import generateToken from "../utils/generateToken.js";
import bcrypt from "bcrypt";

import axios from "axios";
import querystring from "querystring";
import generateSecureKey from "../utils/generateSecureKey.js";

import { jwtDecode } from "jwt-decode";

const loginDefault = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ where: { email: email }});

        if(user) {
            const isPasswordCorrect = await bcrypt.compare(password, user.password);
            if (isPasswordCorrect) {

                const accesstoken = generateToken({
                    email: user.email,
                    secureKey: user.secureKey
                });
                res.status(200).json({
                    status: 200,
                    accesstoken: accesstoken,
                    name: user.name,
                    email: user.email,
                    company: user.company,
                    phoneNumber: user.phoneNumber,
                    image: user.image,
                });
            }
            else throw error;
        }
        else throw error

    } 
    catch (error) {
        res.status(404).json({
            status: 404,
            message: "User cannot found",
        });
    }
}

const register = async (req, res) => {
    const { name, company, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        /* Is user exist control */
        // const isEmailExist = await User.findOne({where: {email: email}});
        // if (isEmailExist != null) throw error;

        const securityKey = generateSecureKey();
        
        const user = await User.create({ name: name, company: company,  email: email, password: hashedPassword, secureKey: securityKey });

        await user.save();

        const accesstoken = generateToken({
            email: email,
            secureKey: user.secureKey
        });

        res.status(200).json({
            status: 200,
            accesstoken: accesstoken,
            name: user.name,
            email: user.email,
            company: user.company,
            phoneNumber: user.phoneNumber,
            image: user.image,
        });
    } 
    catch (error) {
        res.status(401).json({
            status: 401,
            message: "User cannot registered",
        });
    }
}

const getTokens = ({ code, clientId, clientSecret, redirectUri }) => {
    const url = "https://oauth2.googleapis.com/token";
    const values = {
      code: code,
      client_id: clientId,
      client_secret: clientSecret,
      redirect_uri: redirectUri,
      grant_type: "authorization_code",
    };   
    
    return axios.post(url, querystring.stringify(values), {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
    .then((res) => res.data)
    .catch((error) => {
      console.error(`Failed to fetch auth tokens`);
      throw new Error(error.message);
    });
}

const googleOauth = async (req, res) => {
    // Get the user from Google with the code comes from request
    const { code } = req.body;

    try {
        const { id_token, access_token } = await getTokens({
            code: code,
            clientId: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            redirectUri: process.env.GOOGLE_OAUTH_REDIRECT_URL,
        });
    
        //--> Fetch the user's profile with the access token and bearer
        const googleUser = await axios.get(
          `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${access_token}`,
          {
            headers: {
              Authorization: `Bearer ${id_token}`,
            },
          }
        )
        .then((res) => res.data)
        .catch((error) => {
          console.error(`Failed to fetch user`);
          throw new Error(error.message);
        });

        // Login or Save the User
        /** Find the user by email */
        const user = await User.findOne({where: {email: googleUser.email}});

        // If the user exists:
        if (user != null) {
            /** Check the user's password if the password exists and equals to 'google' then return the user,
             * if the password exists and has a hashed password then response 401
            */
            const password = user.password;
            if(password == "google") {
                const accesstoken = generateToken({
                    email: user.email,
                    secureKey: user.secureKey
                });
        
                console.log("sending data");
                res.status(200).json({
                    status: 200,
                    accesstoken: accesstoken,
                    name: user.name,
                    email: user.email,
                    company: user.company,
                    phoneNumber: user.phoneNumber,
                    image: user.image,
                });
            }
            else {
                res.status(401).json({
                    status: 401,
                    message: "User exists but not signed up with google",
                });
            }

        }
        else {
            // If the user doesn't exist:
            /** Create a new user in the database and send the data of this user as response. */   
            const securityKey = generateSecureKey();

            const newUser = await User.create({ name: googleUser.name, email: googleUser.email, password: "google", secureKey: securityKey, image: googleUser.picture });

            await newUser.save();

            const newAccesstoken = generateToken({
                email: newUser.email,
                secureKey: newUser.secureKey
            });

            res.status(200).json({
                status: 200,
                accesstoken: newAccesstoken,
                name: newUser.name,
                email: newUser.email,
                company: newUser.company,
                phoneNumber: newUser.phoneNumber,
                image: newUser.image,
            });
        }

    } catch (error) {
        res.status(402).json({
            status: 402,
            message: "There is an error",
        })
    }
}


const loadUserWithAccessToken = async (req, res) => {
    try {
        // Decode the token
        const { accesstoken } = req.body;
        const decodedUser = jwtDecode(accesstoken);

        // Find the user by email if there is no user exist throw error and send 404 error.
        const user = await User.findOne({where: {email: decodedUser.email}});

        // Be sure the user is true, compare the security key string
        if (user) {
            if (user.secureKey == decodedUser.secureKey) {
                res.status(200).json({
                    status: 200,
                    accesstoken: accesstoken,
                    name: user.name,
                    email: user.email,
                    company: user.company,
                    phoneNumber: user.phoneNumber,
                    image: user.image,
                });
            }
            else throw error;
        }
        else throw error;

        // Send the data back
        
    } catch (error) {
        res.status(404).json({
            status: 404,
            message: "User cannot found!"
        });
    }
}

export { loginDefault, register, googleOauth, loadUserWithAccessToken };