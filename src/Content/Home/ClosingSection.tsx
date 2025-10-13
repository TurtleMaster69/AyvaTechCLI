import Main_background from '../../backgrounds/fifth_background'
import { Box, Link, Stack, Typography } from '@mui/material'
import ButtonPrimary from '../../components/Buttons/buttonPrimary'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import Footer from '../Footer';
import AyvaLogo from '../../assets/svg/AyvaLogo.svg'
import { useScrollToSection } from '../../components/Utils/useScrollToSection';
import { useScrollToContactSection } from '../../components/Utils/useScrollToContactSection';

export default function ClosingSection() {
    const scrollToSection = useScrollToSection();
    const scrollToSectionContact = useScrollToContactSection();
  return (
    <Main_background>
      <Stack spacing={7.5} alignItems="center" sx={{ overflow: "visible" }}>
        <Stack spacing={0} alignItems="center" sx={{ maxWidth: 954, overflow: "visible" }}>
          <Typography
            variant='h2'
            sx={{
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              backgroundImage: "radial-gradient(ellipse at 50% -50%, rgba(255, 255, 255, 1) 60%, rgba(0, 17, 255, 1) 110%)",
              // optional, for larger spread
              backgroundRepeat: "no-repeat",
              WebkitTextFillColor: 'transparent',
              fontSize: "56px",
              textAlign: "center",
              overflow: "visible",
              lineHeight: '140%',
              mt: 32
            }}
          >
            Let the system handle the <br></br> routine and your team focus <br></br> on what matters.
          </Typography>
        </Stack>
        <ButtonPrimary>Book a free consultation</ButtonPrimary>
      </Stack>

      <Box sx={{
        display: "flex",
        flexDirection: 'row',
        gap: 0,
        alignItems: "start",
        justifyContent: "center",
        width: "100%",
        mt: 25,

      }}
      >
        <Box sx={{ width: '50%', pl: 18, display: 'flex', flexDirection: 'row' , justifyContent:'start',alignItems:'start'}}>
          <Box sx={{ width: '50%' }}>
            <Box
                        component="img"
                        src={AyvaLogo}
                        alt="Company Logo"
                        sx={{ height: "auto", width: "auto" }}
                    />
            <Typography sx={{ pt: 2, pb: 3, fontFamily: 'Inter Tight', fontSize: '14px', letterSpacing: '0px', lineHeight: '2.2', fontWeight: 300 }}>
              Ljubljana, Slovenia <br></br>
              <Link href="mailto:info@ayva.si" sx={{ cursor: "pointer" }} color="inherit" underline="hover">info@ayva.si </Link><br />
              <Link href="tel:+38651238953" sx={{ cursor: "pointer" }} color="inherit" underline="hover">+386 51 238 953</Link>
            </Typography>
            <Box sx={{
              display: 'flex', flexDirection: 'row', gap: 2
            }}>
              <Link href="/about" color="inherit" underline="hover">
                <LinkedInIcon />
              </Link>
              <Link href="/about" color="inherit" underline="hover">
                <InstagramIcon />
              </Link>
              <Link href="/about" color="inherit" underline="hover">
                <FacebookIcon />
              </Link>
            </Box>
          </Box>
          <Box sx={{ width: '50%' }}>
            <Typography sx={{ fontFamily: 'Inter Tight', fontSize: '16px', fontWeight: 500, mt: 1 }}>
              Quick Navigation
            </Typography>
            <Typography sx={{ pt: 2, pb: 3, fontFamily: 'Inter Tight', fontSize: '14px', letterSpacing: '0px', lineHeight: '2.2', fontWeight: 300 }}>
              <Link sx={{ cursor: "pointer" }} onClick={() => scrollToSection('/home', 'why-us-section')} color="inherit" underline="hover">
                About us
              </Link> <br></br>
              <Link sx={{ cursor: "pointer" }} onClick={() => scrollToSection('/home', 'why-us-section')} color="inherit" underline="hover">
                Why us
              </Link> <br></br>
              <Link sx={{ cursor: "pointer" }} onClick={() => scrollToSection('/blog','blogHeader')} color="inherit" underline="hover">
                Blog
              </Link><br></br>
              <Link sx={{ cursor: "pointer" }} onClick={() => scrollToSectionContact()} color="inherit" underline="hover">
                Contact
              </Link>
            </Typography>
          </Box>
        </Box>


        <Box sx={{ width: '50%', pl: 18, display:'flex',justifyContent:'start',flexDirection:'column'}}>
          <Typography sx={{
            fontFamily: 'Delight', fontSize: '40px', fontWeight: 500, lineHeight: '140%', WebkitBackgroundClip: "text",
            backgroundClip: "text",
            backgroundImage: "linear-gradient(150deg, rgba(255, 255, 255, 1) 0%, rgba(0, 17, 255, 1) 200%)",
            backgroundRepeat: "no-repeat",
            WebkitTextFillColor: 'transparent',
          }}>
            Ready to Unleash your <br></br>Company's Full Potential?
          </Typography>
          <Typography sx={{
            fontFamily: 'Inter Tight',
            fontSize: '20px',
            letterSpacing: '0px',
            mt:3,
            lineHeight:'200%'
          }}>
            <Link sx={{ cursor: "pointer" }} onClick={() => scrollToSectionContact()} color="inherit" underline="hover">
              Book a consultation
              <ArrowForwardIcon fontSize="small" sx={{ml:1}} />
            </Link>
            <br></br>
            <Link href="https://ash-speed.hetzner.com/100MB.bin" color="inherit" underline="hover">
              Download the guide
              <ArrowForwardIcon fontSize="small" sx={{ml:1}} />
            </Link>
          </Typography>
        </Box>

      </Box>
      <Footer></Footer>
    </Main_background>
  )
}
