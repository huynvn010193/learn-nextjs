import * as React from "react";
import { Card, CardContent, Typography, Divider, Box } from "@mui/material";
import { Post } from "@/models/index";
import { format } from "date-fns";

export interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" fontWeight="bold">
          {post.title}
        </Typography>
        <Box my={2} sx={{ display: "flex" }}>
          <Typography variant="body1">
            {format(Number(post.publishedDate), "dd MM yyyy")}
          </Typography>

          <Divider orientation="vertical" sx={{ mx: 2 }} flexItem />
          <Typography variant="body1">{post.tagList.join(", ")}</Typography>
        </Box>
        <Typography variant="body2">{post.description}</Typography>
      </CardContent>
    </Card>
  );
}
