import React, { useState } from "react"
import Carousel from "react-material-ui-carousel"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import { JoinBanner } from "../../components/advertise/Ad"
import { Box, Button, Divider, Grid, Stack, Typography } from "@mui/material"
import Footer from "../../components/footer/Footer"
import { Link } from "react-router-dom"
import Navbar from "../../components/navbar/Navbar"
import { styled } from "@mui/material/styles"
import courses from '../../Mock_Data/course.json'


const CourseImage = styled("img")({
    width: "25rem",
    height: "16rem"
})

const CourseTitle = styled(Typography)({
    fontWeight: "bold"
})

const CourseDescription = styled(Typography)({
    marginBottom: "16px"
})

const LearnMoreButton = styled(Button)({
    borderColor: "#80d3c9",
    color: "#80d3c9",
    "&:hover": {
        backgroundColor: "#99dcd8",
        color: "#fff"
    }
})

const FeaturedC = () => {
    return (
        <>
            {/* //Featured Courses */}
            <Grid item xs={12} sx={{ padding: "2rem" }}>
                <Typography variant='h3' align='center' gutterBottom>
                    Featured Courses
                </Typography>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={4}>
                        <CourseImage
                            src='https://moralis.io/wp-content/uploads/2021/07/Moralis-Blogpost-JavaScript-Explained-07272021-V12.png'
                            alt='First Course'
                        />
                        <CourseTitle variant='h5'>JS 101</CourseTitle>
                        <CourseDescription variant='body1'>Learn JS by Saurabh</CourseDescription>
                        <LearnMoreButton variant='outlined'>Learn More</LearnMoreButton>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <CourseImage
                            src='https://eartheclipse.com/wp-content/uploads/2020/08/infinite-space-background-with-silhouette.jpg'
                            alt='Second Course'
                        />
                        <CourseTitle variant='h5'>Astronomy 101</CourseTitle>
                        <CourseDescription variant='body1'>Learn Astronomy by Saurabh</CourseDescription>
                        <LearnMoreButton variant='outlined'>Learn More</LearnMoreButton>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <CourseImage
                            src='https://thumbs.dreamstime.com/b/infographic-showing-economics-trends-39390289.jpg'
                            alt='Third Course'
                        />
                        <CourseTitle variant='h5'>Economics 101</CourseTitle>
                        <CourseDescription variant='body1'>Learn Economics by Saurabh</CourseDescription>
                        <LearnMoreButton variant='outlined'>Learn More</LearnMoreButton>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default FeaturedC;