import { Box } from '@mui/material'
import React from 'react'
import Content1 from './Content1'
import Content2 from './Content2'
import Content3 from './Content3'

export default function BlogContentSection() {
  return (
    <Box sx={{width:1440,height:1976,px:15}}>
        <Content1/>
        <Content2/>
        <Content3/>
    </Box>
  )
}
