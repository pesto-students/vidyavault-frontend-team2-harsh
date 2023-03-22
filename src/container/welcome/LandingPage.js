import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { JoinBanner } from '../../components/advertise/Ad';
import logo from '../../components/atoms/assets/darklogo.png';
import { Box, Button, Divider, Grid, Stack, Typography } from '@mui/material';
import Footer from '../../components/footer/Footer';
import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import HomeFeatures from '../../components/section/HomeFeatures';
import CreatoresCategory from '../../components/section/CreatoresCategory';
import FeaturedC from '../../components/section/FeaturedC';

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
            <Box bgcolor="primary.main" width="100%">
                <Navbar />
                <Box bgcolor="secondary.main" width="100%" textAlign="center" height="40vh"  pt="8vh">
                    <Typography color="third.main" variant='h3' m={1}>|| विद्याधनं  सर्व धनं प्रधानम् ||</Typography>
                    <Typography color="primary.main" variant='h4'> (Vidya Dhanam Sarva Dhana Pradhanam)  </Typography>
                    <Typography color="primary.main" variant='h4'>-- Knowledge is the best and the most important wealth among all wealths --</Typography>
                </Box>
                <HomeFeatures />
                {/* <FeaturedC /> */}
                <JoinBanner />
                {/* <CreatoresCategory /> */}
                <Footer />
            </Box>
        </>
    )
}

export default LandingPage;