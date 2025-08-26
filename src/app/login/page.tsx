"use client";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center py-32">
      <h1 className="text-3xl font-bold mb-6">Login</h1>
      <Button onClick={() => signIn("google")}>Sign in with Google</Button>
    </div>
  );
}
