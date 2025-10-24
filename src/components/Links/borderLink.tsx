
import BorderButton from '../Buttons/borderButton'
import { Box, Typography } from '@mui/material'

interface BorderLinkProps {
    title: string;
    content: string;
    type?: "email" | "phone" | "external";
    value: string
}

export default function borderLink({ title, content, type, value }: BorderLinkProps) {
    return (
        <BorderButton width={'100%'} height={"100%"} pb={{ xs: 3, sm: 3, md: 5 }} pt={{ xs: 3, sm: 3, md: 5 }} type={type} value={value}>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start", width: '100%', pr: 5,justifyContent:'flex-start' }}>
                <Typography sx={{
                    fontFamily: "'Delight', Helvetica",
                    fontSize: "2rem",
                    letterSpacing: "0px",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    backgroundImage: "linear-gradient(150deg, rgba(255, 255, 255, 1) 0%, rgba(0, 17, 255, 1) 190%)",
                    backgroundRepeat: "no-repeat",
                    WebkitTextFillColor: 'transparent',
                    lineHeight: "100%",
                    whiteSpace: 'pre',
                    pb: { xs: 0.5, sm: 2 },
                     '@media (max-width:400px)': {
                        fontSize:'1.4rem'
                    },
                }}>
                    {title}
                </Typography>
                <Typography sx={{
                    fontFamily: "'Inter Tight', Helvetica",
                    fontSize: "1.125rem" ,
                    letterSpacing: "0px",
                    lineHeight: "100%",
                    textAlign: "left",
                    '@media (max-width:400px)': {
                        fontSize:'1rem'
                    },
                }}>
                    {content}
                </Typography>
            </Box>
        </BorderButton>
    )
}
