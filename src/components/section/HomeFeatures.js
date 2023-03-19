import React, { useState } from "react"
import Carousel from "react-material-ui-carousel"
import img1 from "../../components/atoms/assets/img10s.svg"
import img2 from "../../components/atoms/assets/img9s.svg"
import img3 from "../../components/atoms/assets/img5s.svg"
import img4 from "../../components/atoms/assets/img7s.svg"
import img5 from "../../components/atoms/assets/img6s.svg"
import img6 from "../../components/atoms/assets/img2t.svg"
import logo from "../../components/atoms/assets/darklogo.png"
import { Box, Button, Divider, Grid, Stack, Typography } from "@mui/material"

const HomeFeatures = () => {
    return (
        <Box>
            <Carousel index='2'>
                <Stack direction='row' flexWrap='wrap' alignItems='center' justifyContent='space-around'>
                    <Box sx={{ width: "400px", height: "400px", margin: "2rem", textAlign: "center" }}>
                        <Box
                            sx={{
                                height: "100%",
                                width: "100%"
                            }}
                        >
                            <img src={img2} height='400px' width='400px' />
                        </Box>
                    </Box>

                    <Box width='50%' m={4} textAlign='left'>
                        <Typography sx={{ marginBottom: "2rem" }} variant='h3' color='third.dark'>
                            Free Resources
                        </Typography>
                        <Typography sx={{ lineHeight: "2rem", letterSpacing: "0.1rem" }} variant='body1'>
                            We offer a range of free resources, including webinars, guides, and tutorials, to help you create and
                            sell successful courses on our platform.
                        </Typography>
                    </Box>
                </Stack>

                <Stack direction='row' alignItems='center' justifyContent='space-around'>
                    <Box m={4} width='50%' textAlign='left'>
                        <Typography sx={{ marginBottom: "2rem" }} variant='h3' color='third.dark'>
                            Flexible Learning
                        </Typography>
                        <Typography sx={{ lineHeight: "2rem", letterSpacing: "0.1rem" }} variant='body1'>
                            We offer flexible learning options, including online and in-person classes, to accommodate your busy
                            schedule.
                        </Typography>
                    </Box>

                    <Box sx={{ width: "400px", height: "400px", margin: "2rem", textAlign: "center" }}>
                        <Box
                            sx={{
                                height: "100%",
                                width: "100%"
                            }}
                        >
                            <img src={img3} height='400px' width='400px' />
                        </Box>
                    </Box>
                </Stack>

                <Stack
                    bgcolor='secondary.light'
                    direction='row'
                    flexWrap='wrap'
                    alignItems='center'
                    justifyContent='space-around'
                >
                    <Box sx={{ width: "400px", height: "400px", margin: "2rem", textAlign: "center" }}>
                        <Box
                            sx={{
                                height: "100%",
                                width: "100%"
                            }}
                        >
                            <img src={img6} height='400px' width='400px' />
                        </Box>
                    </Box>

                    <Box width='50%' m={4} textAlign='left'>
                        <Typography sx={{ marginBottom: "2rem" }} variant='h3' color='third.dark'>
                            Learn anything, anytime, anywhere
                        </Typography>
                        <Typography sx={{ lineHeight: "2rem", letterSpacing: "0.1rem" }} variant='body1'>
                            Our platform is available worldwide, which means you can create and sell courses to students from all
                            over the globe.
                        </Typography>
                    </Box>
                </Stack>

                <Stack direction='row' flexWrap='wrap-reverse' alignItems='center' justifyContent='space-around'>
                    <Box m={4} width='50%' textAlign='left'>
                        <Typography sx={{ marginBottom: "2rem" }} variant='h3' color='third.dark'>
                            Customizable Course Creation
                        </Typography>
                        <Typography sx={{ lineHeight: "2rem", letterSpacing: "0.1rem" }} variant='body1'>
                            Our platform allows you to create and customize your courses, giving you complete control over your
                            content and how it's presented to students.
                        </Typography>
                    </Box>

                    <Box sx={{ width: "400px", height: "400px", margin: "2rem", textAlign: "center" }}>
                        <Box
                            sx={{
                                height: "100%",
                                width: "100%"
                            }}
                        >
                            <img src={img1} height='400px' width='400px' />
                        </Box>
                    </Box>
                </Stack>
            </Carousel>
        </Box>
    )
}

export default HomeFeatures;