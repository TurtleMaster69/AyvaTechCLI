import { Box, Typography } from '@mui/material'
import React from 'react'
import Boxes from './borderBox'
interface BoxCardProps {
icon?: React.ReactNode;
title: string;
description: string;
}
export default function boxesWithIcons({ icon, title, description }: BoxCardProps) {
  return (
    <Boxes width={384} height = {240} justifyContent={"start"}>
    <Box sx={{ display: "flex", flexDirection: "column", gap:3, mt:3}}>

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
                fontSize: "1.25rem", // text-xl
                fontFamily: "'Delight', sans-serif",
                fontWeight: 500,
                lineHeight: "normal",
              }}
            >
              {title}
            </Typography>
            <Typography
              sx={{
                color: "rgba(255,255,255,0.8)", // opacity-80
                fontSize: "1rem", // text-base
                fontFamily: "'Inter Tight', sans-serif",
                fontWeight: 400,
                lineHeight: "normal",
              }}
            >
              {description}
            </Typography>
          </Box>
        </Box>
    </Boxes>
  )
}
