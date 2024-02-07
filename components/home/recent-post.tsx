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

export function RecentPosts() {
  return (
    <Box component="section">
      <Container>
        <Stack>
          <Typography>Recent Posts</Typography>
          <Link href="/blog" passHref legacyBehavior>
            <MuiLink>View All</MuiLink>
          </Link>
        </Stack>
      </Container>
    </Box>
  );
}
