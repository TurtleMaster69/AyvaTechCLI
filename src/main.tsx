import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './Pages/Home.tsx'
import { Box, CssBaseline } from '@mui/material'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CssBaseline />
     <Box
      sx={{
        display: "flex",
        justifyContent: "center",  // horizontal center
        width: "100vw",             // full viewport width
      }}
    >
      <Home />
    </Box>
  </StrictMode>,
)
