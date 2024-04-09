import axios from "axios";

// const url = "http://localhost:5000/api/lp/emails";
const url = "https://usermetrics.azurewebsites.net/api/lp/emails";

export const saveEmail = async (email) => await axios.post(`${url}/save`, { "email": email });
export const verifyEmail = async (email) => await axios.post(`${url}/verify`, { "email": email });
export const updateShare = async (email) => await axios.post(`${url}/share`, { "email": email });
export const getPeopleNumber = async () => await axios.get(`${url}/waitlist`);

export const sendNotification = async (email) => await axios.post("https://usermetrics.azurewebsites.net/api/discord/newEmailNotification", { "email": email });