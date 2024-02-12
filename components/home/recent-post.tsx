import * as React from "react";
import {
  Box,
  Container,
  Stack,
  Typography,
  Button,
  Link as MuiLink,
} from "@mui/material";
import Link from "next/link";
import { PostCard } from "./post-card";
import { Post } from "@/models";

export function RecentPosts() {
  const postList: Post[] = [
    {
      id: "1",
      title: "Making a design system from scratch",
      publishedDate: "1648363391671",
      tagList: ["Design", "Pattern"],
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
      id: "2",
      title: "Creating pixel perfect icons in Figma",
      publishedDate: "1648363391671",
      tagList: ["Figma", "Icon design"],
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
  ];
  return (
    <Box component="section" bgcolor="secondary.light" pb={4} pt={2}>
      <Container>
        <Stack
          direction="row"
          mb={2}
          justifyContent={{ xs: "center", md: "space-between" }}
          alignItems="center"
        >
          <Typography variant="h5">Recent Posts</Typography>
          <Link href="/blog" passHref legacyBehavior>
            <MuiLink sx={{ display: { xs: "none", md: "inline-block" } }}>
              View All
            </MuiLink>
          </Link>
        </Stack>
        <Stack
          direction={{
            xs: "column",
            md: "row",
          }}
          spacing={3}
          sx={{
            "& > div": {
              width: {
                xs: "100%",
                md: "50%",
              },
            },
          }}
        >
          {postList.map((post) => (
            <Box key={post.id}>
              <PostCard post={post} />
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
