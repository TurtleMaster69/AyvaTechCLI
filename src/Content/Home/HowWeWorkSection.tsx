import SecondBackground from '../../backgrounds/second_backgound'
import { Box, Stack, Typography } from '@mui/material'
import ExpandableBox from '../../components/Boxes/expandableBox'
import ButtonPrimary from '../../components/Buttons/buttonPrimary'
import BorderLink from '../../components/Links/borderLink'

const linkItems = [{
    title: "10-40%",
    content: "productivity uplift in routine tasks"
},
{
   title: "$1.36 return",
    content: "for every $1 invested over three years" 
},
{
   title: "Up to 2x",
    content: "faster project delivery" 
},
{
   title: "95%",
    content: "of generated AI implementations show no measurable P%L impact" 
},
{
   title: "Only 36%",
    content: "of employees feel adequately trained to use AI tools at work" 
}
]

export default function HowWeWorkSection() {
    return (
        <SecondBackground>
            <Box sx={{
                display: "flex",
                gap: 0,
                alignItems: "start",
                justifyContent: "center",
                width: "100%",
                mt: 9,
            }}
            >
                <Stack sx={{ display: "flex", flex: 1, justifyContent: "center", alignItems: "center", gap: 1.5 }}>
                    {linkItems.map((item, index) => (
                              <BorderLink
                                key={index}
                                title={item.title}
                                content={item.content}
                              />
                            ))}
                </Stack>
                <Stack sx={{ display: "flex", flex: 1, alignItems: "start", justifyContent: "start" }}>
                    <Typography 
                    variant='h2'
                    sx={{
                        textAlign: "center",
                        mt: 4,
                        WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    backgroundImage: "linear-gradient(45deg, rgba(0, 17, 255, 1) -190%, rgba(255, 255, 255, 1) 100%)",
                    backgroundRepeat: "no-repeat",
                    WebkitTextFillColor: 'transparent',
                    }}>
                        How We Work
                    </Typography>
                    <Box sx={{ mt: 5, mb: 5 }}>
                        <ExpandableBox title={"01\tFrom conversation to insight"}>
                            <Typography sx={{ fontFamily: "'Delight-Regular', Helvetica", }}>This is the expanded content for Box 1.</Typography>
                        </ExpandableBox>
                        <ExpandableBox title="Box 1">
                            This is the expanded content for Box 1.
                        </ExpandableBox>
                        <ExpandableBox title="Box 1">
                            This is the expanded content for Box 1.
                        </ExpandableBox>
                        <ExpandableBox title="Box 1">
                            This is the expanded content for Box 1.
                        </ExpandableBox>
                        <ExpandableBox title="Box 1">
                            This is the expanded content for Box 1.
                        </ExpandableBox>
                    </Box>
                    <ButtonPrimary>
                        Book a free consultation
                    </ButtonPrimary>
                </Stack>
            </Box>
        </SecondBackground>
    )
}
