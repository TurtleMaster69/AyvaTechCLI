import { Box, Stack, Typography } from '@mui/material'
import img from '../../assets/png/blog.png'
import ArrowForwardLink from '../Links/ArrowForwardLink'

export default function BlogBox() {
  return (
    <Box sx={{display:'flex',flexDirection:'column',height:386,width:392}}>
        <Box
      sx={{
        width: 392,      // box width
        height: 204,     // box height
        overflow: "hidden",
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:3,
        mb:'20px' // cut off anything outside the box
      }}
    >
      <Box
        component="img"
        src={img}
        sx={{
          width: "100%",
          objectFit: "cover",      // fills box, cropping if needed
          objectPosition: "center"  // fills box, cropping if needed // centers the image
        }}
      />
    </Box>
        <Box sx={{ width: 392, height:162}}>
            <Stack>
                <Typography sx={{fontFamily:'Inter Tight',fontSize:'14px',color:'rgba(255,255,255,0.6)',pb:'10px'}}>
                    Jan 12th, 2025
                </Typography>
                <Typography sx={{fontFamily:'Delight',fontSize:'20px',fontWeight:550}}>
                    The Power of Simplicity
                </Typography>
                <Typography sx={{fontFamily:'Inter Tight',fontSize:'16px',pb:3}}>
                    In a world full of noise and endless distractions, simplicity often stands out...
                </Typography>
                <ArrowForwardLink color='rgba(255,106,0,1)'>
                    <Typography sx={{fontFamily:'Inter Tight',fontSize:'16px',fontWeight:700}}>
                        Read more
                    </Typography>
                </ArrowForwardLink>
            </Stack>
        </Box>
    </Box>

  )
}
