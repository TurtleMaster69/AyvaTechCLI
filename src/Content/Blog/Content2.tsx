import { Box, Typography } from '@mui/material'
import React from 'react'
import BlogImg from '../../assets/png/image1.png'
export default function Content2() {
  return (
    <Box sx={{width:'100%',height:500,my:18,display:'flex',justifyContent:'space-evenly'}}>
        <Box 
        sx={{
        width: "50%",
        height: "100%",
        }}>
  <Box
    component="img"
    src={BlogImg}
    alt="My PNG"
    sx={{
      width: "100%",           // full width of parent
      height: "100%",          // full height of parent
      objectFit: "cover",      // crop sides that don’t fit
      objectPosition: "center", // centers image
      transformOrigin: "center",
      pointerEvents: "none",
      borderRadius:3
    }}
  />
        </Box>
        <Box sx={{width:'50%',pl:10,pr:0,display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
            <Typography sx={{fontFamily:'Delight',fontSize:28,fontWeight:450,pb:2}}>
Instead of replacing talent, AI is becoming a tool that helps teams work smarter, not harder.        
</Typography>
        <Typography sx={{fontFamily:'Inter Tight',fontSize:16,fontWeight:300,lineHeight:'150%',whiteSpace: 'pre-line'}}>
            {"Across industries, we’re seeing a clear trend: companies are reskilling teams, rotating roles, and using AI to enhance productivity, not to eliminate people. In the service sector, nearly 40% of businesses already use some form of AI. In manufacturing, that number is around 26%, and actual layoffs connected to AI adoption remain very low — less than 1% in many cases."}
        </Typography>
        </Box>
    </Box>
  )
}
