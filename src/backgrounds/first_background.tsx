
import { type ReactNode } from "react";
import {Box } from "@mui/material";
import LShape from "../assets/png/shape.png";

interface BackgroundProps{
  children:ReactNode
}

export function First_background({children}:BackgroundProps){
  return (
  <Box
    sx={{
          width: 1440,
          height: 1045,
          position: "relative",
          alignItems: "center",
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
      component="img"
      src={LShape}
      alt="My PNG"
      sx={{
        top:50,
        left:0,
        width:1025,
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

export default First_background;