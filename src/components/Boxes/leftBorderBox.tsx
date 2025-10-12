import { Box, Typography } from '@mui/material'
import React from 'react'

interface BoxCardProps {
icon?: React.ReactNode;
title: string;
description: string;
}

export default function leftBorderBox({ icon, title, description }: BoxCardProps) {
  return (
    <Box
      sx={{
        width: 470,
        height: 230,
        outlineOffset: "-2px",
        p:3,
        borderLeft: "1px solid rgba(255, 255, 255, 0.03)",
        // borderRight: "1px solid rgba(255, 255, 255, 0.03)",
      }}
    >
        <Box sx={{ display: "flex", flexDirection: "column", gap:3}}>

        {/* <LightbulbOutlineIcon sx={{fontSize:32, 
            "& path": {
      strokeWidth: 0.1, // Adjust the line width
      stroke: "#ffffffff", // Optional: set stroke color
    },

        }}/> */}
        {icon}

          <Box sx={{ display: "flex", flexDirection: "column",gap:1}}>
            <Typography
              sx={{
                color: "#fff", // replace text-color-grey-000
                fontSize: "20px", // text-xl
                fontFamily: "'Delight', sans-serif",
                fontWeight: 500,
                lineHeight: "120%",
                letterSpacing:'0%'
              }}
            >
              {title}
            </Typography>
            <Typography
              sx={{
                color: "rgba(255,255,255,0.8)", // opacity-80
                fontSize: "16px", // text-base
                fontFamily: "'Inter Tight', sans-serif",
                fontWeight: 400,
                lineHeight: "150%",
                letterSpacing:'0%'
              }}
            >
              {description}
            </Typography>
          </Box>
        </Box>
    </Box>
  )
}
