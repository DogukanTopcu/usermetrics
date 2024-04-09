'use client'
import React, { useEffect } from 'react'

import { useRouter, useSearchParams } from 'next/navigation'
import { useUserContext } from '@/context/user';

const GoogleOauth = () => {
    const searchParams = useSearchParams();
    const { googleOAuth } = useUserContext();
    const router = useRouter();

    const registerUser = async () => {
        const data = await googleOAuth(searchParams.get("code"));
        console.log(data);
        if(data) {
          router.push("/");
        }
        else {
          router.push("/auth/login");
        }
    }
    useEffect(() => {
        registerUser()
        .catch((error) => console.log(error));
    }, []);

  return (
    <div>
        Logging In...
    </div>
  )
}

export default GoogleOauth