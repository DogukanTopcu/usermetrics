"use client";

import { useUserContext } from "@/context/user";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const { user, loadUser } = useUserContext();
  const router = useRouter();
  useEffect(() => {
    const lu = async () : Promise<Boolean> => {
      const isLoaded = await loadUser();
      return isLoaded;
    }

    if (localStorage.getItem("accessToken") != null) {
      lu().then((res) => {
        console.log(res);
        if (!res) {
          router.push("/auth/login");    
        }
      }).catch((err) => console.log(err));
    }
    else {
      router.push("/auth/login");
    }
  }, [])
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {
        user?.name ? "Welcome " + user?.name : "User doesn't exist"
      }
    </main>
  );
}
