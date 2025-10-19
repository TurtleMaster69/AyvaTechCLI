import { Box} from '@mui/material'
import React from 'react'


interface BoxCardProps {
    width?: number | string;        // make optional and flexible
    height?: number | string;       // make optional
    children?: React.ReactNode; 
    justifyContent?: number | string; 
    pb?: number | string; 
    pt?: number | string; 
    mb?: number | string; 
}

export default function boxes( {width, height, children,justifyContent="center", pb=0,pt=0,mb=0}: BoxCardProps) {
  return (
     <Box
        sx={{
          width: {width}, // 96 * 4px = 384px
          height: {height}, // 60 * 4px = 240px
          pl:3,
          pr:3,
          pt:pt,
          pb:pb,
          mb:mb,
          background: "linear-gradient(to bottom left, rgba(255,255,255,0.05), rgba(255,255,255,0))",
          borderRadius: 3,
          outline: "2px solid rgba(255,255,255,0.05)",
          outlineOffset: "-2px",
          display: "flex",
          flexDirection: "column",
          justifyContent:justifyContent
        }}
      >
        {children}
      </Box>
  )
}
