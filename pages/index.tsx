import { useRouter } from "next/router";
import { MainLayout } from "@/components/layout";
import { NextPageWithLayout } from "../models";
import { Box } from "@mui/material";
import { FeaturedWorks, HeroSection, RecentPosts } from "@/components/home";
import { SEO } from "@/components/common";

const Home: NextPageWithLayout = () => {
  const router = useRouter();

  return (
    <Box>
      <SEO
        data={{
          title: "NextJS learn",
          description: "NextJS learn",
          url: "https://vercel.com/huynvn010193/learn-nextjs",
          thumbnail: "",
        }}
      />
      <HeroSection />
      <RecentPosts />
      <FeaturedWorks />
    </Box>
  );
};

Home.Layout = MainLayout;

export default Home;
