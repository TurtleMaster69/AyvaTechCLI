import {Button} from '@mui/material'
import React from 'react'
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

interface BoxCardProps {
    width?: number | string;        // make optional and flexible
    height?: number | string;       // make optional
    children?: React.ReactNode; 
    justifyContent?: number | string; 
    pb?: number | string; 
    pt?: number | string; 
}

export default function boxes( {width, height, children, pb=0,pt=0}: BoxCardProps) {
  return (
     <Button
        endIcon={<ArrowForwardIcon sx={{position:"absolute",bottom:30,right:30}}/>}
        sx={{
          width: {width}, // 96 * 4px = 384px
          height: {height}, // 60 * 4px = 240px
          pl:3,
          pr:3,
          pt:pt,
          pb:pb,
          background: "linear-gradient(to bottom left, rgba(255,255,255,0.05), rgba(255,255,255,0))",
          borderRadius: 3,
          outline: "2px solid rgba(255,255,255,0.05)",
          outlineOffset: "-2px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          color: "#FFFFFF",
        }}
      >
        {children}
      </Button>
  )
}
