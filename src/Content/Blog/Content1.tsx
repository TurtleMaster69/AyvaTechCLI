import { Box, Typography } from '@mui/material'

interface BlogComponent {
blog:{  blog_id: string;
  collectionId: string;
  collectionName: string;
  content: string;
  created: string;
  id: string;
  image: string;
  layout_type: string;
  order: number;
  title: string;
  updated: string;}  
}

export default function Content1({blog}:BlogComponent) {
    console.log(blog)
  
  if (!blog) return <Typography>No blog found</Typography>;
  return (
    <Box sx={{width:'100%',height:'auto',my:8}}>
        <Typography sx={{width:800,fontFamily:'Delight',fontSize:28,fontWeight:450,pb:8}}>
          {blog.title}
        </Typography>
        <Typography sx={{width:800,fontFamily:'Inter Tight',fontSize:16,fontWeight:300,lineHeight:'150%',whiteSpace: 'pre-line'}}>
          {blog.content}
        </Typography>
    </Box>
  )
}
