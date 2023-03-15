import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { JoinBanner } from '../../components/advertise/Ad';
import img1 from '../../components/atoms/assets/img10s.svg';
import img2 from '../../components/atoms/assets/img9s.svg';
import img3 from '../../components/atoms/assets/img5s.svg';
import img4 from '../../components/atoms/assets/img7s.svg';
import img5 from '../../components/atoms/assets/img6s.svg';
import img6 from '../../components/atoms/assets/img2t.svg';
import logo from '../../components/atoms/assets/darklogo.png';
import { Box, Button, Divider, Grid, Stack, Typography } from '@mui/material';
import Footer from '../../components/footer/Footer';
import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';

// const styles = {
//     section: {
//         backgroundColor: "#20262e",
//         color: "#f2f2f2",
//         width: "100%",
//         marginTop: "16vh",
//         height: "50vh",
//     },
//     sectionActive: {
//         backgroundColor: "#80d3c9",
//         color: "#20262e",
//         width: "100%",
//         marginTop: "16vh",
//         height: "50vh",
//     }
// }

const LandingPage = () => {
    // const [nav, setNav] = useState(false);

    // const changeBG = () => {
    //     if (window.scrollY >= 5) {
    //         setNav(true);
    //     } else {
    //         setNav(false);
    //     }
    // }
    // window.addEventListener("scroll", changeBG);

    return (
        <>
            {/* <Box sx={{ top: 0, zIndex: 100, position: "fixed", width: "100%" }}>
                <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    bgcolor="secondary.main"
                    p={2}
                    spacing={2}
                >
                    <Box sx={{ width: "110px", marginLeft: 3 }}>
                        <img src={logo} height="80px" width="80px" />
                        <Typography variant='h6' color="third.main" ml={1}>VidyaVault</Typography>
                    </Box>

                    <Box>

                        <Link to="/">
                            <Button
                                color="primary"
                                size="large"
                                variant="text"
                            ><Typography variant='h6' color="primary.main">Home</Typography>
                            </Button>
                        </Link>

                        <Link to="/org">
                            <Button
                                color="primary"
                                size="large"
                                variant="text"
                            ><Typography variant='h6' color="primary.main" ml={2}>Organization</Typography>
                            </Button>
                        </Link>

                        <Link to="/about">
                            <Button
                                color="primary"
                                size="large"
                                variant="text"
                            ><Typography variant='h6' color="primary.main" ml={2}>About</Typography>
                            </Button>
                        </Link>

                        <Link to="/signup">
                            <Button
                                color="third"
                                variant="contained"
                                size="large"
                            ><Typography variant='h6' color="secondary.main" mr={2}>Sign up</Typography>
                            </Button>
                        </Link>

                        <Link to="/signin">
                            <Button
                                color="third"
                                variant="contained"
                                size="large"
                            ><Typography variant='h6' color="secondary.main" mr={2}>Sign in</Typography>
                            </Button>
                        </Link>

                    </Box>
                </Stack>

            </Box> */}
            <Navbar />

            <Box>
                {/* <div style={nav ? styles.sectionActive : styles.section}> */}
                <Box sx={{ width: "100%", height: "35vh", bgcolor: "third.main" }}>
                    <Stack
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                        spacing={1}
                    >
                        <Typography variant='h3'>Why?</Typography>
                        <Typography variant='h5'>Something</Typography>
                        <Typography variant='h5'>Something</Typography>
                        <Typography variant='h5'>Something</Typography>
                        <Typography variant='h5'>Something</Typography>
                    </Stack>
                </Box>
                {/* </div> */}


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

                {/* <Box mt={2} mb={2}>
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
                </Box> */}
            </Box>

            <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-around"
                m={1}
            >
                <Card sx={{ maxWidth: 300 }}>
                    <CardMedia
                        sx={{ height: 220 }}
                        image="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="
                        title="green iguana"
                    />
                    <CardContent sx={{ bgcolor: "#d4af37" }}>
                        <Typography gutterBottom variant="h5" component="div">
                            Creator name
                        </Typography>
                        <Typography gutterBottom variant="h6" component="div">
                            Category: Gold
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Creator with maximum number of courses uploaded
                            in last 6 months.
                        </Typography>
                    </CardContent>
                </Card>

                <Card sx={{ maxWidth: 300 }}>
                    <CardMedia
                        sx={{ height: 220 }}
                        image="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="
                        title="green iguana"
                    />
                    <CardContent sx={{ bgcolor: "#c0c0c0" }}>
                        <Typography gutterBottom variant="h5" component="div">
                            Creator name
                        </Typography>
                        <Typography gutterBottom variant="h6" component="div">
                            Category: Silver
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Creator on second rank... maximum number of courses uploaded
                            in last 6 months after gold.
                        </Typography>
                    </CardContent>
                </Card>

                <Card sx={{ maxWidth: 300 }}>
                    <CardMedia
                        sx={{ height: 220 }}
                        image="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="
                        title="Avatar"
                    />
                    <CardContent sx={{ bgcolor: "#cd7f32" }}>
                        <Typography gutterBottom variant="h5" component="div">
                            Creator name
                        </Typography>
                        <Typography gutterBottom variant="h6" component="div">
                            Category: Bronze
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Creator on third rank... maximum number of courses uploaded
                            in last 6 months after silver.
                        </Typography>
                    </CardContent>
                </Card>
            </Stack>

            <JoinBanner />
            <Footer />
        </>
    )
}

export default LandingPage;