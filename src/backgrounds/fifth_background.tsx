
import { type ReactNode } from "react";
import {Box } from "@mui/material";
import myImage from '../assets/png/Vector 59.png'
import TopPng from '../assets/png/top1.png'
interface BackgroundProps{
  children:ReactNode
}
export function Fifth_background({children}:BackgroundProps){
  return (
  <Box
    sx={{
          width: 1440,
          height: 1230,
          position: "relative",
          alignItems: "center",
          overflow: 'hidden'
        }}
  >
    {/* <Top
          style={{
            position: 'absolute',
            top: 0,
            left: 960,
            transform: 'translateX(-50%) translateZ(0)',
            width: 2920,
            height: 650,
            zIndex: 0,
            backfaceVisibility: "hidden" 
          }}
        /> */}
    {/* <RTear
          style={{
            position: 'absolute',
            bottom: 20,
            right: -400,
            width: 1999,
            height: 671,
            zIndex: 0,
             transform: "translateZ(0)", backfaceVisibility: "hidden" 
          }}
        /> */}
      {/* <LTear
        style={{
          position: 'absolute',
          bottom: 20,
          left: -400,
          width: 1999,
          height: 671,
          zIndex: 0,   
           transform: "translateZ(0)", backfaceVisibility: "hidden" 
        }}
      /> */}
      <Box
      component="img"
      src={TopPng}
      alt="My PNG"
      sx={{
        top:0,
        left:"50%",
        transform: 'translateX(-50%)',
        width:"100%",
        height: "auto",
        borderRadius: 2,
        position: 'absolute'
      }}
    />
      <Box
      component="img"
      src={myImage}
      alt="My PNG"
      sx={{
        bottom:-200,
        right:0,
        width: 1100,
        height: "auto",
        borderRadius: 2,
        position: 'absolute'
      }}
    />
    <Box
      component="img"
      src={myImage}
      alt="My PNG"
      sx={{
        bottom:-200,
        left:0,
        width: 1100,
        height: "auto",
        borderRadius: 2,
        transform: "scaleX(-1)",
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

export default Fifth_background;