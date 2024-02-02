// import Header from "@/components/common/header";
import { AdminLayout, MainLayout } from "@/components/layout";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";

// chỉ render bên phía client. ko render phía server.
const Header = dynamic(() => import("@/components/common/header"), {
  ssr: false,
});

export interface AboutPageProps {}

export default function AboutPage(props: AboutPageProps) {
  const [postList, setPostList] = useState([]);
  const router = useRouter();
  const page = router.query?.page;

  // Chỉ chạy phía client
  useEffect(() => {
    if (!page) return;
    (async () => {
      const response = await fetch(
        `https://js-post-api.herokuapp.com/api/posts?_page=${page}`
      );
      const data = await response.json();
      setPostList(data.data);
    })();
  }, [page]);

  function handleNextClick() {
    router.push(
      {
        pathname: "/about",
        query: {
          page: Number(page || 0) + 1,
        },
      },
      undefined,
      { shallow: true } // Khi bằng true thì ko chạy lại getStaticProps, tức là ko call lên server. shallow routing
    );
  }

  return (
    <Box>
      <Typography variant='h3' component='h1' color='primary.main'>
        About Page
      </Typography>
      <Header />

      <ul className='post-list'>
        {postList.map((post: any) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>

      <button onClick={handleNextClick}>Netx Page</button>
    </Box>
  );
}

AboutPage.Layout = AdminLayout;

export async function getStaticProps() {
  console.log("get static props");
  return {
    props: {},
  };
}

// export async function getServerSideProps() {
//   return {
//     props: {},
//   };
// }
