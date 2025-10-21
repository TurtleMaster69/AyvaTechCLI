import SecondBackground from '../../backgrounds/second_backgound'
import { Box, Stack, Typography } from '@mui/material'
import ExpandableBox from '../../components/Boxes/expandableBox'
import ButtonPrimary from '../../components/Buttons/buttonPrimary'
import BorderLink from '../../components/Links/borderLink'
import { useTranslation } from 'react-i18next'


export default function HowWeWorkSection() {
    const { t } = useTranslation()
    const linkItems = [{
        title: t('home.how.link.1.title'),
        content: t('home.how.link.1.content'),
        link:'https://www.nber.org/papers/w31161'
    },
    {
        title: t('home.how.link.2.title'),
        content: t('home.how.link.2.content'),
        link:'https://www.prnewswire.com/news-releases/ai-delivers-1-36-return-for-every-1-invested-basware-study-reveals-302478184.html'
    },
    {
        title: t('home.how.link.3.title'),
        content: t('home.how.link.3.content'),
        link:'https://arxiv.org/abs/2302.06590'
    },
    {
        title: t('home.how.link.4.title'),
        content: t('home.how.link.4.content'),
        link:'https://www.tomshardware.com/tech-industry/artificial-intelligence/95-percent-of-generative-ai-implementations-in-enterprise-have-no-measurable-impact-on-p-and-l-says-mit-flawed-integration-key-reason-why-ai-projects-underperform'
    },
    {
        title: t('home.how.link.5.title'),
        content: t('home.how.link.5.content'),
        link:'https://www.bcg.com/press/26june2025-beyond-ai-adoption-full-potential'
    }
    ]
    const { i18n } = useTranslation();
    return (
        <SecondBackground>
            <Box
                id='howwework'
                sx={{
                    display: "flex",
                    gap: { xs: 0, md: 10 },
                    flexDirection: { xs: "column", md: 'row' },
                    alignItems: "start",
                    justifyContent: "center",
                    width: "85%",
                    my: { xs: 5, sm: 11.5 },
                }}
            >
                <Stack sx={{ display: { xs: 'none', md: "flex" }, flex: 1, justifyContent: "center", alignItems: "center", gap: 1.5, width: '50%' }}>
                    {linkItems.map((item, index) => (
                        <BorderLink
                            key={index}
                            title={item.title}
                            content={item.content}
                            type='external'
                            value={item.link}
                        />
                    ))}
                </Stack>
                <Stack
                    sx={{
                        width: { xs: '100%', md: '50%' },          // full width
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
                                display: 'inline-block',
                                textAlign: 'center',
                                WebkitBackgroundClip: 'text',
                                backgroundClip: 'text',
                                backgroundImage: "radial-gradient(ellipse at 50% -50%, rgba(255, 255, 255, 1) 50%, rgba(0, 17, 255, 1) 150%)",
                                backgroundRepeat: 'no-repeat',
                                WebkitTextFillColor: 'transparent',
                                textAlignLast: {xs:'center',sm:'left'},
                                whiteSpace: {xs:'wrap',sm:'nowrap'},
                                pb: 5,
                                '@media (min-width:1000px)': {
          fontSize: i18n.language === 'si' ? '3.2rem' : '5rem', pb:2
        },
                                '@media (min-width:1250px)': {
          fontSize: i18n.language === 'si' ? '4.0rem' : '5rem', pb:2
        },
                            }}
                        >
                            {t('home.how.title')}
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
                        <ExpandableBox autoExpanded={true} title={t('home.how.expandable.1.title')}>{t('home.how.expandable.1.description')}</ExpandableBox>
                        <ExpandableBox title={t('home.how.expandable.2.title')}>{t('home.how.expandable.2.description')}</ExpandableBox>
                        <ExpandableBox title={t('home.how.expandable.3.title')}>{t('home.how.expandable.3.description')}</ExpandableBox>
                        <ExpandableBox title={t('home.how.expandable.4.title')}>{t('home.how.expandable.4.description')}</ExpandableBox>
                        <ExpandableBox title={t('home.how.expandable.5.title')}>{t('home.how.expandable.5.description')}</ExpandableBox>
                    </Stack>

                    {/* Button */}
                    <Box sx={{ mt: 0,mb:8, textAlign: 'left', display: { xs: 'none', md: 'flex' } }}>
                        <ButtonPrimary>{t('button.contact')}</ButtonPrimary>
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
                            scrollSnapAlign: {xs:'center',sm:'center'},
                        },
                        maskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)',
                    }}
                >
                    {linkItems.map((item, index) => (
                        <Box key={index} sx={{
                            my: 3,
                            flex: '0 0 98%', // \U0001f448 makes each child take 80% of parent width
                            width: '98%',
                            maxWidth: 400,
                        }}>
                            <BorderLink
                                title={item.title}
                                content={item.content}
                                type='external'
                                value={item.link}
                            />
                        </Box>
                    ))}
                </Box>
                <Box sx={{ mt: 4, textAlign: 'left', display: { xs: 'flex', md: 'none' } }}>
                    <ButtonPrimary>{t('button.contact')}</ButtonPrimary>
                </Box>
            </Box>
        </SecondBackground>
    )
}
