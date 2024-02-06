import { useRouter } from "next/router";
import { MainLayout } from "@/components/layout";
import { NextPageWithLayout } from "../models";
import { Box } from "@mui/material";
import HeroSection from "@/components/home/hero";

const Home: NextPageWithLayout = () => {
  const router = useRouter();

  return (
    <Box>
      <HeroSection />
    </Box>
  );
};

Home.Layout = MainLayout;

export default Home;
