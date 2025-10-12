import React, { useState } from "react";
import { Box, Typography, IconButton, Collapse } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

interface ExpandableBoxProps {
  title: string;
  children: React.ReactNode;
  width?: number | string;
}

export default function ExpandableBox({ title, children, width = 600 }: ExpandableBoxProps) {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => setExpanded((prev) => !prev);

  return (
    <Box
      sx={{
        width,
        outlineOffset: "-2px",
        mb: 3,
        pb: 2,
        borderBottom: "3px solid rgba(255, 255, 255, 0.06)",
      }}
    >
      {/* Title row */}
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Typography sx={{ fontFamily: "'Delight', Helvetica",letterSpacing:'0%',fontSize: "20px", lineHeight:'120%',whiteSpace: "pre"}}>{title}</Typography>
        <IconButton onClick={toggleExpand} size="small" >
          {expanded ? <RemoveIcon sx={{ color: "#fff" }}/> : <AddIcon sx={{ color: "#fff" }}/>}
        </IconButton>
      </Box>

      {/* Expandable content */}
      <Collapse in={expanded}>
        <Box sx={{ mt: 2 }}>
          <Typography sx={{fontFamily:'Inter Tight', fontSize:'16px', lineHeight:'150%', letterSpacing:'0%'}}>
          {children}
          </Typography>
        </Box>
      </Collapse>
    </Box>
  );
}
