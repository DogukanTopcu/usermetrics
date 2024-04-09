import LoopsClient from "loops";

const loops = new LoopsClient(process.env.LOOPS_CLIENT);

const sendVerificationEmail = async (email) => {
    const dataVariables = {
        confirmbutton: `https://usermetrics.co/congratulations?email=${email}`,
    };
    const resp = await loops.sendTransactionalEmail(
        process.env.LOOPS_VERIFICATION_TRANSACTON_ID, 
        email,
        dataVariables
    );
    console.log(resp);
}

const sendCompleteWaitlist = async (email) => {
    const resp = await loops.sendTransactionalEmail(
        process.env.LOOPS_WAITLIST_TRANSACTION_ID, 
        email
    );
    console.log(resp);
}

export { sendVerificationEmail, sendCompleteWaitlist }
