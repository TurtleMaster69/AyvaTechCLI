import SecondBackground from '../../backgrounds/second_backgound'
import { Box, Stack, Typography} from '@mui/material'
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
    content: "of generated AI implementations\nshow no measurable P%L impact"
},
{
    title: "Only 36%",
    content: "of employees feel adequately trained\nto use AI tools at work"
}
]

export default function HowWeWorkSection() {
    return (
        <SecondBackground>
            <Box sx={{
                display: "flex",
                gap: {xs:0,md:10},
                flexDirection: { xs: "column", md: 'row' },
                alignItems: "start",
                justifyContent: "center",
                width: "85%",
                my: 11.5,
            }}
            >
                <Stack sx={{ display: { xs: 'none', md: "flex" }, flex: 1, justifyContent: "center", alignItems: "center", gap: 1.5,width:'50%'}}>
                    {linkItems.map((item, index) => (
                        <BorderLink
                            key={index}
                            title={item.title}
                            content={item.content}
                            type='external'
                            value='https://justinjackson.ca/words.html'
                        />
                    ))}
                </Stack>
                <Stack
                    sx={{
                        width: {xs:'100%',md:'50%'},          // full width
                        maxWidth: 1440,         // optional max width
                        mx: 'auto',             // center horizontally
                        flexDirection: 'column',
                        alignItems: 'stretch',  // stretch children full width
                        justifyContent: 'start',
                        mt: 4,
                        mb: 0,
                        gap: 3,                 // spacing between items
                    }}
                >
                    {/* Heading */}
                    
                    <Box>
                    <Typography
                        variant="h2"
                        sx={{
                            display:'inline-block',
                            textAlign: 'center',
                            WebkitBackgroundClip: 'text',
                            backgroundClip: 'text',
                            backgroundImage: "radial-gradient(ellipse at 50% -50%, rgba(255, 255, 255, 1) 50%, rgba(0, 17, 255, 1) 150%)",
                            backgroundRepeat: 'no-repeat',
                            WebkitTextFillColor: 'transparent',
                            textAlignLast:'left',
                            whiteSpace:'nowrap',
                            pb:5
                        }}
                    >
                        How We Work
                    </Typography>
                    </Box>

                    {/* Expandable Boxes */}
                    <Stack
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 2,       // spacing between boxes
                        }}
                    >
                        <ExpandableBox autoExpanded={true} title={"01\t\tFrom conversation to insight"}>
                            <Typography sx={{ fontFamily: "'Delight-Regular', Helvetica" }}>
                                This is the expanded content for Box 1.
                            </Typography>
                        </ExpandableBox>
                        <ExpandableBox title={"Box\t2"}>This is the expanded content for Box 2.</ExpandableBox>
                        <ExpandableBox title={"Box\t3"}>This is the expanded content for Box 3.</ExpandableBox>
                        <ExpandableBox title={"Box\t4"}>This is the expanded content for Box 4.</ExpandableBox>
                        <ExpandableBox title={"Box\t5"}>This is the expanded content for Box 5.</ExpandableBox>
                    </Stack>

                    {/* Button */}
                    <Box sx={{ mt: 4, textAlign: 'left',display:{xs:'none',md:'flex'} }}>
                        <ButtonPrimary>Book a free consultation</ButtonPrimary>
                    </Box>
                </Stack>

                <Box
                    sx={{
                        display: { xs: 'flex', md: 'none' },
                        gap: 1,
                        py: 1,
                        px: 3,
                        overflow: 'auto',
                        width: '100%',
                        scrollSnapType: 'x mandatory',
                        '& > *': {
                            scrollSnapAlign: 'center',
                        },
                        '::-webkit-scrollbar': { display: 'none' },
                        maskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)',
                    }}
                >
                    {linkItems.map((item, index) => (
                        <Box sx={{ py: 3 }}>
                            <BorderLink
                                key={index}
                                title={item.title}
                                content={item.content}
                                type='external'
                                value='https://justinjackson.ca/words.html'
                            />
                        </Box>
                    ))}
                </Box>
                                    <Box sx={{ mt: 4, textAlign: 'left', display:{xs:'flex',md:'none'}}}>
                        <ButtonPrimary>Book a free consultation</ButtonPrimary>
                    </Box>
            </Box>
        </SecondBackground>
    )
}
