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
          display: "inline-flex",
          flexWrap: "wrap",
          gap: 3,
          alignItems: "flex-start",
          justifyContent: "center",
          width: "100%",
          mt: 9,
        }}
      >

        {/* Card 1 */}
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
