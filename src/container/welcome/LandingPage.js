import React, { useState } from 'react';
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
            <HomeFeatures />
            <FeaturedC />
            <JoinBanner />
            <CreatoresCategory />
            <Footer />
            </Box>
        </>
    )
}

export default LandingPage;