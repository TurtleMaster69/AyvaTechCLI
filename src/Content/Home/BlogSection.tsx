import { Box, Typography } from '@mui/material'
import ButtonPrimary from '../../components/Buttons/buttonPrimary'
import BlogBox from '../../components/Boxes/BlogBox'
import Blog from '../../assets/blogs/blogs.json'

export default function BlogSection() {

    const blog = Blog.items
    if(!blog)return
    const latestThree = blog
    .sort((a, b) => new Date(b.created).getTime() - new Date(a.created).getTime())
    .slice(0, 5);

    return (
        <Box sx={{ width: '100%', maxWidth: 1440, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Box sx={{ width: '85%', py: {xs:8,sm:10} }}>
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
                            pb: 7,
                            pr:3
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
                        overflow: 'scroll',
                        width: '100%',
                        height:'100%',
                        scrollSnapType: 'x mandatory',
                        '& > *': {
                            scrollSnapAlign: 'center',
                        },
                        '@media (max-width:1440px)': {
                            maskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)',
                            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)',
                    },
                    }}
                >
                    {latestThree.map((blog) => (
                        <BlogBox blog={blog}></BlogBox>
                    ))}
                </Box>
                </Box>
            </Box>
        </Box>
    )
}
