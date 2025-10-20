
import { type ReactNode } from "react";

import {Box } from "@mui/material";
import LShape from "../assets/png/rShape.png";

interface BackgroundProps{
  children:ReactNode
  id:string
}

export function Third_background({children,id}:BackgroundProps){
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

      <Box
      component="img"
      src={LShape}
      alt="My PNG"
      sx={{
        top:30,
        right:0,
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

export default Third_background;