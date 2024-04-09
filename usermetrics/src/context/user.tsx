"use client";

import { createContext, useContext, useState } from "react";
import { loadUserWithAccessToken, login, registerGoogle, signUp } from '@/api';


// type UserContext = {
//     id: Number,
//     name: String,
//     email: String,
//     accessToken: String,
//     image: String | null,
// }

const AppContext = createContext<any>(undefined);

export function UserProvider({ children } : { children : React.ReactNode; }) {
    let name: any;
    let company: any;
    let email: any;
    let accessToken: any;
    let phoneNumber: any;
    let image: any;
    const [user, setUser] = useState({
        name: name,
        company: company,
        email: email,
        accessToken: accessToken,
        phoneNumber: phoneNumber,
        image: image
    });

    const loadUser = async () : Promise<Boolean> => {
        const accessToken = localStorage.getItem("accessToken");
        try {
            await loadUserWithAccessToken(accessToken)
            .then((res) => {
                const d = res.data;
                setUser({
                    name: d.name,
                    company: d.company,
                    email: d.email,
                    accessToken: d.accesstoken,
                    phoneNumber: d.phoneNumber,
                    image: d.image,
                }); 
            }).catch((error) => {
                console.log(error);
                if (error) {
                    throw error;
                }
            });
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    const loginUser = async (email: String, password: String) : Promise<Boolean> => {
        try {
            await login({"email": email, "password": password})
            .then((res) => {
                const d = res.data;
                localStorage.setItem("accessToken", d.accesstoken);
                setUser({
                    name: d.name,
                    company: d.company,
                    email: d.email,
                    accessToken: d.accesstoken,
                    phoneNumber: d.phoneNumber,
                    image: d.image,
                });
            })
            .catch((err) => {
                if (err) {
                    throw err;
                }
            });

            return true;
        } catch (error) {
            return false;
        }
    }

    const signUpUser = async (name: String, company: String, email: String, password: String): Promise<Boolean> => {
        try {
            await signUp({
                "name": name,
                "company": company,
                "email": email,
                "password": password,
            })
            .then((res) => {
                const d = res.data;
                localStorage.setItem("accessToken", d.accesstoken);
                setUser({
                    name: d.name,
                    company: d.company,
                    email: d.email,
                    accessToken: d.accesstoken,
                    phoneNumber: d.phoneNumber,
                    image: d.image,
                });
            })
            .catch((err) => {
                if (err) {
                    throw err;
                }
            });
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }


    const googleOAuth = async (code: String): Promise<Boolean> => {

        try {
            await registerGoogle({"code": code})
            .then((res) => {
                const d = res.data;
                localStorage.setItem("accessToken", d.accesstoken);
                setUser({
                    name: d.name,
                    company: d.company,
                    email: d.email,
                    accessToken: d.accesstoken,
                    phoneNumber: d.phoneNumber,
                    image: d.image,
                }); 
            })
            .catch((error) => {
                console.log(error);
                if (error) {
                    throw error;
                }
            });
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }


    }


    return (
        <AppContext.Provider value={({ user, setUser, loadUser, loginUser, signUpUser, googleOAuth })}>
            {children}
        </AppContext.Provider>
    )
}


export function useUserContext() {
    return useContext(AppContext);
}