
import { type ReactNode } from "react";

import { Box } from "@mui/material";
import Tears from '../assets/webp/background/tears.webp'
import Top from '../assets/webp/background/top1.webp'


interface BackgroundProps {
  children: ReactNode
}
export function Main_background({ children }: BackgroundProps) {
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
      <Box
        component="img"
        src={Top}
        alt=""
  role="presentation"
  aria-hidden="true"
        sx={{
          top: '-50%',
          left: "50%",
          transform: 'translateX(-50%)',
          width: "116%",
          maxHeight:1100,
          position: 'absolute'
        }}
      />
      <Box
      alt=""
  role="presentation"
  aria-hidden="true"
        component="img"
        src={Tears}
        sx={{
          position: 'absolute',
          bottom: '-3%',
          left: '50%',               // move left edge to 50% of parent
          transform: 'translateX(-50%)', // shift left by half of image width
          width: '160%',
          height: '74%',
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

export default Main_background;