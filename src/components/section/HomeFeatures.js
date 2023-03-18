import { Box, Stack, Typography } from '@mui/material';
import img1 from '../../components/atoms/assets/img10s.svg';
import img2 from '../../components/atoms/assets/img9s.svg';
import img3 from '../../components/atoms/assets/img5s.svg';
import img4 from '../../components/atoms/assets/img7s.svg';
import img5 from '../../components/atoms/assets/img6s.svg';
import img6 from '../../components/atoms/assets/img2t.svg';
import React from 'react'

const HomeFeatures = () => {
    return (
        <>
            <Box sx={{ width: "100%", height: "fit-content", overflowX: "auto" }}>
                <Stack direction="row">


                    <Box bgcolor="primary.light" m={2} borderRadius={3}>
                        <Stack direction="row" flexWrap="wrap" alignItems="center" justifyContent="space-around">
                            <Box sx={{ width: "350px", height: "350px", margin: "1rem", textAlign: "center" }}>
                                <Box sx={{
                                    height: "100%",
                                    width: "100%",
                                }}>
                                    <img src={img2} height="340px" width="340px" />
                                </Box>
                            </Box>
                            <Box width="100%" m={1} textAlign="center">
                                <Typography variant='h4' color='third.dark'>
                                    Learning is a lifelong process
                                </Typography>
                                <Typography variant='h6'>And we are with you in that journey!</Typography>
                            </Box>
                        </Stack>
                    </Box >

                    <Box bgcolor="primary.light" m={2} borderRadius={3}>
                        <Stack direction="row" flexWrap="wrap-reverse" alignItems="center" justifyContent="space-around">
                            <Box m={1} width="100%" textAlign="center">
                                <Typography variant='h4' color='third.dark'>
                                    Organazing is an art, which our teachers are masters at
                                </Typography>
                                <Typography variant='h6'>Create/Join Organization!</Typography>
                            </Box>
                            <Box sx={{ width: "350px", height: "350px", margin: "1rem", textAlign: "center" }}>
                                <Box sx={{
                                    height: "100%",
                                    width: "100%",
                                }}>
                                    <img src={img3} height="340px" width="340px" />
                                </Box>
                            </Box>
                        </Stack>
                    </Box>



                    <Box bgcolor="secondary.main" m={2} borderRadius={3}>
                        <Stack direction="row" flexWrap="wrap" alignItems="center" justifyContent="space-around">
                            <Box sx={{ width: "350px", height: "350px", margin: "1rem", textAlign: "center" }}>
                                <Box sx={{
                                    height: "100%",
                                    width: "100%",
                                }}>
                                    <img src={img6} height="340px" width="340px" />
                                </Box>
                            </Box>

                            <Box width="100%" m={1} textAlign="center">
                                <Typography variant='h4' color='third.dark'>
                                    Learn anything, anytime, anywhere
                                </Typography>
                                <Typography color="primary.main" variant='h6'>Services accessible wherever you are!</Typography>
                            </Box>

                        </Stack>
                    </Box>



                    <Box bgcolor="primary.light" m={2} borderRadius={3}>
                        <Stack direction="row" flexWrap="wrap-reverse" alignItems="center" justifyContent="space-around">

                            <Box m={1} width="100%" textAlign="center">
                                <Typography variant='h4' color='third.dark'>
                                    Learn anything, anytime, anywhere
                                </Typography>
                                <Typography variant='h6'>Services accessible wherever you are!</Typography>
                            </Box>

                            <Box sx={{ width: "350px", height: "350px", margin: "1rem", textAlign: "center" }}>
                                <Box sx={{
                                    height: "100%",
                                    width: "100%",
                                }}>
                                    <img src={img5} height="340px" width="340px"/>
                                </Box>
                            </Box>

                        </Stack>
                    </Box>

                    <Box bgcolor="primary.light" m={2} borderRadius={3}>
                        <Stack direction="row" flexWrap="wrap" alignItems="center" justifyContent="space-around">
                            <Box sx={{ width: "350px", height: "350px", margin: "1rem", textAlign: "center" }}>
                                <Box sx={{
                                    height: "100%",
                                    width: "100%",
                                }}>
                                    <img src={img1} height="340px" width="340px" />
                                </Box>
                            </Box>

                            <Box width="100%" m={1} textAlign="center">
                                <Typography variant='h4' color='third.dark'>
                                    Learn anything, anytime, anywhere
                                </Typography>
                                <Typography variant='h6'>Services accessible wherever you are!</Typography>
                            </Box>
                        </Stack>
                    </Box>

                </Stack>
            </Box>
        </>
    )
}

export default HomeFeatures;