import { Box, Typography } from '@mui/material'
import ButtonPrimary from '../../components/Buttons/buttonPrimary'
import BlogBox from '../../components/Boxes/BlogBox'

export default function BlogSection() {
    return (
        <Box sx={{ width: '100%', maxWidth: 1440, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Box sx={{ width: '85%', py: 22 }}>
                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Typography
                        variant='h2'
                        sx={{
                            textAlign: "left",
                            mt: 4,
                            WebkitBackgroundClip: "text",
                            backgroundClip: "text",
                            backgroundImage: "linear-gradient(140deg, rgba(255, 255, 255, 1) 0%, rgba(0, 17, 255, 1) 270%)",
                            backgroundRepeat: "no-repeat",
                            WebkitTextFillColor: 'transparent',
                            pb: 7
                        }}>
                        Blog & News
                    </Typography>
                    <Box>
                        <ButtonPrimary>
                            View All
                        </ButtonPrimary>
                    </Box>
                </Box>

                 <Box sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>       
                <Box
                    sx={{
                        display: { xs: 'flex', md: 'flex' },
                        gap: 3,
                        py: 1,
                        px: 3,
                        overflow: 'auto',
                        width: '100%',
                        scrollSnapType: 'x mandatory',
                        '& > *': {
                            scrollSnapAlign: 'center',
                        },
                        '::-webkit-scrollbar': { display: 'none' },
                        '@media (max-width:1440px)': {
                            maskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)',
                            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)',
                    },
                    }}
                >
                    {[1, 2, 3].map(() => (
                        <BlogBox></BlogBox>
                    ))}
                </Box>
                </Box>
            </Box>
        </Box>
    )
}
