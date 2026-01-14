import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, defaultConfig, createSystem } from "@chakra-ui/react";
import { ThemeProvider } from "next-themes";

import App from "./App";
import "./index.css";

const system = createSystem(defaultConfig);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider attribute="class">
      <ChakraProvider value={system}>
        <App />
      </ChakraProvider>
    </ThemeProvider>
  </React.StrictMode>
);
