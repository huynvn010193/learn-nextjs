import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { red } from "@mui/material/colors";

export let theme = createTheme({
  typography: {
    fontFamily: "Heebo, sans-serif",
  },
  palette: {
    primary: {
      main: "#ff6464",
    },
    secondary: {
      light: "#edf7fa",
      main: "#00a8cc",
    },
    error: {
      main: red.A400,
    },
    text: {
      primary: "#21243D",
    },
  },
  components: {
    MuiContainer: {
      defaultProps: {
        maxWidth: "md",
      },
      styleOverrides: {
        maxWidthSm: {
          maxWidth: "680px",
          "@media (min-width: 600px)": {
            maxWidth: "680px",
          },
        },
        maxWidthMd: {
          maxWidth: "860px",
          "@media (min-width: 900px)": {
            maxWidth: "860px",
          },
        },
      },
    },
    MuiLink: {
      defaultProps: {
        underline: "none",
      },
      styleOverrides: {
        root: {
          color: "black",
          "&:hover, &.active": {
            color: "#ff6464",
          },
        },
      },
    },
    // trường hợp button có variant là contained và color: primary thì color -> white.
    MuiButton: {
      variants: [
        {
          props: { variant: "contained", color: "primary" },
          style: {
            color: "white",
          },
        },
      ],
    },
  },
});

// theme.typography.h3 = {
//   fontSize: "2rem",
//   [theme.breakpoints.up("md")]: {
//     fontSize: "3rem",
//   },
// };

theme = responsiveFontSizes(theme);
