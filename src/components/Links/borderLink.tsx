
import BorderButton from '../Buttons/borderButton'
import { Box, Typography } from '@mui/material'

interface BorderLinkProps{
    title:string;
    content:string;
    type?: "email" | "phone" | "external";
    value:string
}

export default function borderLink({title,content,type,value}:BorderLinkProps) {
    return (
        <BorderButton width={'100%'} height={"100%"} pb={5} pt={5} type={type} value={value}>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start",width:'100%',pr:5 }}>
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
                    pb: 2,
                    whiteSpace:'nowrap'
                }}>
                    {title}
                </Typography>
                <Typography sx={{
                    fontFamily: "'Inter Tight', Helvetica",
                    fontSize: "18px",
                    letterSpacing: "0px",
                    lineHeight: "100%",
                    textAlign: "left",
                    whiteSpace:'pre'
                }}>
                    {content}
                </Typography>
            </Box>
        </BorderButton>
    )
}
