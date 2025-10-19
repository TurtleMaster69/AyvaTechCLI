import { Outlet, useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import { useEffect } from "react";
import Header from "./Header";
import { ThemeProvider } from "./ThemeProvider";

export default function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    // when the route path changes, scroll to top
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return (
    <ThemeProvider>
      <Box
        sx={{
          width: "100vw",       // full viewport width // keep centered layout
          display: "flex",
          justifyContent: "center",
          flexDirection: "column", // stack content vertically
          alignItems: "center",
        }}
      >
        <Header id={'homeHeader'}></Header>
        {/* Main routed content goes here */}
        <Outlet />
      </Box>
    </ThemeProvider>
  );
}
