// src/components/Footer.tsx
import { Box, Divider, Stack, Typography } from "@mui/material";
import { useTranslation } from 'react-i18next'
import AyvaLogo from '../assets/svg/AyvaLogo.svg'

export default function Footer() {
  const { t } = useTranslation()
  return (
    <Box
      component="footer"
      sx={{
        mt: "auto",
        width: '85%',
        // backgroundColor: "rgba(255, 255, 255, 1)",
        // backdropFilter: "blur(10px)",
        // borderTop:" solid #ffffffff",
      }}
    >
      <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.05)', borderTopWidth: 1, mb: 5 }} />
      <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', mb: 6 }}>
        <Typography
          sx={{ fontFamily: 'Inter Tight', fontSize: { xs: '0.74rem', sm: '0.875rem' }, letterSpacing: '0px', fontWeight: 250, pr: 2 }}
        >
          © {new Date().getFullYear()} {t("footer.rights")}
        </Typography>
        <Typography component="div" sx={{ fontFamily: 'Inter Tight', fontSize: { xs: '0.74rem', sm: '0.875rem' }, letterSpacing: '0px', fontWeight: 250 }}>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            {/* <Link href="/about" color="inherit" underline="hover">
          {t("footer.privacy")}
        </Link>
        <Link href="/contact" color="inherit" underline="hover">
          {t("footer.cookie")}
        </Link>
        <Link href="/privacy" color="inherit" underline="hover">
          {t("footer.author")}
        </Link>
        <Link href="/privacy" color="inherit" underline="hover">
          {t("footer.terms")}
        </Link> */}
            <Box
              component="img"
              src={AyvaLogo}
              alt="Company Logo"
              sx={{ height: "auto", width: "auto" }}
            />
          </Stack>
        </Typography>
      </Box>
    </Box>
  );
}
