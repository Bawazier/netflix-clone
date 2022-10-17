// theme.config.js

// 1. import `extendTheme` function
import { extendTheme } from "@chakra-ui/react";
import { ComponentStyleConfig } from "@chakra-ui/react";

const ComponentStyle = {
  // style object for base or default style
  baseStyle: {},
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {},
  // default values for 'size', 'variant' and 'colorScheme'
  defaultProps: {
    size: "",
    variant: "",
    colorScheme: "",
  },
};

// 2. Add your color mode config
const config = {
  initialColorMode: "system", // light, dark, system
  useSystemColorMode: true,
};

const breakpoints = {
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em",
};

const fonts = {
  roboto:
    "Roboto Slab, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
};

// 3. extend the theme
const theme = extendTheme({
  config,
  breakpoints,
  fonts,
  styles: {
    global: {
      "html, body": {
        fontFamily: "roboto",
        padding: 0,
        margin: 0,
        overflowX: "hidden",
      },
      "*": {
        boxSizing: "border-box",
      },
      a: {
        color: "inherit",
        textDecoration: "none",
      },

      Button: {},
      Heading: {
        fontFamily: "roboto",
      },
    },
  },
  components: {
    Button: {
      Button: {
        // 1. We can update the base styles
        baseStyle: {
          fontWeight: "", // Normally, it is "semibold"
        },
        // 2. We can add a new button size or extend existing
        sizes: {
          xl: {
            h: "56px",
            fontSize: "lg",
            px: "32px",
          },
        },
        // 3. We can add a new visual variant
        variants: {
          "with-shadow": {
            bg: "red.400",
            boxShadow: "0 0 2px 2px #efdfde",
          },
          // 4. We can override existing variants
          solid: (props) => ({
            bg: props.colorMode === "dark" ? "red.300" : "red.500",
          }),
          // 5. We can add responsive variants
          sm: {
            bg: "teal.500",
            fontSize: "md",
          },
        },
        // 6. We can overwrite defaultProps
        defaultProps: {
          // size: "lg", // default is md
          // variant: "sm", // default is solid
          // colorScheme: "green", // default is gray
        },
      },
    },
  },
});

export default theme;
