import { AppBar, Toolbar, Box, MenuItem, Select, Stack, Typography, IconButton, ClickAwayListener, Popper, Link, Slide, useMediaQuery } from "@mui/material";
import { useState } from "react";
import AyvaLogo from '../assets/svg/AyvaLogo.svg'
import LanguageIcon from '@mui/icons-material/Language';
import MenuIcon from '@mui/icons-material/Menu';
import ButtonPrimary from "../components/Buttons/buttonPrimary";
import NavLinkWithStars from "../components/Links/NavLinkWithStars";
import { useScrollToSection } from "../components/Utils/useScrollToSection";
import React from "react";
import RShape from '../assets/png/background/strong.png'
import { appTheme } from "./ThemeProvider";


const pages = [["About Us", '/home', 'why-us-section'], ["Why Us", '/home', 'why-us-section'], ["Blog", '/blog'], ["Contact", '/contact']]

export default function Header({ ids }: { ids: string }) {
    const [language, setLanguage] = useState("en");
    const scrollToSection = useScrollToSection();

    const [open, setOpen] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
        setOpen((previousOpen) => !previousOpen);
    };

    const handleClose = () => {
        setOpen(false);
        setAnchorEl(null);
    };
    const theme = appTheme
    const isXs = useMediaQuery(theme.breakpoints.down('sm'));

    const onClickAway = (event: MouseEvent | TouchEvent) => {
        if (isXs) return;
        const button = document.getElementById('myToggleButton');
        if (button && event.target instanceof Node && button.contains(event.target)) return;
        handleClose();
    };


    const canBeOpen = open && Boolean(anchorEl);
    const id = canBeOpen ? 'transition-popper' : undefined;

    return (
        <AppBar
            id={ids}
            position="absolute"
            elevation={0}
            sx={{
                maskImage: "linear-gradient(to bottom, rgba(255,255,255,1) 50%, transparent 100%)",
                maskRepeat: "no-repeat",
                maskSize: "100% 100%",
                bgcolor: 'background.default',
                color: "white",
                py: { xs: 2, sm: 1, md: 3 },
                px: { xs: 0.5, sm: 2, md: 5 },
                width: '100%',
                zIndex: 30
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

                <ClickAwayListener onClickAway={onClickAway}>
                    <Box sx={{ display: { xs: 'none', sm: 'flex', md: 'none' } }}>

                        <IconButton
                            aria-describedby={id}
                            onClick={handleClick}
                            color="inherit"
                            sx={{
                                width: 'auto',
                                p: 0
                            }}
                        >
                            <MenuIcon sx={{ fontSize: '2.6rem' }} />
                        </IconButton>
                        <Popper id={id} open={open} anchorEl={anchorEl} sx={{ width: '100%', zIndex: 10, height: { xs: `calc(100vh - 66px)`, sm: 'auto' } }} transition>


                            {({ TransitionProps }) => (
                                <Slide {...TransitionProps} timeout={350}
                                    easing={{ enter: 'cubic-bezier(0.4, 1, 1, 1)', exit: 'cubic-bezier(0.4, 1, 1, 1)' }}
                                >
                                    <Box sx={{
                                        borderBottom: 0.01, borderColor: 'rgba(50, 50, 80, 0.66)', p: 1, bgcolor: 'background.default', width: '100%', display: 'flex', flexDirection: { xs: 'column', sm: 'row' },
                                        '@keyframes slideInRight': {
                                            from: { transform: 'translateX(100%)', opacity: 0 },
                                            to: { transform: 'translateX(0)', opacity: 1 },
                                        },
                                        '&.slide-in': {
                                            animation: 'slideInRight 10s ease-out',
                                        },
                                        height: '100%'
                                    }}>
                                        <Box
                                            component="img"
                                            src={RShape}
                                            alt="My PNG"
                                            sx={{
                                                bottom: 0,
                                                left: 0,
                                                width: '100%',
                                                height: '100%',
                                                position: 'absolute',
                                                userSelect: 'none',
                                                WebkitUserDrag: 'none',
                                                pointerEvents: 'none'
                                                // move left edge to 50% of parent
                                            }}
                                        />
                                        <Box
                                            sx={{
                                                flex:1,
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'start',
                                                p: 3,
                                                borderRight: '1px solid rgba(0,0,0,0.1)',
                                                '@media (max-width:600px)': {
                                                    flex:0
                                                },
                                            }}
                                        >
                                            {pages.map((item) => (
                                                <NavLinkWithStars label={item[0]} href={item[1]} sectionId={item[2]} starshover={false} handleClick={handleClose}>
                                                </NavLinkWithStars>
                                            ))}
                                        </Box>

                                        {/* Right side: Empty space or extra content */}
                                        <Box sx={{ gap: 1, display: 'flex', flexDirection: 'column', alignItems: { sx: 'start', sm: 'end' }, p: 3, justifyContent: { sm: 'flex-end', xs: 'space-between' }, height: { xs: 300, sm: 'auto' } }}>
                                            <Box sx={{ alignItems: 'center', justifyContent: 'start', display: { xs: 'flex', sm: 'none' }, px: 1.5, py: 2 }}>
                                                <LanguageIcon sx={{ pb: 0.4 }}></LanguageIcon>
                                                <Select
                                                    id={'languageChange'}
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
                                                        p: 0.3,
                                                        mr: 3
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
                                                    <MenuItem value="si"><Typography sx={{ fontFamily: 'Inter Tight', fontSize: '16px', letterSpacing: 1 }}>SI</Typography></MenuItem>
                                                    <MenuItem value="en"><Typography sx={{ fontFamily: 'Inter Tight', fontSize: '16px', letterSpacing: 1 }}>EN</Typography></MenuItem>
                                                </Select>
                                            </Box>
                                            <Box>
                                                <Typography sx={{ textAlign: { xs: 'left', sm: 'right' }, px: 2, fontFamily: 'Inter Tight', fontSize: '14px', letterSpacing: '0px', lineHeight: '2.2', fontWeight: 300 }}>
                                                    <Link href="mailto:info@ayva.si" sx={{ cursor: "pointer" }} color="inherit" underline="hover">info@ayva.si </Link>
                                                </Typography>
                                                <Typography sx={{ textAlign: { xs: 'left', sm: 'right' }, px: 2, fontFamily: 'Inter Tight', fontSize: '14px', letterSpacing: '0px', lineHeight: '2.2', fontWeight: 300, pb: 2 }}>
                                                    <Link href="tel:+38651238953" sx={{ cursor: "pointer" }} color="inherit" underline="hover">+386 51 238 953</Link>
                                                </Typography>
                                            </Box>
                                            <Box sx={{ px: 1, maxWidth: '400px' }}>
                                                <ButtonPrimary>
                                                    Book a free consultation
                                                </ButtonPrimary>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Slide>
                            )}
                        </Popper>
                    </Box>
                </ClickAwayListener>
                {/* Left: Logo */}
                <Box onClick={() => scrollToSection("/home")} sx={(theme) => ({
                    display: "flex", alignItems: "center", cursor: "pointer", width: '13.5rem', height: 'auto',
                    [theme.breakpoints.down('lg')]: {
                        width: '10rem'
                    },
                    [theme.breakpoints.down('md')]: {
                        width: '13rem'
                    },

                })
                }>

                    <Box
                        component="img"
                        src={AyvaLogo}
                        alt="Company Logo"
                        sx={{ height: "auto", width: "100%" }}
                    />
                </Box>


                <IconButton
                    id={'myToggleButton'}
                    aria-describedby={id}
                    onClick={handleClick}
                    color="inherit"
                    sx={{
                        width: 'auto',
                        p: 0,
                        display: { sm: 'none' }
                    }}
                >
                    <MenuIcon sx={{ fontSize: '2.6rem' }} />
                </IconButton>

                {/* Center: Nav links */}
                <Stack direction="row" spacing={4} sx={{ alignItems: "center", position: 'absolute', left: '50%', transform: "translateX(-50%)", display: { xs: 'none', md: 'revert' } }}>
                    {[["About Us", '/home', 'why-us-section'], ["Why Us", '/home', 'why-us-section'], ["Blog", '/blog'], ["Contact", '/contact']].map((item) => (
                        <NavLinkWithStars label={item[0]} href={item[1]} sectionId={item[2]}>
                        </NavLinkWithStars>
                    ))}
                </Stack>



                {/* Right: Language + CTA */}
                <Stack direction="row" spacing={0} sx={{
                    alignItems: "center", justifyContent: 'center', display: { xs: 'none', sm: 'flex' }
                }}>
                    <LanguageIcon sx={{ pb: 0.4 }}></LanguageIcon>
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
                            p: 0.3,
                            mr: { md: 3 }
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
                        <MenuItem value="si"><Typography sx={{ fontFamily: 'Inter Tight', fontSize: '16px', letterSpacing: 1 }}>SI</Typography></MenuItem>
                        <MenuItem value="en"><Typography sx={{ fontFamily: 'Inter Tight', fontSize: '16px', letterSpacing: 1 }}>EN</Typography></MenuItem>
                    </Select>
                    <Box sx={(theme) => ({
                        [theme.breakpoints.down('lg')]: {
                            display: 'none'
                        },
                    })}>
                        <ButtonPrimary endIcon={false}>
                            Book a free consultation
                        </ButtonPrimary>
                    </Box>
                </Stack>
            </Toolbar>
        </AppBar>
    );
}
