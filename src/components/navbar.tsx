"use client";

import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { FaPlus } from "react-icons/fa";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <header className="border-b bg-cyan-500 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <Link href="/" className="text-2xl font-bold">
          <Image src={logo} alt="Obaba.com Logo" className="h-10 w-fit" />
        </Link>
        <Link href="/products" className="hover:text-blue-600">
          Products
        </Link>
        <nav className="flex gap-4 items-center">
          {!session ? (
            <Link href="/login" className="px-3 py-1 border rounded">
              Login
            </Link>
          ) : (
            <div className="flex items-center gap-2">
              <Link
                href="/dashboard/add-product"
                className="hover:text-blue-600"
              >
                <span className="hidden md:block">Add Product</span>
                <FaPlus className="md:hidden" />
              </Link>
              <Button
                onClick={() => signOut()}
                className="px-3 py-1 border rounded"
              >
                Logout
              </Button>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
