import { Box, Typography } from '@mui/material'
import BlogImg from '../../assets/png/BlogImage.png'
import Header from '../Header'

export default function TitleSection() {
  return (
    <Box 
    sx={{width:1440,height:514,
                  position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "start",
    }}>
    <Header id={'blogHeader'}/>
  {/* Background Image */}
    <Box
        component="img"
        src={BlogImg}
        alt="My PNG"
        sx={{
        position: "absolute",
        width: "100%",
        height: "100%",
        objectFit: "cover",
        objectPosition: "center 57%",
        transform: "scaleX(1)",
        transformOrigin: "center",
        pointerEvents: "none",
        zIndex: -1,
        }}
    />

  {/* Overlay mask */}
    <Box
        sx={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(3, 7, 21, 0.72)", // 👈 mask
        pointerEvents: "none", // ensures you can click things below
        zIndex: -1,
        }}
    />
    <Box sx={{display:'flex',alignItems:'end',height:'100%',width:'100%',px:15}}>
        <Box sx={{display:'flex',justifyContent:'space-between',flexDirection:'row',width:'100%',alignItems:'end'}}>
            <Typography variant="h2" sx={{textAlign: 'left',WebkitBackgroundClip: "text",
                        backgroundClip: "text",
                        backgroundImage: "linear-gradient(165deg, rgba(255, 255, 255, 1) 0%, rgba(0, 17, 255, 1) 290%)",
                        backgroundRepeat: "no-repeat",
                        WebkitTextFillColor: 'transparent',pb:'44px', maxWidth:'60%',letterSpacing:'-1%',whiteSpace: 'pre-line'}}>
          {"How AI Is changing \n Work \u2014 Not Replacing it"}
        </Typography>
        <Typography sx={{textAlign: 'right',
                        fontFamily:'Inter Tight',
                        letterSpacing:'0',
                        fontSize:20,pb:'35px',
                        color:'rgba(236, 241, 255, 0.78)',
                        fontWeight:400}}>
          Jan 12th, 2025
        </Typography>
        </Box>
    </Box>


</Box>
  )
}
