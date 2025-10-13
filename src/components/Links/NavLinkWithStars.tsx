import { Box, Link, Typography } from "@mui/material";
import { keyframes } from "@mui/system";
import LoadingStar from '../SVG/star_shape'
import { useScrollToSection } from "../Utils/useScrollToSection";

const spin = keyframes`
  0% { transform: rotate(-45deg); }
  100% { transform: rotate(315deg); }
`;


export default function NavLinkWithStars({ label, href,sectionId=undefined}: { label: string ,href:string,sectionId?:string}) {
  const scrollToSection = useScrollToSection();
  return (
    <Box
      sx={{
        position: "relative",
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        px: 2,
        py: 1,
        cursor: "pointer",
        "&:hover .stars": {
          opacity: 1,
          animation: `${spin} 4s linear infinite`,
        },
        "&:hover .linktxt": {
          backgroundClip: "text",
            backgroundImage: "linear-gradient(150deg, rgba(255, 255, 255, 1) 0%, rgba(0, 17, 255, 1) 200%)",
            backgroundRepeat: "no-repeat",
            WebkitTextFillColor: 'transparent',
        },
      }}
    >
      {/* Stars container - ABOVE text */}
      <Box
        className="stars"
        sx={{
          position: "absolute",
          top: "-25px", // controls distance above text
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "40px",
          height: "40px",
          opacity: 0,
          transition: "opacity 0.3s ease",
          pointerEvents: "none",
        //   background: 'black'
        }}
      >
        {/* Stars positioned in a circular path */}

          <LoadingStar
            style={{
              position: "absolute",
              transform: `rotate(0deg) translate(5px) rotate(0deg)`,
              height: 10,
              color: "#ffffffff",
              filter: "drop-shadow(0 0 3px rgba(255,255,255,0.6))",
            }}
          />
          <LoadingStar
            style={{
              position: "absolute",
              transform: `rotate(180deg) translate(5px) rotate(180deg)`,
              height:5,
              color: "#ffffffff",
              filter: "drop-shadow(0 0 3px rgba(255,255,255,0.6))",
            }}
          />

      </Box>

      {/* Link text */}
      <Typography
        className="linktxt"
        sx={{
          fontSize: "18px",
          fontFamily: "'Delight-Regular', sans-serif",
          color: "white",
          transition: "color 0.3s",
        }}
      >
        <Link color={'white'} underline="none"
        onClick={() => scrollToSection(href, sectionId)}
        sx={{ cursor: "pointer" }}
  >
          {label}
        </Link>
      </Typography>
    </Box>
  );
}
