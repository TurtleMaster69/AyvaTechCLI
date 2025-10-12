import { Stack } from "@mui/material";
import { HeroSection } from "../Content/Home/HeroSection";
import { WhereWeCanHelpSection } from "../Content/Home/WhereWeCanHelpSection";
import { ThemeProvider } from "../Content/ThemeProvider";
import HowWeWorkSection from "../Content/Home/HowWeWorkSection";
import WhySection from "../Content/Home/WhySection";
import PictureSection from "../Content/Home/PictureSection";
import ClosingSection from "../Content/Home/ClosingSection";
import BlogSection from "../Content/Home/BlogSection";

export function ContactUs() {
  return (
    <ThemeProvider>
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
        <WhySection></WhySection>
        <PictureSection></PictureSection>
        <BlogSection></BlogSection>
        <ClosingSection></ClosingSection>
      </Stack>
    </ThemeProvider>
  );
};

export default ContactUs;
