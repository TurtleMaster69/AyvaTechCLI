import { Box, Typography } from '@mui/material';
import First_background from '../../backgrounds/first_background';
import Boxes from '../../components/Boxes/boxesWithIcons'
import { useTranslation } from 'react-i18next';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import EventNoteOutlinedIcon from '@mui/icons-material/EventNoteOutlined';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined';
import HandymanOutlinedIcon from '@mui/icons-material/HandymanOutlined';
export function WhereWeCanHelpSection() {



  const {t} = useTranslation()  
  const items = [
    {
      icon: (
        <GroupsOutlinedIcon
          sx={{
            fontSize: 32,
            "& path": { strokeWidth: 0.5, stroke: "#ffffff" },
          }}
        />
      ),
      title: t('home.where.cards.1.title'),
      description:t('home.where.cards.1.content')
    },
    {
      icon: (
        <AccountTreeOutlinedIcon
          sx={{
            fontSize: 32,
            "& path": { strokeWidth: 0.5, stroke: "#ffffff" },
          }}
        />
      ),
     title: t('home.where.cards.2.title'),
      description:t('home.where.cards.2.content')
    },
    {
      icon: (
        <EventNoteOutlinedIcon
          sx={{
            fontSize: 32,
            "& path": { strokeWidth: 0.5, stroke: "#ffffff" },
          }}
        />
      ),
     title: t('home.where.cards.3.title'),
      description:t('home.where.cards.3.content')
    },
    {
      icon: (
        <AddShoppingCartOutlinedIcon
          sx={{
            fontSize: 32,
            "& path": { strokeWidth: 0.5, stroke: "#ffffff" },
          }}
        />
      ),
     title: t('home.where.cards.4.title'),
      description:t('home.where.cards.4.content')
    },
    {
      icon: (
        <SmartToyOutlinedIcon
          sx={{
            fontSize: 32,
            "& path": { strokeWidth: 0.5, stroke: "#ffffff" },
          }}
        />
      ),
     title: t('home.where.cards.5.title'),
      description:t('home.where.cards.5.content')
    },
    {
      icon: (
        <HandymanOutlinedIcon
          sx={{
            fontSize: 32,
            "& path": { strokeWidth: 0.5, stroke: "#ffffff" },
          }}
        />
      ),
      title: t('home.where.cards.6.title'),
      description:t('home.where.cards.6.content')
    },
  ]; 
  return (
    <First_background>
      <Typography 
      variant='h2'
      sx={{
        textAlign: "center",
        mt: {xs:10,sm:25}
      }}>
        {t('home.where.title')}

      </Typography>

      <Box
  sx={{
    display: 'grid',
    width: '85%',
    maxWidth: 1440,
    my: 9,
    mb:{xs:10,sm:22},
     gap: 2, // space between cards
    gridTemplateColumns: {
      xs: '1fr', // 1 column on extra-small screens
      sm: 'repeat(2, 1fr)', // 2 columns on small screens
      md: 'repeat(3, 1fr)', // 3 columns on medium screens
      lg: 'repeat(3, 1fr)', // 4 columns on large screens
    },
  }}
>
  {items.map((item, index) => (
    <Boxes
      key={index}
      icon={item.icon}
      title={item.title}
      description={item.description}
    />
  ))}
</Box>


    </First_background>

  );
};

export default WhereWeCanHelpSection;
