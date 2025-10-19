import { Stack } from "@mui/material";
import { HeroSection } from "../Content/ContactUs/HeroSection";
import { ThemeProvider } from "../Content/ThemeProvider";
import ClosingSection from "../Content/Home/ClosingSection";
import { useEffect } from "react";


export function ContactUs() {
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
      <Stack
        sx={{
          width: "100%",
          position: "relative",
          alignItems: "center"
        }}
      >
        <HeroSection/>
        <ClosingSection></ClosingSection>
      </Stack>
  );
};

export default ContactUs;


