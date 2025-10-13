
import { type ReactNode } from "react";
import {Box } from "@mui/material";

import SShape from '../assets/png/star3.png';
interface BackgroundProps{
  children:ReactNode
  id:string
}
export function SecondBackground({children,id}:BackgroundProps){
  return (
  <Box
    id={id}
    sx={{
          width: 1440,
          height: 1150,
          position: "relative",
          alignItems: "center",
        }}
  >
    {/* <SShape
    style={{
            position: 'absolute',
            top: -250,
            left: 700,
            width: 1300 ,
            height: 1200,
            zIndex: 0,
             transform: "translateZ(0)", backfaceVisibility: "hidden" 
          }}
    />

    <S1Shape
    style={{
            position: 'absolute',
            top: 10,
            left: -400,
            width: 1300 ,
            height: 1400,
            zIndex: 0,
             transform: "translateZ(0)", backfaceVisibility: "hidden" 
          }}
    /> */}
    <Box
      component="img"
      src={SShape}
      alt="My PNG"
      sx={{
        top:0,
        right:0,
        width:937,
        height: "auto",
        borderRadius: 2,
        position: 'absolute'
      }}
    /> 

      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "start",
          height: "100%",
        }}
      >
        {children}
      </Box>
  </Box>
  );
};

export default SecondBackground;