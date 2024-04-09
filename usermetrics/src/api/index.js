import axios from "axios";
import dotenv from "dotenv";
dotenv.config();


let productUrl;
if (process.env.NEXT_ENV == "development") {
    productUrl = "http://localhost:5000/api/product/v1"
}
else {
    // productUrl = "https://usermetrics-test-server.azurewebsites.net/api/product/v1"
    productUrl = "http://localhost:5000/api/product/v1"
}

const signUp = async (userData) => await axios.post(`${productUrl}/user/register`, userData);
const login = async (userData) => await axios.post(`${productUrl}/user/login`, userData);

const registerGoogle = async (code) => await axios.post(`${productUrl}/user/googleOauth`, code);

const loadUserWithAccessToken = async (accessToken) => await axios.post(`${productUrl}/user/loadUserWithAccessToken`, {"accesstoken": accessToken});

export { signUp, login, registerGoogle, loadUserWithAccessToken }