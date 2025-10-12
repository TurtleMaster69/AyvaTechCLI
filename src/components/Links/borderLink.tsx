
import BorderButton from '../Buttons/borderButton'
import { Box, Typography } from '@mui/material'

interface BorderLinkProps{
    title:string;
    content:string;
}

export default function borderLink({title,content}:BorderLinkProps) {
    return (
        <BorderButton width={470} height={"100%"} pb={5} pt={5}>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start",width:310 }}>
                <Typography sx={{
                    fontFamily: "'Delight', Helvetica",
                    fontSize: "32px",
                    letterSpacing: "0px",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    backgroundImage: "linear-gradient(150deg, rgba(255, 255, 255, 1) 0%, rgba(0, 17, 255, 1) 190%)",
                    backgroundRepeat: "no-repeat",
                    WebkitTextFillColor: 'transparent',
                    lineHeight: "100%",
                    pb: 2
                }}>
                    {title}
                </Typography>
                <Typography sx={{
                    fontFamily: "'Inter Tight', Helvetica",
                    fontSize: "18px",
                    letterSpacing: "0px",
                    lineHeight: "100%",
                    textAlign: "left",
                }}>
                    {content}
                </Typography>
            </Box>
        </BorderButton>
    )
}
