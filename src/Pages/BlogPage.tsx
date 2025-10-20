import { useMemo } from "react";
import {
  Typography,
  Stack,
  Box,
} from "@mui/material";
import Blogs from '../assets/blogs/blogs.json'
import Components from '../assets/blogs/components.json'
import Images from '../assets/blogs/images_collection.json'
import TitleSection from "../Content/Blog/TitleSection";
import Content1 from "../Content/Blog/Content1";
import Content2 from "../Content/Blog/Content2";
import Content3 from "../Content/Blog/Content3";
import ClosingSection from "../Content/Home/ClosingSection";

// \U0001f9f1 Types

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

// \U0001f9e9 Component
export default function BlogPage({ blogId = "054711" }: { blogId?: string }) {
  const blog = Blogs.items.find((b) => b.id === blogId);

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

  if (!blog) return <Typography>No blog found</Typography>;

  return (
    <Box sx={{width:'100%',justifyContent:'center',alignItems:'center',display:'flex',flexDirection:'column'}}>
    <Box sx={{
            display:'flex',
            flexDirection:'column',
            maxWidth:1440,
            width: "100%",
            position: "relative",
            alignItems: "center",
            justifyContent:'center',
            mt:0
          }}>
      <Stack
          sx={{
            width: "85%",
            position: "relative",
            alignItems: "center",
            mt:0
          }}
        >
        <TitleSection id={blog.id}/>
        {blogComponents.map((comp) => (
          <BlogComponentView key={comp.id} data={comp} resolveImage={resolveImage} />
        ))}
      </Stack>
    </Box>
      <ClosingSection/>
      </Box>
  );
}

// \U0001f9e9 Blog Component Renderer
function BlogComponentView({
  data,
  resolveImage,
}: {
  data: BlogComponent;
  resolveImage: (id: string) => string;
}) {
  const imageUrl = resolveImage(data.image);

  switch (data.layout_type) {
    case "layout1":
      return (
        <Content1 blog={data}/>
      );

    case "layout2":
      return (
        <Content2 component={data} imgUrl={imageUrl}/>
      );

    default:
      return (
        <Content3 component={data} imgUrl={imageUrl}/>
      );
  }
}
