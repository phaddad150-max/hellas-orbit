"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

/** Kept for old links — content lives under Greece in Space. */
export default function NamesRedirectPage() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/landscape#space-speaks-greek");
  }, [router]);
  return (
    <p className="text-sm text-[#8b95ab]">
      Redirecting to Greece in Space…
    </p>
  );
}
