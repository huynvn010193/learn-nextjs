import { LayoutProps } from "@/models/index";
import Link from "next/link";
import React, { useEffect } from "react";
import { Stack, Box } from "@mui/material";
import { Header, Footer } from "../common";

export function MainLayout({ children }: LayoutProps) {
  useEffect(() => {
    console.log("MainLayout mouting");
    return () => console.log("MainLayout unmouting");
  }, []);

  return (
    <Stack minHeight='100vh'>
      <Header />
      <Box component='main' flexGrow={1}>
        <Link href='/'>Home</Link>
        <Link href='/blog'>Blog</Link>
        <Link href='/works'>Works</Link>
        {children}
      </Box>
      <Footer />
    </Stack>
  );
}
