
import { type ReactNode } from "react";
import { Box } from "@mui/material";
import LShape from "../assets/webp/background/shape_left.webp";

interface BackgroundProps {
  children: ReactNode
}

export function First_background({ children }: BackgroundProps) {
  return (
    <Box
      sx={{
        width: '100%',
        Height: 'auto',
        position: "relative",
        alignItems: "center",
        display: 'flex',
        justifyContent: 'center',
        overflowX: 'clip'
      }}
    >
      <Box
        component="img"
        src={LShape}
        alt=""
  role="presentation"
  aria-hidden="true"
        sx={{
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
          },
          '@media (max-width:600px)': {
            left:"50%",
            width:'500%',
            height:'40%',
            transform: 'translateX(-50%) translateY(50%) rotate(50deg)',
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

export default First_background;