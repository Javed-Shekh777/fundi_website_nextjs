"use client";
import { useEffect, useState } from "react";

import Spinner from "@/components/loader/Spinner";
import FundiHomePage from "@/components/home/FundiHomePage";
import CustomerHomePage from "@/components/home/CustomerHomePage";
import PublicHomePage from "@/components/home/PublicHomePage";

export default function HomePage() {
  const [userType, setUserType] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo") || "fkdsfklds";
    if (userInfo) {
      setUserType("customer"); 
    }
    setLoading(false);
  }, []);

  if (loading) return <Spinner />;

  const renderHome = () => {
    switch (userType) {
      case "fundi":
        return <FundiHomePage />;
      case "customer":
        return <CustomerHomePage />;
      default:
        return <PublicHomePage />;
    }
  };

  return <>{renderHome()}</>;
}
