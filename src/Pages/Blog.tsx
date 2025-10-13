import { Stack } from "@mui/material";
import { ThemeProvider } from "../Content/ThemeProvider";
import ClosingSection from "../Content/Home/ClosingSection";
import TitleSection from "../Content/Blog/TitleSection";
import { useEffect } from "react";
import BlogContentSection from "../Content/Blog/BlogContentSection";


export function Blog() {
      useEffect(() => {
    const centerHorizontally = () => {
      const docWidth = document.body.scrollWidth;
      const winWidth = window.innerWidth;
      const scrollLeft = (docWidth - winWidth) / 2;
      window.scrollTo({ left: scrollLeft });
    };

    window.addEventListener('resize', centerHorizontally);
    window.addEventListener('load', centerHorizontally);

    return () => {
      window.removeEventListener('resize', centerHorizontally);
      window.removeEventListener('load', centerHorizontally);
    };
  }, []);
  return (
    <ThemeProvider>
      <Stack
        sx={{
          width: "100%",
          position: "relative",
          alignItems: "center"
        }}
      >
        <TitleSection/>
        <BlogContentSection/>
        <ClosingSection></ClosingSection>
      </Stack>
    </ThemeProvider>
  );
};

export default Blog;
