import * as React from "react";
import { Box, Container, Stack, Link as MuiLink } from "@mui/material";
import { ROUTE_LIST } from "./routes";
import Link from "next/link";

export interface HeaderDesktopProps {}

export default function HeaderDesktop(props: HeaderDesktopProps) {
  return (
    <Box display={{ xs: "none", md: "block" }} py={2}>
      <Container>
        <Stack direction='row' justifyContent='flex-end'>
          {ROUTE_LIST.map((router) => (
            <Link key={router.path} href={router.path} passHref legacyBehavior>
              <MuiLink sx={{ ml: 2 }}>{router.label}</MuiLink>
            </Link>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
