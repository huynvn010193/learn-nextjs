import { LayoutProps } from "@/models/index";
import Link from "next/link";
import React, { useEffect } from "react";

export function MainLayout({ children }: LayoutProps) {
  useEffect(() => {
    console.log("MainLayout mouting");
    return () => console.log("MainLayout unmouting");
  }, []);

  return (
    <div>
      <h1>MainLayout</h1>
      <Link href='/'>Home</Link>
      <Link href='/about'>About</Link>
      <div>{children}</div>
    </div>
  );
}
