// import Header from "@/components/common/header";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

// chỉ render bên phía client. ko render phía server.
const Header = dynamic(() => import("@/components/common/header"), {
  ssr: false,
});

export interface AboutPageProps {}

export default function AboutPage(props: AboutPageProps) {
  const [postList, setPostList] = useState([]);
  const router = useRouter();

  console.log("About query", router.query);
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
      console.log("page", page);
    })();
  }, [page]);

  function handleNextClick() {
    router.push(
      {
        pathname: "/about",
        query: {
          page: Number(page) + 1,
        },
      },
      undefined,
      { shallow: true } // Khi bằng true thì ko chạy lại getStaticProps, tức là ko call lên server. shallow routing
    );
  }

  return (
    <div>
      <h1>About Page</h1>
      <Header />

      <ul className="post-list">
        {postList.map((post: any) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>

      <button onClick={handleNextClick}>Netx Page</button>
    </div>
  );
}

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
