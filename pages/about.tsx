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

  // Chỉ chạy phía client
  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://js-post-api.herokuapp.com/api/posts?_page=1"
      );
      const data = await response.json();
      setPostList(data.data);
    })();
  }, []);

  return (
    <div>
      <h1>About Page</h1>
      <Header />

      <ul className="post-list">
        {postList.map((post: any) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

// export async function getServerSideProps() {
//   return {
//     props: {},
//   };
// }
