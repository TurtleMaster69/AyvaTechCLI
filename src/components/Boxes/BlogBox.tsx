import { Box, Stack, Typography } from '@mui/material'
import ArrowForwardLink from '../Links/ArrowForwardLink'
import Components from '../../assets/blogs/components.json'
import Images from '../../assets/blogs/images_collection.json'
import { formatDate } from '../Utils/formatDate'
import { useMemo } from 'react'


interface BlogBoxProps{
 blog: {
    collectionId: string;
    collectionName: string;
    components: string[];
    created: string;
    id: string;
    thumbnail: string;
    title: string;
    updated: string;
 }
}

function excerptWords(text: string, wordLimit = 20) {
  const words = text.split(/\s+/); // split by spaces
  if (words.length <= wordLimit) return text;
  return words.slice(0, wordLimit).join(" ") + "...";
}

interface BlogComponent {
  blog_id: string;
  collectionId: string;
  collectionName: string;
  content: string;
  created: string;
  id: string;
  image: string;
  layout_type: string;
  order: number;
  title: string;
  updated: string;
}



export default function BlogBox({blog}:BlogBoxProps) {


    const blogComponents = useMemo(() => {
    if (!blog) return [];
    return blog.components
      .map((id) => Components.items.find((c) => c.id === id))
      .filter((c): c is BlogComponent => Boolean(c))
      .sort((a, b) => a.order - b.order);
  }, [blog]);

    const resolveImage = (id: string): string => {
    const img = Images.items.find((i) => i.id === id);
    return img ? `${import.meta.env.BASE_URL}images/${img.image}` : 'null';
  };
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        width: 'min(80%, 376px)',
        flex: '0 0 80%',
        maxWidth: 376,
      }}
    >
      <Box
        sx={{
          width: '100%',
          height: '100%',
          maxHeight:200, // Fixed height for the image container
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 3,
          mb: '20px',
        }}
      >
        <Box
          component="img"
          src={resolveImage(blog.thumbnail)}
          sx={{
            width: '100%',
            height: '100%', // Ensure image fills the fixed-height container
            objectFit: 'cover', // Scales image to cover container, cropping if needed
            objectPosition: 'center', // Centers the image
          }}
        />
      </Box>
      <Box sx={{ width: '100%', height: '100%' }}>
        <Stack>
          <Typography
            sx={{
              fontFamily: 'Inter Tight',
              fontSize: '14px',
              color: 'rgba(255,255,255,0.6)',
              pb: '10px',
            }}
          >
            {formatDate(blog.created)}
          </Typography>
          <Typography
            sx={{
              fontFamily: 'Delight',
              fontSize: '20px',
              fontWeight: 550,
            }}
          >
            {blog.title}
          </Typography>
          <Typography
            sx={{
              fontFamily: 'Inter Tight',
              fontSize: '16px',
              pb: 3,
            }}
          >
            {excerptWords(blogComponents[0].content,13)}
          </Typography>
          <ArrowForwardLink color="rgba(255,106,0,1)" ref={`blog/${blog.id}`}>
            <Typography
              sx={{
                fontFamily: 'Inter Tight',
                fontSize: '16px',
                fontWeight: 700,
              }}
            >
              Read more
            </Typography>
          </ArrowForwardLink>
        </Stack>
      </Box>
    </Box>

  )
}
