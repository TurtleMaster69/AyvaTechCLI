import { Stack } from "@mui/material";
import { HeroSection } from "../Content/Home/HeroSection";
import { WhereWeCanHelpSection } from "../Content/Home/WhereWeCanHelpSection";
import HowWeWorkSection from "../Content/Home/HowWeWorkSection";
import PictureSection from "../Content/Home/PictureSection";
import ClosingSection from "../Content/Home/ClosingSection";
import BlogSection from "../Content/Home/BlogSection";
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
        <WhereWeCanHelpSection/>
        <HowWeWorkSection/>
        <PictureSection></PictureSection>
        <BlogSection></BlogSection>
        <ClosingSection></ClosingSection>
      </Stack>
  );
};

export default ContactUs;
