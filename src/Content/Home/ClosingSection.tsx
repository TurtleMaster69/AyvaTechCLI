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
import { useTranslation } from 'react-i18next';

export default function ClosingSection() {
  const {t} = useTranslation();
    const scrollToSection = useScrollToSection();
    const scrollToSectionContact = useScrollToContactSection();
  return (
    <Main_background>
      <Stack spacing={7.5} alignItems="center" sx={{display:'flex', width:'100%', overflow: "visible" }}>
        <Stack spacing={0} alignItems="center" sx={{width:'85%', maxWidth: 954, overflow: "visible" }}>
          <Typography
            variant='h2'
            sx={{
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              backgroundImage: "radial-gradient(ellipse at 50% -50%, rgba(255, 255, 255, 1) 60%, rgba(0, 17, 255, 1) 110%)",
              // optional, for larger spread
              backgroundRepeat: "no-repeat",
              WebkitTextFillColor: 'transparent',
              textAlign: "center",
              overflow: "visible",
              lineHeight: '140%',
              mt: {xs:20,sm:32},
              whiteSpace:'pre-wrap',
              pb:1
            }}
          >
            {t('home.closing.title')}
          </Typography>
        </Stack>
        <ButtonPrimary>{t('button.contact')}</ButtonPrimary>
      </Stack>

      <Box sx={{
        display: "flex",
        flexDirection: 'row',
        gap: 0,
        alignItems: "center",
        justifyContent: "space-between",
        width: "85%",
        my:{xs:10,sm:22},
        '@media (max-width:800px)': {
        flexDirection:'column',
        gap:5
      },
        }}
      >
        <Box sx={{mt:2.5,flex:1,display: 'flex', flexDirection: 'row' , justifyContent:'space-between',alignItems:'center','@media (max-width:800px)': {
      width: '100%', // <--- ensure full width in column layout
    },}}>
          <Box sx={{
          }}>
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
              <Link href="https://www.linkedin.com/company/ayva-tech" color="inherit" underline="hover">
                <LinkedInIcon />
              </Link>
              <Link href="https://www.instagram.com/ai_talks_slo/" color="inherit" underline="hover">
                <InstagramIcon />
              </Link>
              <Link href="" color="inherit" underline="hover">
                <FacebookIcon />
              </Link>
            </Box>
          </Box>
          <Box sx={{ }}>
            <Typography sx={{ fontFamily: 'Inter Tight', fontSize: '16px', fontWeight: 500, mt: 1 }}>
              {t('home.closing.navigation.title')}
            </Typography>
            <Typography sx={{ pt: 2, pb: 3, fontFamily: 'Inter Tight', fontSize: '14px', letterSpacing: '0px', lineHeight: '2.2', fontWeight: 300 }}>
              <Link sx={{ cursor: "pointer" }} onClick={() => scrollToSection('/home', 'howwework')} color="inherit" underline="hover">
                {t('home.closing.navigation.about-us')}
              </Link> <br></br>
              {/* <Link sx={{ cursor: "pointer" }} onClick={() => scrollToSection('/home', 'howwework')} color="inherit" underline="hover">
                {t('home.closing.navigation.why-us')}
              </Link> <br></br>
              <Link sx={{ cursor: "pointer" }} onClick={() => scrollToSection('/blog','blogHeader')} color="inherit" underline="hover">
                {t('home.closing.navigation.blog')}
              </Link><br></br> */}
              <Link sx={{ cursor: "pointer" }} onClick={() => scrollToSectionContact()} color="inherit" underline="hover">
                {t('home.closing.navigation.contact')}
              </Link>
            </Typography>
          </Box>
        </Box>
        <Box     sx={{
      flex: '0 0 24%', // default at 1440px
      bgcolor: 'lightgreen',
      '@media (max-width:1440px)': {
        flex: '0 0 15%', // shrink at 1440px
      },
      '@media (max-width:1000px)': {
        flex: '0 0 10%', // shrink at 600px
      },
      '@media (max-width:800px)': {
        display:'none'
      },
    }}>
        </Box>
        <Box sx={{flex:1,display:'flex',justifyContent:'start',flexDirection:'column','@media (max-width:800px)': {
      width: '100%'},}}>
          <Typography sx={{
            fontFamily: 'Delight', fontSize: {sm:'1.64rem',md:'1.943rem',lg:'2.5rem',
              '@media (max-width:800px)': {
                fontSize:'2.74rem',
                whiteSpace:'pre-wrap'
      },
      '@media (max-width:600px)': {
                fontSize:'1.74rem',
                whiteSpace:'pre-wrap'
      },
            }, fontWeight: 500, lineHeight: '140%', WebkitBackgroundClip: "text",
            backgroundClip: "text",
            backgroundImage: "linear-gradient(150deg, rgba(255, 255, 255, 1) 0%, rgba(0, 17, 255, 1) 200%)",
            backgroundRepeat: "no-repeat",
            WebkitTextFillColor: 'transparent',
          }}>
            {t('home.closing.potential.title')}
          </Typography>
          <Typography sx={{
            fontFamily: 'Inter Tight',
            fontSize: '20px',
            letterSpacing: '0px',
            mt:3,
            lineHeight:'200%'
          }}>
            <Link sx={{ cursor: "pointer" }} onClick={() => scrollToSectionContact()} color="inherit" underline="hover">
              {t('home.closing.potential.consultation')}
              <ArrowForwardIcon fontSize="small" sx={{ml:1}} />
            </Link>
            <br></br>
            {/* <Link href="https://ash-speed.hetzner.com/100MB.bin" color="inherit" underline="hover">
              {t('home.closing.potential.download')}
              <ArrowForwardIcon fontSize="small" sx={{ml:1}} />
            </Link> */}
          </Typography>
        </Box>

      </Box>
      <Footer></Footer>
    </Main_background>
  )
}
