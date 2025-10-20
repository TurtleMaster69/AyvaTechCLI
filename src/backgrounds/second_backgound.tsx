
import { type ReactNode } from "react";
import {Box } from "@mui/material";

import SShape from '../assets/png/background/star1.png';
import S1Shape from '../assets/png/background/star2.png';
import LShape from "../assets/png/background/shape_left.png";
interface BackgroundProps{
  children:ReactNode
}
export function SecondBackground({children}:BackgroundProps){
  return (
  <Box
    sx={{
        width: '100%',
        Height: 'auto',
        position: "relative",
        alignItems: "center",
        display: 'flex',
        justifyContent: 'center',
        overflowX:'clip'
      }}
  >
    <Box
      component="img"
      src={SShape}
      alt="My PNG"
      sx={{
          bottom: '55%',
          left: "90%",
          transform: 'translateX(-50%) translateY(50%)',
          width: "90%",
        height: "auto",
        borderRadius: 2,
        position: 'absolute',
                  '@media (max-width:1000px)': {

            opacity:0,
          },
          '@media (max-width:600px)': {

            opacity:0,
          },
      }}
    /><Box
      component="img"
      src={S1Shape}
      alt="My PNG"
      sx={{
          bottom: '25%',
          left: "20%",
          transform: 'translateX(-50%) translateY(50%)',
          width: "80%",
        height: "auto",
        borderRadius: 2,
        position: 'absolute',
                  '@media (max-width:1000px)': {

            opacity:0,
          },
          '@media (max-width:600px)': {

            opacity:0,
          },
      }}
    />

          <Box
        component="img"
        src={LShape}
        alt="My PNG"
        sx={{
          opacity:0,
          bottom: '50%',
          left: "20%",
          transform: 'translateX(-50%) translateY(50%)',
          width: "100%",
          maxHeight: 1100,
          position: 'absolute',
          '@media (max-width:1000px)': {
            left:"50%",
            width:'200%',
            height:'70%',
            transform: 'translateX(-50%) translateY(50%) rotate(20deg)',
            opacity:1,
          },
          '@media (max-width:600px)': {
            left:"50%",
            width:'500%',
            height:'70%',
            transform: 'translateX(-50%) translateY(50%) rotate(30deg)',
            opacity:1,
          },
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