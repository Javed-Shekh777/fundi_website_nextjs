"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Spinner from "../loader/Spinner";
import FundiNavbar from "../navbar/FundiNavbar";
import CustomerNavbar from "../navbar/CustomerNavbar";
import SimpleNavbar from "../navbar/SimpleNavbar";
import Footer from "../footer/Footer";

export default function RootClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [userType, setUserType] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    if (userInfo) {
      setUserType("fundi");  
    }
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Spinner />
      </div>
    );
  }

  const hideLayoutRoutes = ["/login", "/signup", "/fundi"];
  const hideLayout = hideLayoutRoutes.some((route) =>
    pathname.startsWith(route)
  );

  let NavbarComponent = <SimpleNavbar />;
  if (userType === "fundi") NavbarComponent = <FundiNavbar />;
  else if (userType === "customer") NavbarComponent = <CustomerNavbar />;

  return (
    <>
      {!hideLayout && NavbarComponent}
      <main>{children}</main>
       <Footer />
    </>
  );
}
