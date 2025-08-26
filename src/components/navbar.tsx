"use client";

import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import Image from "next/image";

export default function Navbar() {
  const { data: session } = useSession();

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
          {!session ? (
            <Link href="/login" className="px-3 py-1 border rounded">
              Login
            </Link>
          ) : (
            <Button onClick={() => signOut()} className="px-3 py-1 border rounded">
              Logout
            </Button>
          )}
        </nav>
      </div>
    </header>
  );
}
