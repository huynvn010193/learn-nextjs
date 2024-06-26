import PostItem from "@/components/blog/post-item";
import { MainLayout } from "@/components/layout";
import { Post } from "@/models";
import { getPostList } from "@/utils/posts";
import { Box, Divider, Container } from "@mui/material";
import { GetStaticProps, GetStaticPropsContext } from "next";
import Link from "next/link";
import * as React from "react";

export interface BlogListPageProps {
  posts: Post[];
}

export default function BlogListPage({ posts }: BlogListPageProps) {
  console.log("posts", posts);
  return (
    <Box>
      <Container>
        <h1>Bog</h1>
        <Box component="ul" sx={{ listStyleType: "none", p: 0 }}>
          {posts.map((post) => (
            <li key={post.id}>
              <Link href={`/blog/${post.slug}`} legacyBehavior>
                <a>
                  <PostItem post={post} />
                </a>
              </Link>
              <Divider sx={{ my: 3 }} />
            </li>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

BlogListPage.Layout = MainLayout;

// Muốn return gì thì phải truyền vô : GetStaticProps<PostListPageProps>
export const getStaticProps: GetStaticProps<BlogListPageProps> = async () => {
  // convert markdown to list of js object.
  const postList = await getPostList();

  return {
    props: {
      posts: postList,
    },
  };
};
