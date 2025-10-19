import { Box, Typography } from '@mui/material';
import First_background from '../../backgrounds/first_background';
import LightbulbOutlineIcon from '@mui/icons-material/LightbulbOutline';
import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import Boxes from '../../components/Boxes/boxesWithIcons'
export function WhereWeCanHelpSection() {

  const items = [
    {
      icon: (
        <LightbulbOutlineIcon
          sx={{
            fontSize: 32,
            "& path": { strokeWidth: 0.5, stroke: "#ffffff" },
          }}
        />
      ),
      title: "From routine to efficiency",
      description:
        "Reports, data transfers, calendars, reminders. Hours of work become a single click—without errors or wasted time.",
    },
    {
      icon: (
        <BoltOutlinedIcon
          sx={{
            fontSize: 32,
            "& path": { strokeWidth: 0.5, stroke: "#ffffff" },
          }}
        />
      ),
      title: "Power and precision",
      description:
        "Automation with real impact—streamlined processes, instant feedback, and measurable results.",
    },
    {
      icon: (
        <TimelineOutlinedIcon
          sx={{
            fontSize: 32,
            "& path": { strokeWidth: 0.5, stroke: "#ffffff" },
          }}
        />
      ),
      title: "Clear insights",
      description:
        "Visualize data effortlessly, stay ahead with actionable metrics, and drive smarter decisions every day.",
    },
    {
      icon: (
        <LightbulbOutlineIcon
          sx={{
            fontSize: 32,
            "& path": { strokeWidth: 0.5, stroke: "#ffffff" },
          }}
        />
      ),
      title: "From routine to efficiency",
      description:
        "Reports, data transfers, calendars, reminders. Hours of work become a single click—without errors or wasted time.",
    },
    {
      icon: (
        <BoltOutlinedIcon
          sx={{
            fontSize: 32,
            "& path": { strokeWidth: 0.5, stroke: "#ffffff" },
          }}
        />
      ),
      title: "Power and precision",
      description:
        "Automation with real impact—streamlined processes, instant feedback, and measurable results.",
    },
    {
      icon: (
        <TimelineOutlinedIcon
          sx={{
            fontSize: 32,
            "& path": { strokeWidth: 0.5, stroke: "#ffffff" },
          }}
        />
      ),
      title: "Clear insights",
      description:
        "Visualize data effortlessly, stay ahead with actionable metrics, and drive smarter decisions every day.",
    },
  ];

  return (
    <First_background>
      <Typography 
      variant='h2'
      sx={{
        textAlign: "center",
        mt: 25
      }}>
        Where We Can Help

      </Typography>

      <Box
  sx={{
    display: 'grid',
    width: '85%',
    maxWidth: 1440,
    my: 9,
    mb:22,
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
