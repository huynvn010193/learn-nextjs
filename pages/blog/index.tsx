import { getPostList } from "@/utils/posts";
import { GetStaticProps, GetStaticPropsContext } from "next";
import Link from "next/link";
import * as React from "react";

export interface BlogListPageProps {
  posts: any[];
}

export default function BlogListPage({ posts }: BlogListPageProps) {
  console.log("posts", posts);
  return (
    <div>
      <h1>Bog List Page</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`} legacyBehavior>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Muốn return gì thì phải truyền vô : GetStaticProps<PostListPageProps>
export const getStaticProps: GetStaticProps<BlogListPageProps> = async () => {
  // convert markdown to list of js object.
  const data = await getPostList();

  return {
    props: {
      posts: data.map((x: any) => ({ id: x.id, title: x.title })),
    },
  };
};