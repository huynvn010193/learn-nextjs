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
import { Post, Work } from "@/models";
import WorkList from "../work/work-list";

export function FeaturedWorks() {
  const workList: Work[] = [
    {
      id: "1",
      title: "Designing Dashboards",
      createdAt: "1648363391671",
      updatedAt: "1648363391671",
      tagList: ["Dashboard"],
      shortDescription:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      fullDescription: "",
      thumbnailUrl:
        "https://res.cloudinary.com/dzzq0rw8w/image/upload/v1707719605/learn-nextJS/item-1_ivrvzy.jpg",
    },
    {
      id: "2",
      title: "Vibrant Portraits of 2020",
      createdAt: "1648363391671",
      updatedAt: "1648363391671",
      tagList: ["Illustration"],
      shortDescription:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      fullDescription: "",
      thumbnailUrl:
        "https://res.cloudinary.com/dzzq0rw8w/image/upload/v1707719605/learn-nextJS/item-2_soupxt.jpg",
    },
    {
      id: "3",
      title: "36 Days of Malayalam type",
      createdAt: "1648363391671",
      updatedAt: "1648363391671",
      tagList: ["Typography"],
      shortDescription:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      fullDescription: "",
      thumbnailUrl:
        "https://res.cloudinary.com/dzzq0rw8w/image/upload/v1707719605/learn-nextJS/item-3_ffried.jpg",
    },
  ];
  return (
    <Box component="section" pb={4} pt={2}>
      <Container>
        <Typography variant="h5">Featured Works</Typography>
        <WorkList workList={workList} />
      </Container>
    </Box>
  );
}
