
import { type ReactNode } from "react";
import {Box } from "@mui/material";

import SShape from '../assets/png/background/star1.png';
interface BackgroundProps{
  children:ReactNode
  id:string
}
export function SecondBackground({children,id}:BackgroundProps){
  return (
  <Box
    id={id}
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
          bottom: '60%',
          right: '-25%',
          transform: 'translateX(0%) translateY(50%) rotate(15deg)',
          width: "90%",
          height:'120%',
          borderRadius: 2,
        position: 'absolute',
          //         '@media (max-width:1000px)': {

          //   opacity:0,
          // },
          // '@media (max-width:600px)': {

          //   opacity:0,
          // },
      }}
    />

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

export default SecondBackground;