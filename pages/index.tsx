import { useRouter } from "next/router";
import { MainLayout } from "@/components/layout";
import { NextPageWithLayout } from "../models";
import { Box } from "@mui/material";

const Home: NextPageWithLayout = () => {
  const router = useRouter();

  function goToDetailPage() {
    router.push({
      pathname: "/posts/[postId]",
      query: {
        postId: 123,
        ref: "social",
      },
    });
  }

  return <Box>Home Page</Box>;
};

Home.Layout = MainLayout;

export default Home;
