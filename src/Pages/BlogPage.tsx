import { useEffect, useState, useMemo } from "react";
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
} from "@mui/material";
import Blogs from '../assets/blogs/blogs.json'
import Components from '../assets/blogs/components.json'
import Images from '../assets/blogs/images_collection.json'

// \U0001f9f1 Types
interface ImageItem {
  id: string;
  image: string;
  title: string;
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

interface Blog {
  id: string;
  title: string;
  thumbnail: string;
  components: string[]; // component IDs
}

interface JsonData<T> {
  items: T[];
}

// \U0001f9e9 Component
export default function BlogPage({ blogId = "054711" }: { blogId?: string }) {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [components, setComponents] = useState<BlogComponent[]>([]);
  const [images, setImages] = useState<ImageItem[]>([]);
  const [loading, setLoading] = useState(true);

useEffect(() => {
  const fetchAll = async () => {
    try {
      const base = import.meta.env.BASE_URL;

      const [blogsRes, componentsRes, imagesRes] = await Promise.all([
        fetch(`${base}blogs.json`),
        fetch(`${base}blog_components.json`),
        fetch(`${base}images.json`),
      ]);

      console.log(blogsRes)

      const [blogs, components, images] = await Promise.all([
        blogsRes.json(),
        componentsRes.json(),
        imagesRes.json(),
      ]);

      console.log(blogs)

    } catch (err) {
      console.error("Failed to load data", err);
    }
    setLoading(false)
  };

  fetchAll();
}, []);

  console.log(blogs)
  const blog = Blogs.items.find((b) => b.id === blogId);

  const blogComponents = useMemo(() => {
    if (!blog) return [];
    return blog.components
      .map((id) => Components.items.find((c) => c.id === id))
      .filter((c): c is BlogComponent => Boolean(c))
      .sort((a, b) => a.order - b.order);
  }, [blog, components]);

  const resolveImage = (id: string): string | null => {
    const img = Images.items.find((i) => i.id === id);
    return img ? `images/${img.image}` : null;
  };

  if (loading) return <CircularProgress />;
  if (!blog) return <Typography>No blog found</Typography>;

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h3" gutterBottom>
        {blog.title}
      </Typography>

      {blogComponents.map((comp) => (
        <BlogComponentView key={comp.id} data={comp} resolveImage={resolveImage} />
      ))}
    </Container>
  );
}

// \U0001f9e9 Blog Component Renderer
function BlogComponentView({
  data,
  resolveImage,
}: {
  data: BlogComponent;
  resolveImage: (id: string) => string | null;
}) {
  const imageUrl = resolveImage(data.image);

  switch (data.layout_type) {
    case "layout1":
      return (
        <Card sx={{ display: "flex", gap: 2, my: 3 }}>
          {imageUrl && (
            <CardMedia
              component="img"
              image={imageUrl}
              alt={data.title}
              sx={{ width: "40%", borderRadius: 2 }}
            />
          )}
          <CardContent>
            <Typography variant="h5">{data.title}</Typography>
            <Typography>{data.content}</Typography>
          </CardContent>
        </Card>
      );

    case "layout2":
      return (
        <Card sx={{ my: 3 }}>
          <CardContent>
            <Typography variant="h4" gutterBottom>
              {data.title}
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              {imageUrl && (
                <img
                  src={imageUrl}
                  alt={data.title}
                  style={{ width: "60%", borderRadius: 12, marginBottom: 16 }}
                />
              )}
              <Typography>{data.content}</Typography>
            </Box>
          </CardContent>
        </Card>
      );

    default:
      return (
        <Box sx={{ my: 3 }}>
          <Typography variant="h6">{data.title}</Typography>
          <Typography>{data.content}</Typography>
        </Box>
      );
  }
}
