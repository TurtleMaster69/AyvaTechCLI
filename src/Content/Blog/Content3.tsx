import { Box, Typography } from '@mui/material'

interface BlogComponent {
  component: {
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
  imgUrl: string

}

export default function Content3({ component, imgUrl }: BlogComponent) {
  return (
    <Box sx={{ width: '100%', height: '100%', my: 18, display: 'flex', justifyContent: 'space-evenly' }}>
      <Box sx={{ width: '50%', pr: 10, pl: 0, display: 'flex', alignItems: 'left', justifyContent: 'center', flexDirection: 'column' }}>
        <Typography sx={{ fontFamily: 'Delight', fontSize: 28, fontWeight: 450, pb: 2 }}>
          {component.title}
        </Typography>
        <Typography sx={{ fontFamily: 'Inter Tight', fontSize: 16, fontWeight: 300, lineHeight: '150%', whiteSpace: 'pre-line' }}>
          {component.content}
        </Typography>
      </Box>
      <Box
        sx={{
          width: "50%",
          height: "100%",
        }}>
        <Box
          component="img"
          src={imgUrl}
          alt="My PNG"
          sx={{
            width: "100%",           // full width of parent
            height: "100%",          // full height of parent
            objectFit: "cover",      // crop sides that don’t fit
            objectPosition: "center", // centers image
            transformOrigin: "center",
            pointerEvents: "none",
            borderRadius: 3
          }}
        />
      </Box>
    </Box>
  )
}
