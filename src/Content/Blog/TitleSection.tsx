import { Box, Typography } from '@mui/material'
import Blogs from '../../assets/blogs/blogs.json'
import Images from '../../assets/blogs/images_collection.json'
import {formatDate} from '../../components/Utils/formatDate'

export default function TitleSection({id}:{id:string}) {
    const blogs=Blogs.items
    const blog = blogs.find((b) => b.id === id);
    const resolveImage = (id: string): string => {
    const img = Images.items.find((i) => i.id === id);
    return img ? `${import.meta.env.BASE_URL}images/${img.image}` : "";
  };
  
  if (!blog) return <Typography>No blog found</Typography>;


  return (
    <Box 
    sx={{width:'100%',maxWidth:1440,height:"100%",
                  position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "start",
    }}>
  {/* Background Image */}
    <Box
        component="img"
        src={resolveImage(blog.thumbnail)}
        alt="My PNG"
        sx={{
        position: "absolute",
        width: "100%",
        height: "100%",
        objectFit: "cover",
        objectPosition: "center 57%",
        transform: "scaleX(1)",
        transformOrigin: "center",
        pointerEvents: "none",
        zIndex: -1,
        }}
    />

  {/* Overlay mask */}
    <Box
        sx={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(3, 7, 21, 0.72)", // 👈 mask
        pointerEvents: "none", // ensures you can click things below
        zIndex: -1,
        }}
    />
    <Box sx={{display:'flex',alignItems:'end',height:'100%',width:'100%',px:15,pt:30}}>
        <Box sx={{display:'flex',justifyContent:'space-between',flexDirection:'row',width:'100%',alignItems:'end'}}>
            <Typography variant="h2" sx={{textAlign: 'left',WebkitBackgroundClip: "text",
                        backgroundClip: "text",
                        backgroundImage: "linear-gradient(165deg, rgba(255, 255, 255, 1) 0%, rgba(0, 17, 255, 1) 290%)",
                        backgroundRepeat: "no-repeat",
                        WebkitTextFillColor: 'transparent',pb:'44px', maxWidth:'60%',letterSpacing:'-1%',whiteSpace: 'pre-line'}}>
          {blog?.title}
        </Typography>
        <Typography sx={{textAlign: 'right',
                        fontFamily:'Inter Tight',
                        letterSpacing:'0',
                        fontSize:20,pb:'35px',
                        color:'rgba(236, 241, 255, 0.78)',
                        fontWeight:400}}>
          {formatDate(blog?.created)}
        </Typography>
        </Box>
    </Box>


</Box>
  )
}
