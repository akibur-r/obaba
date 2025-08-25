"use client";
import { auth } from "@/lib/firebase";
import { AuthContext } from "@/providers";
import { signOut } from "firebase/auth";
import Link from "next/link";
import { useContext } from "react";

import logo from "@/assets/logo.png";
import Image from "next/image";

export default function Navbar() {
  const { user } = useContext(AuthContext);

  return (
    <header className="border-b bg-cyan-500 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <Link href="/" className="text-2xl font-bold">
          <Image src={logo} alt="Obaba.com Logo" className="h-10 w-fit" />
        </Link>
        <nav className="flex gap-4 items-center">
          <Link href="/products" className="hover:text-blue-600">
            Products
          </Link>
          {!user ? (
            <Link href="/login" className="px-3 py-1 border rounded">
              Login
            </Link>
          ) : (
            <button
              onClick={() => signOut(auth)}
              className="px-3 py-1 border rounded"
            >
              Logout
            </button>
          )}
        </nav>
      </div>
    </header>
  );
}
