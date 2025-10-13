import { Outlet, useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import { useEffect } from "react";

export default function Layout() {
    const { pathname } = useLocation();

  useEffect(() => {
    // when the route path changes, scroll to top
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return (
    <Box
      sx={{
        width: "100vw",       // full viewport width
        minWidth: "1920px",   // keep centered layout
        display: "flex",
        justifyContent: "center",
        flexDirection: "column", // stack content vertically
        alignItems: "center",
      }}
    >
      {/* Main routed content goes here */}
      <Outlet />
    </Box>
  );
}
