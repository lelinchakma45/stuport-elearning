"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { BookMarked, Eye, EyeOff } from "lucide-react";
import GoogleIcon from "./GoogleIcon";

export default function AuthForm() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  function handleSignIn(e: React.FormEvent) {
    e.preventDefault();
    router.push("/dashboard");
  }

  return (
    <div className="flex w-full flex-col px-8 py-10 sm:px-14 lg:w-[47%] lg:px-16">
      <Link href="/" className="flex items-center gap-2">
        <BookMarked className="h-6 w-6 text-brand" strokeWidth={2} />
        <span className="text-[18px] font-semibold lowercase text-[#181826]">study mind</span>
      </Link>

      <div className="flex flex-1 flex-col justify-center py-10">
        <h1 className="text-[22px] font-bold text-[#181826]">Welcome back to study mind</h1>
        <p className="mt-1.5 text-[13px] text-[#8B8B96]">
          Login with your registered email &amp; password
        </p>

        <form className="mt-7 flex flex-col gap-4" onSubmit={handleSignIn}>
          <button
            type="button"
            onClick={() => router.push("/dashboard")}
            className="flex items-center justify-center gap-2.5 rounded-lg border border-black/10 py-2.5 text-[13.5px] font-medium text-[#181826] hover:bg-black/[0.02]"
          >
            <GoogleIcon className="h-4 w-4" />
            Sign in with Google
          </button>

          <div className="flex items-center gap-3">
            <span className="h-px flex-1 bg-black/10" />
            <span className="text-[11px] font-medium text-[#B5B5BD]">OR</span>
            <span className="h-px flex-1 bg-black/10" />
          </div>

          <label className="flex flex-col gap-1.5">
            <span className="text-[12.5px] font-semibold text-[#181826]">Work Email</span>
            <input
              type="email"
              defaultValue="minhas@studymind.com"
              className="rounded-lg border border-black/10 px-3.5 py-2.5 text-[13.5px] text-[#181826] focus:border-brand/40 focus:outline-none"
            />
          </label>

          <label className="flex flex-col gap-1.5">
            <span className="text-[12.5px] font-semibold text-[#181826]">Password</span>
            <div className="flex items-center rounded-lg border border-black/10 px-3.5 py-2.5 focus-within:border-brand/40">
              <input
                type={showPassword ? "text" : "password"}
                defaultValue="password123"
                className="w-full text-[13.5px] text-[#181826] focus:outline-none"
              />
              <button
                type="button"
                aria-label={showPassword ? "Hide password" : "Show password"}
                onClick={() => setShowPassword((v) => !v)}
                className="text-[#9A9AA5] hover:text-[#181826]"
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4" strokeWidth={1.8} />
                ) : (
                  <Eye className="h-4 w-4" strokeWidth={1.8} />
                )}
              </button>
            </div>
          </label>

          <Link href="#" className="-mt-2 text-[12.5px] font-medium text-brand hover:underline">
            Forgot your password?
          </Link>

          <button
            type="submit"
            className="mt-1 rounded-lg bg-brand py-2.5 text-[13.5px] font-semibold text-white hover:opacity-90"
          >
            Sign In
          </button>

          <p className="text-center text-[12.5px] text-[#8B8B96]">
            Don&apos;t have an account?{" "}
            <Link href="#" className="font-semibold text-brand hover:underline">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
