import { Box } from "@mui/material";
import { keyframes } from "@mui/system";

const scroll = keyframes`
  0% { transform: translateY(-200%); }
  100% { transform: translateY(-104%); } /* adjust depending on duplicated content */
`;
interface images{
  allImages: string[][]
}
export default function VerticalConveyor({ allImages }:images) {
  // Duplicate images for smooth infinite loop
  const images1 = [...allImages[0], ...allImages[0],...allImages[0],...allImages[0]];
  const images2 = [...allImages[1], ...allImages[1],...allImages[1],...allImages[1]];

  return (
    <Box
      sx={{       // total container width
        height: 1000,    
        width:'100%',     // visible area // hide images at top/bottom
        position: "relative",
        display: "flex",
        justifyContent: "center",
        flexDirection:'row',
        gap: 2,
      }}
    >
      
      {/* Fade mask at top/bottom */}

            <Box
      sx={{        overflow: "hidden",  // hide images at top/bottom
        position: "relative",
        maskImage: "linear-gradient(to bottom, transparent 0%, rgba(255,255,255,1) 35%, rgba(255,255,255,1) 70%, transparent 100%)",
        maskRepeat: "no-repeat",
        maskSize: "100% 100%",
        borderRadius: 5,
        pointerEvents: 'none'}}>
      <Box
        sx={{
          animation: `${scroll} 4s linear infinite`,
          zIndex:1,
          height:1000
        }}
      >
        {/* Column 1 */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 ,zIndex:1}}>
          {images1.map((img, i) => (
            <Box
              key={`col1-${i}`}
              component="img"
              src={img}
              sx={{ width: 270, borderRadius: 2,zIndex:1 }}
            />
          ))}
        </Box>
      </Box>
      </Box>
      <Box
      sx={{        overflow: "hidden",  // hide images at top/bottom
        position: "relative",
        maskImage: "linear-gradient(to bottom, transparent 0%, rgba(255,255,255,1) 35%, rgba(255,255,255,1) 70%, transparent 100%)",
        maskRepeat: "no-repeat",
        maskSize: "100% 100%",
        borderRadius: 5,
        pointerEvents: 'none',
        height:'92%',
        bottom:'-6%',
        }}>
      <Box
        sx={{
          animation: `${scroll} 4s linear infinite`,
          zIndex:1,
          height:1000
        }}
      >
        {/* Column 2 (staggered) */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 15,zIndex:1}}>
          {images2.map((img, i) => (
            <Box
              key={`col2-${i}`}
              component="img"
              src={img}
              sx={{ width: 270, borderRadius: 2 ,zIndex:1}}
            />
          ))}
        </Box>
      </Box>
      </Box>
    </Box>
  );
}
