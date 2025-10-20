import { Box, Typography } from '@mui/material';
import PostCard from '../components/Boxes/BlogBox';
import Blogs from '../assets/blogs/blogs.json'
import PaginatedBox from '../components/Boxes/paginatedBox';
import ClosingSection from '../Content/Home/ClosingSection';




export default function HomePage() {
    const blogs = Blogs.items
    const components = blogs.map((blog) => (
                        <PostCard
                            blog={blog}
                        />
                ))
    return (
        <Box sx={{width:'100%',display:'flex',flexDirection:'column',alignItems:'center'}}>
            <Box sx={{maxWidth:1440,width:'85%',mt:22}}>
            <Typography variant="h4" gutterBottom>
                Latest Posts
            </Typography>
            <PaginatedBox
            components={components}
            itemsPerRow={4}
            />
            </Box>
        <ClosingSection/>
        </Box>
    );
}
