import {Box, useMediaQuery } from "@mui/material";
import Background from "../../backgrounds/main_background"

import { Stack, Typography } from "@mui/material";
import Conveyer from "../../components/conveyer";
import ButtonPrimary from "../../components/Buttons/buttonPrimary";
import {appTheme}  from "../ThemeProvider";
import { useTranslation } from "react-i18next";

export function HeroSection() {
  const {t} = useTranslation();
  const theme = appTheme
  // const isXs = useMediaQuery(theme.breakpoints.down('sm')); // xs and below
  // const isLg = useMediaQuery(theme.breakpoints.up('sm')); // lg and up
  const isMd = useMediaQuery(theme.breakpoints.down('md'));
    const isMdup = useMediaQuery(theme.breakpoints.up('md'));

  // let text;
  const tpath = 'home.hero'
  // if (isXs) {s
  //   text = t(`${tpath}.download.short`);
  // } else if (isLg) {
  //   text = t(`${tpath}.download.long`);
  // }

  let text1

    if (isMd) {
    text1 = t(`${tpath}.organization.short`);
  } else if (isMdup) {
    text1 = t(`${tpath}.organization.long`);
  }

  return (
    <Background>

      <Box sx={{display:'flex',flexDirection:'column',alignItems: "center",justifyContent:{xs:'start',sm:'center'},height:{xs:700,sm:800,md:850}}}>
      {/* <Button
      component="a"
  href="https://ash-speed.hetzner.com/100MB.bin"
        sx={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap: '1rem',
          px: '1rem',
          py: '0.5rem',
          bgcolor: "rgba(255, 255, 255, 0.08)",
          borderRadius: "999px",
          border: "2px solid rgba(255, 255, 255, 0.04)",
          mt: {xs:'8rem',sm:0},
          color: "#FFFFFF",
          "&:hover": {
          background: "linear-gradient(to bottom left, rgba(255,255,255,0.2), rgba(255,255,255,0.2))",
        },
        }}
      >
        <Stack direction="row" spacing={1} alignItems="center">
          <AutoAwesomeIcon
            sx={{
              width: "1rem",
              height: "1rem",
              color: "#ffffff",
            }}
          />

          <Typography
            sx={{
              fontFamily: "'Delight', Helvetica, Arial, sans-serif",
              fontWeight: 400,
              color: "#ffffff",
              fontSize: {xs:'1rem',lg:"1rem"},
              textAlign: "center",
              lineHeight: "150%",
              whiteSpace: "nowrap",
            }}
          >
            {text}
          </Typography>
          <ArrowForwardIcon
            sx={{
                width: "1rem",
                height: "1rem",
              color: "#ffffff",
            }}
          />
        </Stack>
      </Button> */}

      <Stack spacing={7.5} alignItems="center" sx={{ overflow: "visible" }}>
        <Stack spacing={0} alignItems="center" sx={{ maxWidth: 1000, overflow: "visible" }}>
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
              mt: 6,
              px:'1.5rem',
              whiteSpace:'pre-line'
            }}
          >
            {t('home.hero.title')}
          </Typography>

          <Typography
            sx={{
              maxWidth: 894,
              opacity: 0.8,
              fontFamily: "'Inter Tight', Helvetica",
              color: "#FFFFFF",
              fontSize: {xs:'1rem',sm:'1.2rem',md:"1.375rem"},
              textAlign: "center",
              lineHeight: "150%",
              px:{xs:'1rem',sm:'2rem',md:0},
              whiteSpace:'pre-wrap'
            }}
          >
            {t('home.hero.subtitle')}
          </Typography>
        </Stack>
        <ButtonPrimary>{t('button.contact')}</ButtonPrimary>
      </Stack>
      </Box>
      <Box sx={{width:'85%',display:'flex',flexDirection:{xs:'column',md:'row'}, justifyContent:'space-between',pt: 2, alignItems: "center", borderTop: "2px solid rgba(255, 255, 255, 0.02)", }} >
        <Typography
          sx={{ // squish vertically
            transformOrigin: "center",
            fontFamily: "'Delight'",
            color: "white",
            fontSize: "1rem",
            letterSpacing: 0,
            lineHeight: "25.2px",
            whiteSpace:'pre-line',
            pb:'1rem',
            '@media(max-width:400px)':{
                fontSize:'0.99rem'
            }
          }}
        >
          {text1}
        </Typography>
        <Conveyer></Conveyer>
      </Box>

    </Background>

  )

};

export default HeroSection;
