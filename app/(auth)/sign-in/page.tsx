"use client";

import { useState, ChangeEvent } from "react";
import { supabase } from "@/lib/supabaseClient";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function SignInForm() {
  const router = useRouter();
  type userDetailsProps = {
    email: string;
    password: string;
  };
  const [userDetails, setUserDetails] = useState<userDetailsProps>({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const inputHandle = (e: ChangeEvent<HTMLInputElement>) => {
    setUserDetails((prev) => ({
      ...prev,
      [e?.target?.id]: e?.target?.value,
    }));
  };

  async function handleSignIn() {
    try {
      setLoading(true);
      const { data, error } = await supabase.auth.signInWithPassword({
        email: userDetails?.email,
        password: userDetails?.password,
      });
      if (data?.session) {
        localStorage.setItem("access_token", data.session.access_token);
        router.push("/home");
      }
      if (error) throw error;
    } catch (err: any) {
      alert(err.message ?? "Error sending magic link");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="p-5 md:p-10 lg:p-15 2xl:p-20 flex justify-center items-center">
      <form className="mt-20 text-center p-6 rounded-2xl bg-white shadow">
        <div className="flex justify-center">
          <span className="relative bg-black rounded-full w-15 h-15">
            <Image
              src="/logo.svg"
              alt="logo"
              fill
              className="object-cover p-3"
            />
          </span>
        </div>
        <h4 className="my-3 font-semibold">Sign in</h4>
        <div className="flex flex-col items-start mt-4">
          <label className="!font-normal text-xs text-left" htmlFor="username">
            Email *
          </label>
          <input
            id="email"
            type="email"
            onChange={inputHandle}
            placeholder="Enter your email"
            className="border border-border py-2 px-4 bg-border/10 rounded-md w-full my-3 text-xs md:text-base"
          />
        </div>
        <div className="flex flex-col items-start">
          <label className="text-xs !font-normal" htmlFor="password">
            Password*
          </label>
          <input
            id="password"
            type="password"
            onChange={inputHandle}
            placeholder="Enter your password"
            className="border border-border py-2 px-4 bg-border/10 rounded-md w-full my-3 text-xs md:text-base"
          />
        </div>
        <div className="flex flex-col items-start mt-4">
          <button
            className="w-full bg-black text-white py-3 rounded-md"
            onClick={handleSignIn}
            disabled={loading}
          >
            {loading ? "Please Wait" : "Log In"}
          </button>
        </div>
      </form>
    </div>
  );
}
