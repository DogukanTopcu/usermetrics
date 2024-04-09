import LoopsClient from "loops";

const loops = new LoopsClient("954fb0c12ea45de9b585fcbc68b8c67c");

const sendVerificationEmail = async (email) => {
    const dataVariables = {
        confirmbutton: `https://usermetrics.co/congratulations?email=${email}`,
    };
    const resp = await loops.sendTransactionalEmail(
        "clqga635r0114bgw3ox45ntyw", 
        email,
        dataVariables
    );
    console.log(resp);
}

const sendCompleteWaitlist = async (email) => {
    const resp = await loops.sendTransactionalEmail(
        "clqgav0k40080fnod2addo9q0", 
        email
    );
    console.log(resp);
}

export { sendVerificationEmail, sendCompleteWaitlist }