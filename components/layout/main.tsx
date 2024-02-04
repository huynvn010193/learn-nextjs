import { LayoutProps } from "@/models/index";
import Link from "next/link";
import React, { useEffect } from "react";
import { Stack, Box, Container } from "@mui/material";
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
        <Container
          maxWidth='sm'
          sx={{
            bgcolor: "primary.main",
          }}
        >
          SM Container
        </Container>
        <Container sx={{ bgcolor: "primary.main" }}>MD Container</Container>
        <Link href='/'>Home</Link>
        <Link href='/blog'>Blog</Link>
        <Link href='/works'>Works</Link>
        {children}
      </Box>
      <Footer />
    </Stack>
  );
}
