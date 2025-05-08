import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import "locomotive-scroll/dist/locomotive-scroll.css";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";

// Additional global styles
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  html, body, #root {
    height: 100%;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Inter', sans-serif;
    min-height: 100vh;
    overflow-x: hidden;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Montserrat', sans-serif;
  }
  
  .hover-lift {
    transition: transform 0.3s ease;
  }
  
  .hover-lift:hover {
    transform: translateY(-5px);
  }

  * {
    box-sizing: border-box;
  }
`;

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <GlobalStyles />
    <App />
  </QueryClientProvider>
);
