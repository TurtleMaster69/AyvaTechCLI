import { AppBar, Toolbar, Box, MenuItem, Select, Stack, Typography } from "@mui/material";
import { useState } from "react";
import AyvaLogo from '../assets/svg/AyvaLogo.svg'
import LanguageIcon from '@mui/icons-material/Language';
import ButtonPrimary from "../components/Buttons/buttonPrimary";
import NavLinkWithStars from "../components/Links/NavLinkWithStars";
import { useScrollToSection } from "../components/Utils/useScrollToSection";

export default function Header({id}:{id:string}) {
    const [language, setLanguage] = useState("en");
    const scrollToSection = useScrollToSection();
    return (
        <AppBar
            id={id}
            position="absolute"
            elevation={0}
            sx={{
                background: "transparent",
                color: "white",
                py: 3,
                px: 5
            }}
        >
            <Toolbar
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    maxWidth: "1440px",
                    width: "100%",
                    mx: "auto",
                }}
            >
                {/* Left: Logo */}
                <Box onClick={() => scrollToSection("/home")} sx={{ display: "flex", alignItems: "center", gap: 1 ,cursor: "pointer"}}>

                    <Box
                        component="img"
                        src={AyvaLogo}
                        alt="Company Logo"
                        sx={{ height: "auto", width: "auto" }}
                    />
                </Box>

                {/* Center: Nav links */}
                <Stack direction="row" spacing={4} sx={{ alignItems: "center",position:'absolute',left:'50%', transform: "translateX(-50%)"}}>
                    {[["About Us",'/home','why-us-section'], ["Why Us",'/home','why-us-section'], ["Blog",'/blog'], ["Contact",'/contact']].map((item) => (
                        <NavLinkWithStars label={item[0]} href={item[1]} sectionId={item[2]}>
                        </NavLinkWithStars>
                    ))}
                </Stack>

                {/* Right: Language + CTA */}
                <Stack direction="row" spacing={0} sx={{ alignItems: "center" , justifyContent:'center'
                }}>
                    <LanguageIcon sx={{pb:0.4}}></LanguageIcon>
                    <Select
                        value={language}
                        onChange={(e) => setLanguage(e.target.value)}
                        variant="standard"
                        disableUnderline
                        size="small"
                        sx={{
                            color: "white",
                            borderColor: "rgba(255, 255, 255, 0)",
                            "& .MuiOutlinedInput-notchedOutline": {
                                borderColor: "rgba(255, 255, 255, 0)",
                            },
                            "&:hover .MuiOutlinedInput-notchedOutline": {
                                borderColor: "rgba(255, 255, 255, 0)",
                            },
                            "& .MuiSvgIcon-root": { color: "white" },
                            p:0.3,
                            mr:3
                        }}
                        MenuProps={{
                            PaperProps: {
                                sx: {
                                    mt: 1.5, // moves the menu down (increase for more space)
                                    borderRadius: 2,
                                    boxShadow: "0px 4px 20px rgba(0,0,0,0.1)",
                                },
                            },
                        }}
                    >
                        <MenuItem value="si"><Typography sx={{fontFamily:'Inter Tight',fontSize:'16px',letterSpacing:1}}>SI</Typography></MenuItem>
                        <MenuItem value="en"><Typography sx={{fontFamily:'Inter Tight',fontSize:'16px',letterSpacing:1}}>EN</Typography></MenuItem>
                    </Select>
                    <Box>
                        <ButtonPrimary endIcon={false}>
                            Book a free consultation
                        </ButtonPrimary>
                    </Box>
                </Stack>
            </Toolbar>
        </AppBar>
    );
}
