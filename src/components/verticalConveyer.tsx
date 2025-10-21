import { Box } from "@mui/material";
import { keyframes, styled } from '@mui/system';



// Sample SVG icons (you can replace these with your own SVGs)


// Styled component for the conveyor belt
const ConveyorContainer = styled(Box)({
  display: 'flex',
  width: '80%',
  height: '100%',
  overflow: 'hidden',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius:20,
  maskImage: 'linear-gradient(to bottom, transparent 0%, black 35%, black 70%, transparent 100%)',
  WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 35%, black 70%, transparent 100%)',
});
const ConveyorContainer1 = styled(Box)({
  display: 'flex',
  width: '80%',
  height: '100%',
  overflow: 'hidden',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius:20,
  maskImage: 'linear-gradient(to bottom, transparent 5%, black 35%, black 70%, transparent 98%)',
  WebkitMaskImage: 'linear-gradient(to bottom, transparent 5%, black 35%, black 70%, transparent 98%)',
});
//100+(nevidne slike/vidne slike)
const scrollLoop = keyframes` 
  from { transform: translateY(-150%); }  
  to { transform: translateY(-50%); }
`;
const scrollLoop1 = keyframes`
  from { transform: translateY(-130%); }
  to { transform: translateY(-30%); }
`;

const ConveyorBeltWrapper = styled(Box)(() => ({
  display: "flex",
  width: "100%",
  height:'100%',
  flexDirection:'column',
  gap:'1%',
  animation: `${scrollLoop} 10s linear infinite`,

}));
const ConveyorBeltWrapper1 = styled(Box)(() => ({
  display: "flex",
  width: "100%",
  height:'100%',
  flexDirection:'column',
  gap:'1%',
  animation: `${scrollLoop1} 10s linear infinite`,


}));

const IconWrapper = styled(Box)({
  flexShrink: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',  
  height: '32.333%',  // (100/st.slik)-1 
  overflow:'hidden',
  borderRadius:10,  
});

interface images {
  allImages: string[][]
}

const StyledImage = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',   // or "contain"
  objectPosition: 'center',
});

export default function VerticalConveyor({ allImages }: images) {

  // Duplicate images for smooth infinite loop
  const images1 = [...allImages[0], ...allImages[0], ...allImages[0], ...allImages[0]];
  const images2 = [...allImages[1], ...allImages[1], ...allImages[1], ...allImages[1]];
  return (
    <Box
      sx={{       // total container width
        height: '100%',
        width: '100%',     // visible area // hide images at top/bottom
        position: "relative",
        display: "flex",
        justifyContent: "center",
        flexDirection: 'row',
        gap: 2,
      }}
    >
          <ConveyorContainer >
      <ConveyorBeltWrapper>
        {images1.map((icon,index) => (
          <IconWrapper key={index}>
              <StyledImage src={icon} alt="icon" />
          </IconWrapper>
        ))}
      </ConveyorBeltWrapper>
    </ConveyorContainer>
          <ConveyorContainer1 >
      <ConveyorBeltWrapper1>
        {images2.map((icon,index) => (
          <IconWrapper key={index}>
              <StyledImage src={icon} alt="icon" />
          </IconWrapper>
        ))}
      </ConveyorBeltWrapper1>
    </ConveyorContainer1>
    </Box>
  );
}
