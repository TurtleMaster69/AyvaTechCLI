
import { type ReactNode } from "react";

import {Box } from "@mui/material";

interface BackgroundProps{
  children:ReactNode
}

export function ForthBackground({children}:BackgroundProps){
  return (
  <Box
      sx={{
        width:'100%',
        Height:'auto',
        position: "relative",
        alignItems: "center",
        display:'flex',
        justifyContent:'center',
        overflowX:'clip'
      }}
  >
    {/* <LShape
    style={{
            position: 'absolute',
            bottom: 0,
            left: -290,
            width: 1300 ,
            height: 900,
            zIndex: 0,
             transform: "translateZ()", backfaceVisibility: "hidden" 
          }}
    /> */}
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent:'start',
          height: "100%",
          width:'100%',
          maxWidth:1440
        }}
      >
        {children}
      </Box>
  </Box>
  );
};

export default ForthBackground;