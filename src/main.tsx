import React from "react";
import ReactDOM from "react-dom/client";
// CHAKRA_V3_FIX: Commented out all Chakra imports
// import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";

import App from "./App";
// CHAKRA_V3_FIX: Commented out theme import
// import theme from "./theme";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    {/* CHAKRA_V3_FIX: All Chakra providers commented out below */}
    {/* <ColorModeScript initialColorMode={theme.config.initialColorMode} /> */}
    {/* <ChakraProvider theme={theme}> */}
    {/*   <ColorModeScript initialColorMode={theme.config.initialColorMode} /> */}
    <App />
    {/* </ChakraProvider> */}
  </React.StrictMode>
);
