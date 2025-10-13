import {Box, Typography } from "@mui/material";
import Background from "../../backgrounds/sixth_background"
import Header from "../Header";
import ContactForm from "../../components/ContactForm";
import StartSVG from  '../../components/SVG/star_shape'
import BorderButton from "../../components/Buttons/borderButton";

import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';






export function HeroSection() {
  return (
    <Background id={'contact-sectionw'}>
      <Header id={'contactHeader'}></Header>
      <Box sx={{display:"flex",flexDirection:'column',py:22,width:'100%',px:15} } >
        <Typography id='contact-section' variant="h2" sx={{textAlign: 'left',WebkitBackgroundClip: "text",
                        backgroundClip: "text",
                        backgroundImage: "linear-gradient(150deg, rgba(255, 255, 255, 1) 0%, rgba(0, 17, 255, 1) 120%)",
                        backgroundRepeat: "no-repeat",
                        WebkitTextFillColor: 'transparent',pb:'16px'}}>
          Contact Us
        </Typography>
        <Typography sx={{fontFamily:'Delight',fontSize:'24px',width:569}}>
          Let’s talk. Whether you’re curious about what AI can do for your business or you already have something in mind, we’d love to hear from you.
        </Typography>
      </Box>
      <Box
      sx={{width:'100%',height:'100%',display:'flex',flexDirection:'row',px:15,}}>
        <Box sx={{width:'100%',gap:2,display:'flex',flexDirection:'column'}}>
          <Typography  sx={{
            fontFamily:'Delight',
            fontSize:'18',
            textAlign: 'left',WebkitBackgroundClip: "text",
                        backgroundClip: "text",
                        backgroundImage: "linear-gradient(150deg, rgba(255, 255, 255, 1) 0%, rgba(0, 17, 255, 1) 120%)",
                        backgroundRepeat: "no-repeat",
                        WebkitTextFillColor: 'transparent'}}>
          <Box display={'flex'} gap={1}><StartSVG width={10}/> LETS TALK</Box>
        </Typography>
        <Box sx={{display:'inline-flex'}}>
            <Typography variant="h2" sx={{textAlign: 'left',              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              backgroundImage: "radial-gradient(ellipse at 50% -50%, rgba(255, 255, 255, 1) 60%, rgba(0, 17, 255, 1) 140%)",
              // optional, for larger spread
              backgroundRepeat: "no-repeat",
              WebkitTextFillColor: 'transparent',
                        pb:'40px',
                        fontSize:56,
                        lineHeight:'120%'}}>
          What can we<br></br> help you with?
        </Typography>
        </Box>
            <BorderButton width={'184px'} height={'56px'} endIcon={false} type="email" value="info@ayva.si">
              <Box display={'flex'} gap={1} sx={{fontFamily:'Inter Tight',fontSize:'16',letterSpacing:'-1%'}}><AlternateEmailIcon width={10} /> info@ayva.si</Box>
            </BorderButton >
            <BorderButton width={'184px'} height={'56px'} endIcon={false} type="phone" value="+386 51 238 953">
              <Box display={'flex'} gap={0.8} sx={{fontFamily:'Inter Tight',fontSize:'16',letterSpacing:'-1%'}}><PhoneAndroidIcon width={10}/> +386 51 238 953</Box>
            </BorderButton>

        </Box>
        <ContactForm>
          
        </ContactForm>
      </Box>
    </Background>
  )

};

export default HeroSection;
