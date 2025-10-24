import React, { useState } from "react";
import { Box, Typography, IconButton, Collapse } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

interface ExpandableBoxProps {
  title: string;
  children: React.ReactNode;
  width?: number | string;
  autoExpanded?:boolean
}

export default function ExpandableBox({ title, children,autoExpanded=false}: ExpandableBoxProps) {
  const [expanded, setExpanded] = useState(autoExpanded);

  const toggleExpand = () => setExpanded((prev) => !prev);

  return (
    <Box
      sx={{
        display:'flex',
        flex:1,
        width:'100%',
        outlineOffset: "-2px",
        mb: 3,
        pb: 2,
        borderBottom: "3px solid rgba(255, 255, 255, 0.06)",
        flexDirection:'column'
      }}
    >
      {/* Title row */}
      <Box sx={{ display: "flex", width:'100%',justifyContent: "space-between", alignItems: "center" }}>
        <Typography sx={{ fontFamily: "'Delight', Helvetica",letterSpacing:'0%',fontSize: {xs:'1.118rem',sm:"1.25rem"}, lineHeight:'120%',whiteSpace: {xs:'break-spaces',md:'pre'},tabSize:{xs:1,sm:5,md:6}}}>
          {title}
          </Typography>
        <IconButton onClick={toggleExpand} size="small" >
          {expanded ? <RemoveIcon sx={{ color: "#fff" }}/> : <AddIcon sx={{ color: "#fff" }}/>}
        </IconButton>
      </Box>

      {/* Expandable content */}
      <Collapse in={expanded}>
        <Box sx={{ mt: 2 }}>
          <Typography sx={{fontFamily:'Inter Tight', fontSize:'16px', lineHeight:'150%', letterSpacing:'0%',mr:3}}>
          {children}
          </Typography>
        </Box>
      </Collapse>
    </Box>
  );
}
