import ForthBackground from '../../backgrounds/forth_background'
import { Box, styled, Typography } from '@mui/material'
import ButtonPrimary from '../../components/Buttons/buttonPrimary'


import img1 from '../../assets/png/image1.png'
import img2 from '../../assets/png/image2.png'
import img3 from '../../assets/png/image3.png'
import img4 from '../../assets/png/image4.png'
import img5 from '../../assets/png/image5.png'
import img6 from '../../assets/png/image6.png'
import VerticalConveyor from '../../components/verticalConveyer'


const images = [[img1, img2, img3,], [img4, img5, img6]]


const StyledImage = styled('img')({
    width: 250,
    height: '100%',
    objectFit: 'cover',   // or "contain"
    objectPosition: 'center',
    borderRadius: 10
});


export default function PictureSection() {
    return (
        <ForthBackground>
            <Box sx={{
                display: 'flex',
                height: 1000,
                width: '85%',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                pt: 0,
                '@media (min-width:800px)': {
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'start',
                },
            }}>
                <Box sx={{
                    textAlign: 'left', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'left', height: '100%', flex: 0, width: '100%', '@media (min-width:800px)': {
                        flex: 1,
                        mr: 5
                    },
                }}>
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
                        fontSize: {xs:'1.5rem',md:"1.875rem"},
                        lineHeight: "110%",
                        textAlign: 'left'
                    }}>
                        Horus of teaching experience in <br /> the field of artificial intelligence
                    </Typography>
                    <Box sx={{
                        display: "none", '@media (min-width:800px)': {
                            display: 'flex'
                        },
                    }}>
                        <ButtonPrimary>
                            Boox a free consulation
                        </ButtonPrimary>
                    </Box>
                </Box>
                <Box sx={{ display: { xs: 'none', md: 'flex' }, flexDirection: 'column', justifyContent: 'center', alignItems: 'left', height: '100%', width: { xs: '47.4%', lg: '40%' } }}>
                    <VerticalConveyor allImages={images}></VerticalConveyor>
                </Box>


                <Box
                    sx={{
                        display: { xs: 'flex', md: 'none' },
                        gap: 1,
                        py: 1,
                        px: 3,
                        overflow: 'auto',
                        width: '100%',
                        scrollSnapType: 'x mandatory',
                        '& > *': {
                            scrollSnapAlign: 'center',
                        },
                        '::-webkit-scrollbar': { display: 'none' },
                        maskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)',
                    }}
                >
                    {images.map((item) => (
                        item.map((img) => (
                            <Box sx={{ my: 3 }}>
                                <StyledImage src={img} alt="icon" />
                            </Box>
                        ))
                    ))}
                </Box>
                <Box sx={{ alignItems:'left', width:'100%', mt:5,
                    display: "flex", sm: 'flex', '@media (min-width:800px)': {
                        display: 'none'
                    },
                }}>
                    <ButtonPrimary>
                        Boox a free consulation
                    </ButtonPrimary>
                </Box>
            </Box>
        </ForthBackground>
    )
}
