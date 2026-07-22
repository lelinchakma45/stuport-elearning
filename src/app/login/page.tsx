import type { Metadata } from "next";
import AuthForm from "@/components/auth/AuthForm";
import AuthShowcase from "@/components/auth/AuthShowcase";

export const metadata: Metadata = {
  title: "Sign in | Study Mind",
};

export default function LoginPage() {
  return (
    <div className="flex min-h-screen w-full bg-white">
      <AuthForm />
      <AuthShowcase />
    </div>
  );
}
