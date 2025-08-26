"use client";

import { AuthContext } from "@/providers";
import { useRouter } from "next/navigation";
import { ReactNode, useContext, useEffect } from "react";

type Props = { children: ReactNode };

export default function ProtectedRoute({ children }: Props) {
  const { user, loading } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  if (loading || !user) return <div>Loading...</div>;

  return <>{children}</>;
}
