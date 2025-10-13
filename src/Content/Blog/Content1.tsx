import { Box, Typography } from '@mui/material'
import React from 'react'

export default function Content1() {
  return (
    <Box sx={{width:'100%',height:'auto',my:8}}>
        <Typography sx={{width:800,fontFamily:'Delight',fontSize:28,fontWeight:450,pb:8}}>
            In recent years, conversations around AI have often come with a heavy question: Will it take our jobs? But the reality, especially inside companies already using it, looks very different.
        </Typography>
        <Typography sx={{width:800,fontFamily:'Inter Tight',fontSize:16,fontWeight:300,lineHeight:'150%',whiteSpace: 'pre-line'}}>
            {"AI isn’t replacing jobs — it’s reshaping them.\n\nAcross industries, we’re seeing a clear trend: companies are reskilling teams, rotating roles, and using AI to enhance productivity, not to eliminate people. In the service sector, nearly 40% of businesses already use some form of AI. In manufacturing, that number is around 26%, and actual layoffs connected to AI adoption remain very low — less than 1% in many cases.\n\nInstead of replacing talent, AI is becoming a tool that helps teams work smarter, not harder.\n\nAt AYVA Tech, we help businesses introduce AI in a way that supports people — not overwhelms them. That means identifying useful applications, building custom automations, and guiding teams through the change. Whether it’s summarizing complex documents, streamlining workflows, or providing AI coaching tools, we focus on clarity, trust, and real value.\n\nThe future of work with AI is human-first. And we’re here to help you make the most of it."}
        </Typography>
    </Box>
  )
}
