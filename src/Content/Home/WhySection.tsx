import  { type ReactNode } from 'react'
import Background from '../../backgrounds/third_background'
import { Box, Typography } from '@mui/material'
import LeftBorderBox from '../../components/Boxes/leftBorderBox'
import LightbulbOutlineIcon from '@mui/icons-material/LightbulbOutline';
import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';

const chunkArray = (arr: Item[], size: number) => {
    const chunks = [];
    for (let i = 0; i < arr.length; i += size) {
        chunks.push(arr.slice(i, i + size));
    }
    return chunks;
};


class Item {
    icon!: ReactNode;        // make optional and flexible
    title!: string;       // make optional
    description!: string; 
}

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
        title: "Realworld knowhow, not theory",
        description:
            "We bring years of AI workshops and projects into practice. We train teams, craft strategy and build solutions",
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
];

export default function WhySection() {
    return (
        <Background id={'why-us-section'}>
            <Typography 
            variant='h2'
            sx={{
                textAlign: "center",
                mt: 25,
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                backgroundImage: "radial-gradient(ellipse at 50% -50%, rgba(255, 255, 255, 1) 60%, rgba(0, 17, 255, 1) 140%)",
                // optional, for larger spread
                backgroundRepeat: "no-repeat",
                WebkitTextFillColor: 'transparent',
            }}>
                Why AYVA Tech?

            </Typography>
            <Box
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 5,
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    mt: 9,
                }}
            >
                {chunkArray(items, 2).map((pair, rowIndex) => (
                    <Box
                        key={rowIndex}
                        sx={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "center",
                            gap: 0, // spacing between boxes in the row
                        }}
                    >
                        {pair.map((item, index) => (
                            <LeftBorderBox key={index} icon={item.icon} title={item.title} description={item.description} />
                        ))}
                    </Box>
                ))}
            </Box>
        </Background>
    )
}
