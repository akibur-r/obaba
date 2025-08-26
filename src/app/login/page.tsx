"use client";

import { useRouter } from "next/navigation";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";

export default function LoginPage() {
  const router = useRouter();

  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      router.push("/products"); 
    } catch (error) {
      console.error("Login failed:", error);
      alert("Login failed. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 px-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-6">
          Login to <span className="text-blue-600">Obaba.com</span>
        </h1>
        <p className="text-center text-gray-500 dark:text-gray-400 mb-8">
          Continue with your Google account to access products and dashboard
        </p>

        <Button
          onClick={handleGoogleLogin}
          variant="outline"
          className="w-full flex items-center justify-center gap-3 py-6 text-lg cursor-pointer"
        >
          <FcGoogle size={24} />
          Continue with Google
        </Button>
      </div>
    </div>
  );
}
