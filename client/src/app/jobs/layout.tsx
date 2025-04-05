"use client";

import { useEffect, useState } from "react";
import BreadCrumb from "@/components/breadcrumb/BreadCrumb";
import Spinner from "@/components/loader/Spinner"; // ✅ make sure you have this
import { usePathname } from "next/navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 300);  

    return () => clearTimeout(timer);
  }, [pathname]);  

  

  return (
    <div className="w-full min-h-screen">
      <BreadCrumb />

      {loading ? (
        <div className="w-full h-[200px] flex items-center justify-center">
          <Spinner />  
        </div>
      ) : (
        children
      )}
    </div>
  );
}
