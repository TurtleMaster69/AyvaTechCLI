import ForthBackground from '../../backgrounds/forth_background'
import { Box, Typography } from '@mui/material'
import ButtonPrimary from '../../components/Buttons/buttonPrimary'


import img1 from '../../assets/png/image1.png'
import img2 from '../../assets/png/image2.png'
import img3 from '../../assets/png/image3.png'
import img4 from '../../assets/png/image4.png'
import img5 from '../../assets/png/image5.png'
import img6 from '../../assets/png/image6.png'
import VerticalConveyor from '../../components/verticalConveyer'


const images = [[img1,img2,img3,],[img4,img5,img6]]

export default function PictureSection() {
    return (
        <ForthBackground>
            <Box sx={{
                display: 'flex',
                height: '100%',
                width: '100%',
                flexDirection: 'row',
                lignItems: 'center',
                justifyContent: 'center',
                p:15,
                pt:0
            }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'left', height: '100%', width: '50%' }}>
                    <Typography 
                    variant='h3'
                    sx={{
                        WebkitBackgroundClip: "text",
                        backgroundClip: "text",
                        backgroundImage: "linear-gradient(150deg, rgba(255, 255, 255, 1) 0%, rgba(0, 17, 255, 1) 100%)",
                        backgroundRepeat: "no-repeat",
                        WebkitTextFillColor: 'transparent',
                        pb: 2.5,
                        textAlign: 'left',
                    }}>
                        500+
                    </Typography>
                    <Typography sx={{
                        pb: 8, 
                        fontFamily: "'Inter Tight', Helvetica",
                        color: "#FFFFFF",
                        fontSize: "30px",
                        lineHeight: "33px", 
                        textAlign: 'left'
                    }}>
                        Horus of teaching experience in <br /> the field of artificial intelligence
                    </Typography>
                    <Box>
                    <ButtonPrimary>
                        Boox a free consulation
                    </ButtonPrimary>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'left', height: '100%', width: '50%' }}>
                    <VerticalConveyor allImages={images}></VerticalConveyor>
                </Box>
            </Box>
        </ForthBackground>
    )
}
