import { Box, Typography } from '@mui/material'
import ButtonPrimary from '../../components/Buttons/buttonPrimary'
import BlogBox from '../../components/Boxes/BlogBox'

export default function BlogSection() {
  return (
    <Box sx={{width:1440,height:600,display:'flex',flexDirection:'column',pl:15,pr:15}}>
        <Box sx={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
        <Typography
                            variant='h2'
                    sx={{
                        textAlign: "left",
                        mt: 4,
                        WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    backgroundImage: "linear-gradient(140deg, rgba(255, 255, 255, 1) 0%, rgba(0, 17, 255, 1) 270%)",
                    backgroundRepeat: "no-repeat",
                    WebkitTextFillColor: 'transparent',
                    pb:7
                    }}>
            Blog & News
        </Typography>
        <Box>
        <ButtonPrimary>
            View All
        </ButtonPrimary>
        </Box>
        </Box>
        <Box sx={{display:'flex',flexDirection:'row',gap:3}}>
            <BlogBox></BlogBox>
            <BlogBox></BlogBox>
            <BlogBox></BlogBox>
        </Box>
    </Box>
  )
}
