// src/components/Footer.tsx
import { Box, Divider, Link, Stack, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        mt: "auto",
        width:'85%',
        // backgroundColor: "rgba(255, 255, 255, 1)",
        // backdropFilter: "blur(10px)",
        // borderTop:" solid #ffffffff",
      }}
    >
        <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.05)', borderTopWidth: 1,mb:5 }} />
      <Box sx={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between',mb:6}}>
        <Typography
          sx={{fontFamily:'Inter Tight', fontSize:'14px',letterSpacing:'0px',fontWeight:250}}
        >
          © {new Date().getFullYear()} AYVA Tech. All rights reserved.
        </Typography>
        <Typography sx={{fontFamily:'Inter Tight', fontSize:'14px',letterSpacing:'0px',fontWeight:250}}>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <Link href="/about" color="inherit" underline="hover">
            Privacy Policy
          </Link>
          <Link href="/contact" color="inherit" underline="hover">
            Cookie Notice
          </Link>
          <Link href="/privacy" color="inherit" underline="hover">
            Authors
          </Link>
          <Link href="/privacy" color="inherit" underline="hover">
            Terms and Conditions
          </Link>
        </Stack>
        </Typography>
      </Box>
    </Box>
  );
}
