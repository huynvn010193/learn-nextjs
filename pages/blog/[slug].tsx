import { Post } from "@/models";
import { getPostList } from "@/utils/posts";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { useRouter } from "next/router";
import * as React from "react";

export interface BlogPageProps {
  post: Post;
}

export default function BlogDetaiPage({ post }: BlogPageProps) {
  if (!post) return null;
  return (
    <div>
      <h1>PostDetailPagePage</h1>
      <p>{post.title}</p>
      <p>{post.author?.name}</p>
      <p>{post.description}</p>
      <p>{post.mdContent}</p>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const postList = await getPostList();

  return {
    paths: postList.map((post: Post) => ({
      params: { slug: post.slug },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<BlogPageProps> = async (
  context: GetStaticPropsContext
) => {
  const postList = await getPostList();
  const slug = context.params?.slug;

  if (!slug) return { notFound: true };

  const post = postList.find((x) => x.slug === slug);
  if (!post) return { notFound: true };

  return {
    props: {
      post: post,
    },
  };
};
