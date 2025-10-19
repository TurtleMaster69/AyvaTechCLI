import React from 'react';
import { Box} from '@mui/material';
import { keyframes, styled } from '@mui/system';
import Icon1  from '../assets/svg/Podjetja/Layer_1-1.svg'
import Icon2  from '../assets/svg/Podjetja/Layer_1-2.svg'
import Icon3  from '../assets/svg/Podjetja/Layer_1-3.svg'
import Icon4  from '../assets/svg/Podjetja/Layer_1-4.svg'
import Icon5  from '../assets/svg/Podjetja/Layer_1-5.svg'
import Icon6  from '../assets/svg/Podjetja/Layer_1-6.svg'
import Icon7  from '../assets/svg/Podjetja/Layer_1-7.svg'
import Icon8  from '../assets/svg/Podjetja/Layer_1-8.svg'
import Icon9  from '../assets/svg/Podjetja/Layer_1-9.svg'
import Icon10  from '../assets/svg/Podjetja/Layer_1-10.svg'
import Icon11 from '../assets/svg/Podjetja/Layer_1-11.svg'
import Icon12  from '../assets/svg/Podjetja/Layer_1-12.svg'
import Icon13  from '../assets/svg/Podjetja/Layer_1.svg'
import Icon14  from '../assets/svg/Podjetja/logo.svg'
import Icon15  from '../assets/svg/Podjetja/Unicredit Logo 18.svg'
import Icon16  from '../assets/svg/Podjetja/Layer_1-10.svg'



// Sample SVG icons (you can replace these with your own SVGs)


// Styled component for the conveyor belt
const ConveyorContainer = styled(Box)({
  display: 'flex',
  width: '80%',
  height: '100%',
  overflow: 'hidden',
  justifyContent: 'center',
  alignItems: 'center',
  maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
  WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
});

const scrollLoop = keyframes`
  from { transform: translateX(-183%); }
  to { transform: translateX(-50%); }
`;

const scrollLoopMobile = keyframes`
  from { transform: translateX(-316.6%); }
  to { transform: translateX(-50%); }
`;
const scrollLoop600 = keyframes`
  from { transform: translateX(-450%); }
  to { transform: translateX(-50%); }
`;

const ConveyorBeltWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  opacity: 0.6,
  width: "100%",
  animation: `${scrollLoop} 15s linear infinite`,

  [theme.breakpoints.between('sm',"md")]: {
    animation: `${scrollLoopMobile} 15s linear infinite`,
  },

  [theme.breakpoints.down("sm")]: {
    animation: `${scrollLoop600} 15s linear infinite`,
  },
}));

const IconWrapper = styled(Box)({
  flexShrink: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '6.3333%',    //25% is 4 elements inside and -2% so value is 23%  (100/st.elementov )-2
  height: 'auto',
  margin: '0 1%',  //this is 1% each side
  '@media (max-width:1000px)': {
        width: '14.6666%',
      },
      '@media (max-width:600px)': {
        width: '23%',
      },
});

export function Conveyer() {
  const icons = [
  Icon1,
  Icon2,
  Icon3,
  Icon4,
  Icon5,
  Icon6,
  Icon7,
  Icon8,
  Icon9,
  Icon10,
  Icon11,
  Icon12,
  Icon13,
  Icon14,
  Icon15,
  Icon16,
];
  console.log(icons[0])
  const doubledIcons = [...icons, ...icons, ...icons, ...icons, ...icons, ...icons, ...icons, ...icons, ...icons, ...icons];
  return (
    <ConveyorContainer >
      <ConveyorBeltWrapper>
        {doubledIcons.map((icon, index) => (
          <IconWrapper key={index}>
              <img src={icon} width={'100%'}/>     
          </IconWrapper>
        ))}
      </ConveyorBeltWrapper>
    </ConveyorContainer>
  );
};

export default Conveyer;