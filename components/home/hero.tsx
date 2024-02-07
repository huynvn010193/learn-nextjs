import * as React from "react";
import { Box, Container, Stack, Typography, Button } from "@mui/material";
import Image from "next/image";
import avatar from "@/images/avatar.png";

export default function HeroSection() {
  return (
    <Box component="section" pt={{ xs: 4, md: 18 }} pb={{ xs: 7, md: 9 }}>
      <Container>
        <Stack
          direction={{ xs: "column-reverse", md: "row" }}
          alignItems="flex-start"
          spacing={8}
        >
          <Box>
            <Typography component="h1" variant="h3" fontWeight="bold" mb={5}>
              Hi, I am John,
              <br /> Creative Technologist
            </Typography>
            <Typography mb={5}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </Typography>
            <Button variant="contained" size="large">
              Download Resume
            </Button>
          </Box>
          <Box
            mb={5}
            sx={{
              minWidth: "240px",
              boxShadow: "-5px 13px",
              color: "secondary.light",
              borderRadius: "50%",
            }}
          >
            <Image src={avatar} alt="avatar" layout="responsive" />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
