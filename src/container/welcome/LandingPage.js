import React from 'react';
import BackWrapper from '../../components/backWrapper/BackWrapper';
import menuList from './menuList';
import { JoinBanner } from '../../components/advertise/Ad';
import img1 from '../../components/atoms/assets/img10s.svg';
import img2 from '../../components/atoms/assets/img9s.svg';
import img3 from '../../components/atoms/assets/img5s.svg';
import img4 from '../../components/atoms/assets/img7s.svg';
import img5 from '../../components/atoms/assets/img6s.svg';
import img6 from '../../components/atoms/assets/img2t.svg';
import { Box, Button, Divider, Grid, Stack, Typography } from '@mui/material';
import Footer from '../../components/footer/Footer';

const LandingPage = () => {
    return (
        <BackWrapper menuList={menuList}>

            <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-around"
                height="14vh"
                width="100%"
                bgcolor="third.main"
                p={2}
                spacing={2}
            >
            <Typography variant='h3' color="secondary.main"> Welcome to VidyaVault!</Typography>
            <Box>
                <Button variant="contained" color='secondary' sx={{marginRight: 2}}>
                    <Typography variant='h6'>click here to register</Typography>
                </Button>

                <Button variant="contained" color='secondary'>
                    <Typography variant='h6'>Log in</Typography>
                </Button>
                </Box>
            </Stack>


            <Box mt={2} mb={2}>
                <Stack direction="row" flexWrap="wrap" alignItems="center" justifyContent="space-around">
                    <Box sx={{ width: "400px", height: "400px", margin: "2rem", textAlign: "center" }}>
                        <Box sx={{
                            height: "100%",
                            width: "100%",
                        }}>
                            <img src={img2} height="400px" width="400px" />
                        </Box>
                    </Box>

                    <Box width="50%" m={4} textAlign="center">
                        <Typography variant='h4' color="third.dark">Full stack web developer</Typography>
                        <Typography variant='h6'>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the industry's standard dummy
                            text ever since the 1500s, when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has survived not only five centuries,
                            but also the leap into electronic typesetting, remaining essentially unchanged.
                            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with desktop publishing software like Aldus PageMaker including
                            versions of Lorem Ipsum.
                        </Typography>
                    </Box>

                </Stack>
            </Box>

            <hr></hr>

            <Box mt={2} mb={2}>
                <Stack direction="row" flexWrap="wrap-reverse" alignItems="center" justifyContent="space-around">

                    <Box m={4} width="50%" textAlign="center">
                        <Typography variant='h4' color="third.dark">Full stack web developer</Typography>
                        <Typography variant='h6'>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the industry's standard dummy
                            text ever since the 1500s, when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has survived not only five centuries,
                            but also the leap into electronic typesetting, remaining essentially unchanged.
                            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with desktop publishing software like Aldus PageMaker including
                            versions of Lorem Ipsum.
                        </Typography>
                    </Box>

                    <Box sx={{ width: "400px", height: "400px", margin: "2rem", textAlign: "center" }}>
                        <Box sx={{
                            height: "100%",
                            width: "100%",
                        }}>
                            <img src={img3} height="400px" width="400px" />
                        </Box>
                    </Box>

                </Stack>
            </Box>

            <Box mt={2} mb={2} sx={{ bgcolor: "secondary.light" }}>
                <Stack direction="row" flexWrap="wrap" alignItems="center" justifyContent="space-around">
                    <Box sx={{ width: "400px", height: "400px", margin: "2rem", textAlign: "center" }}>
                        <Box sx={{
                            height: "100%",
                            width: "100%",
                        }}>
                            <img src={img6} height="400px" width="400px" />
                        </Box>
                    </Box>

                    <Box width="50%" m={4} textAlign="center">
                        <Typography variant='h4' color="third.dark">Full stack web developer</Typography>
                        <Typography variant='h6' color="primary.main">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the industry's standard dummy
                            text ever since the 1500s, when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has survived not only five centuries,
                            but also the leap into electronic typesetting, remaining essentially unchanged.
                            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with desktop publishing software like Aldus PageMaker including
                            versions of Lorem Ipsum.
                        </Typography>
                    </Box>

                </Stack>
            </Box>

            <Box mt={2} mb={2}>
                <Stack direction="row" flexWrap="wrap-reverse" alignItems="center" justifyContent="space-around">

                    <Box m={4} width="50%" textAlign="center">
                        <Typography variant='h4' color="third.dark">Full stack web developer</Typography>
                        <Typography variant='h6'>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the industry's standard dummy
                            text ever since the 1500s, when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has survived not only five centuries,
                            but also the leap into electronic typesetting, remaining essentially unchanged.
                            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with desktop publishing software like Aldus PageMaker including
                            versions of Lorem Ipsum.
                        </Typography>
                    </Box>

                    <Box sx={{ width: "400px", height: "400px", margin: "2rem", textAlign: "center" }}>
                        <Box sx={{
                            height: "100%",
                            width: "100%",
                        }}>
                            <img src={img5} height="400px" width="400px" />
                        </Box>
                    </Box>

                </Stack>
            </Box>

            <hr></hr>

            <Box mt={2} mb={2}>
                <Stack direction="row" flexWrap="wrap" alignItems="center" justifyContent="space-around">
                    <Box sx={{ width: "400px", height: "400px", margin: "2rem", textAlign: "center" }}>
                        <Box sx={{
                            height: "100%",
                            width: "100%",
                        }}>
                            <img src={img1} height="400px" width="400px" />
                        </Box>
                    </Box>

                    <Box width="50%" m={4} textAlign="center">
                        <Typography variant='h4' color="third.dark">Full stack web developer</Typography>
                        <Typography variant='h6'>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the industry's standard dummy
                            text ever since the 1500s, when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has survived not only five centuries,
                            but also the leap into electronic typesetting, remaining essentially unchanged.
                            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with desktop publishing software like Aldus PageMaker including
                            versions of Lorem Ipsum.
                        </Typography>
                    </Box>

                </Stack>
            </Box>

            <JoinBanner />
            <Footer />
        </BackWrapper>
    )
}

export default LandingPage;