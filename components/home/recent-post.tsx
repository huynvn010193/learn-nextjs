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

export function RecentPosts() {
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
          <Box>
            <PostCard />
          </Box>
          <Box>
            <PostCard />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
