import { useRouter } from "next/router";
import { MainLayout } from "@/components/layout";
import { NextPageWithLayout } from "../models";
import { Box } from "@mui/material";
import { FeaturedWorks, HeroSection, RecentPosts } from "@/components/home";

const Home: NextPageWithLayout = () => {
  const router = useRouter();

  return (
    <Box>
      <HeroSection />
      <RecentPosts />
      <FeaturedWorks />
    </Box>
  );
};

Home.Layout = MainLayout;

export default Home;
