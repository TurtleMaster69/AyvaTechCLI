import { useEffect, lazy} from "react";
import { Stack } from "@mui/material";
import { HeroSection } from "../Content/Home/HeroSection";

const WhereWeCanHelpSection = lazy(()=> import("../Content/Home/WhereWeCanHelpSection"))  
const HowWeWorkSection = lazy(()=> import("../Content/Home/HowWeWorkSection")) 
const PictureSection = lazy(()=> import("../Content/Home/PictureSection")) 
const ClosingSection = lazy(()=> import("../Content/Home/ClosingSection")) 

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
        {/* <BlogSection></BlogSection> */}
        <ClosingSection></ClosingSection>
      </Stack>
  );
};

export default ContactUs;
