import { Button, Typography } from '@mui/material'
import { type ReactNode } from 'react'
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useScrollToContactSection } from '../Utils/useScrollToContactSection';

interface buttonProps{
  children: ReactNode
  endIcon?: boolean
}

export default function ButtonPrimary({children,endIcon=true}:buttonProps) {
  const scrollToSection = useScrollToContactSection();
  return (
    <Button
                variant="contained"
                onClick={scrollToSection}
                {...(endIcon && { endIcon: <ArrowForwardIcon sx={{zIndex:20}}/> })}
                sx={{
                  paddingLeft: "24px",
                  paddingRight: "24px",
                  paddingTop: "14px",
                  paddingBottom: "14px",
                  borderRadius: "999px",
                  fontFamily: "'Inter Tight', Helvetica",
                  fontWeight: 500,
                  fontSize: "16px",
                  lineHeight: "19.2px",
                  textTransform: "none",
                  color: "#FFFFFF",
                  background: "transparent",
                  overflow: "hidden",
                  transition: "transform 0.3s",
                  "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          borderRadius: "5px",
          zIndex: 11,
          background: "linear-gradient(240deg, rgba(0, 10, 153, 1) 0%, rgba(0, 17, 255, 1)100%)",
        },

        // ::after equivalent
        "&::after": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          borderRadius: "5px",
          zIndex: 11,
          opacity: 0,
          background: "linear-gradient(240deg, rgba(0, 17, 255, 1)0%,rgba(0, 8, 126, 1)60%)",
          transition: "opacity 500ms ease",
          boxShadow: `5px 5px 18px -3px rgba(0,0,0,1)`,
        },

        // Hover / focus / active
        "&:hover, &:focus, &:active": {
          transform: "translateY(-1px) translateX(1px)",
          boxShadow: `50px 50px 58px -20px rgba(0,0,0,0.25)`,
          "&::after": {
            opacity: 1,
          },
        },
                }}
              >
                <Typography sx={{fontFamily: "'Inter Tight', Helvetica",
              color: "#FFFFFF",fontSize: "16px",whiteSpace:'nowrap',zIndex:20}}>{children}</Typography>
              </Button>
  )
}
