import {Box, Button } from "@mui/material";
import Background from "../../backgrounds/main_background"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import { Stack, Typography } from "@mui/material";
import Conveyer from "../../components/conveyer";
import ButtonPrimary from "../../components/Buttons/buttonPrimary";
import Header from "../Header";

export function HeroSection() {
  return (
    <Background>
      <Header id={'homeHeader'}></Header>
      <Button
      component="a"
  href="https://ash-speed.hetzner.com/100MB.bin"
        sx={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
          px: 2,
          py: 1.5,
          bgcolor: "rgba(255, 255, 255, 0.08)",
          borderRadius: "999px",
          border: "2px solid rgba(255, 255, 255, 0.04)",
          mt: 25,
          color: "#FFFFFF",
          "&:hover": {
          background: "linear-gradient(to bottom left, rgba(255,255,255,0.2), rgba(255,255,255,0.2))",
        },
        }}
      >
        <Stack direction="row" spacing={1} alignItems="center">
          <AutoAwesomeIcon
            sx={{
              width: 20,
              height: 20,
              color: "#ffffff",
            }}
          />

          <Typography
            sx={{
              fontFamily: "'Delight', Helvetica, Arial, sans-serif",
              fontWeight: 400,
              color: "#ffffff",
              fontSize: "16px",
              textAlign: "center",
              lineHeight: "24px",
              whiteSpace: "nowrap",
            }}
          >
            Download 20 quick automations you can use this month.
          </Typography>
        </Stack>

        <ArrowForwardIcon
          sx={{
            width: 20,
            height: 20,
            color: "#ffffff",
          }}
        />
      </Button>
      <Stack spacing={7.5} alignItems="center" sx={{ overflow: "visible" }}>
        <Stack spacing={0} alignItems="center" sx={{ maxWidth: 954, overflow: "visible" }}>
          <Typography
            variant="h1"
            sx={{
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              backgroundImage: "radial-gradient(ellipse at 50% -50%, rgba(255, 255, 255, 1) 60%, rgba(0, 17, 255, 1) 140%)",
              // optional, for larger spread
              backgroundRepeat: "no-repeat",
              WebkitTextFillColor: 'transparent',
              textAlign: "center",
              pb: 4,
              mt: 6
            }}
          >
            Your business<br /> processes  on autopilot.
          </Typography>

          <Typography
            sx={{
              maxWidth: 894,
              opacity: 0.8,
              fontFamily: "'Inter Tight', Helvetica",
              color: "#FFFFFF",
              fontSize: "22px",
              textAlign: "center",
              lineHeight: "33px",
            }}
          >
            Because we approach automation through business outcomes-not just
            technology.
            <br />
            Strategy. A skilled team. Intelligent solutions.
          </Typography>
        </Stack>
        <ButtonPrimary>Book a free consultation</ButtonPrimary>
      </Stack>
      <Box sx={{width:'85%',display:'flex',justifyContent:'space-between',pt: 2, mt: 31, alignItems: "center", borderTop: "2px solid rgba(255, 255, 255, 0.02)", }} >
        <Typography
          sx={{ // squish vertically
            transformOrigin: "center",
            fontFamily: "'Delight'",
            color: "white",
            fontSize: "18px",
            letterSpacing: 0,
            lineHeight: "25.2px",
          }}
        >
          Organizations
          <br />
          We've Trained
        </Typography>
        <Conveyer></Conveyer>
      </Box>

    </Background>

  )

};

export default HeroSection;
