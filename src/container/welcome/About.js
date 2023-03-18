import React from 'react'
import { Box, Grid } from '@mui/material';
import Saurabh from '../../components/atoms/assets/Saurabh.webp';
import abhi from '../../components/atoms/assets/abhi.jpg';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';

const About = () => {
  return (
    <>
    <Navbar />
      {/* <Box textAlign="center" width="100%"  mt="10vh">
        <Typography variant='h3'>Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard dummy
          text ever since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </Typography>
      </Box> */}

      {/* <Typography variant='h3' color="third.main" mt={5}>"THE JOURNY OF A THOUSAND MILES BEGINS WITH SINGLE STEP"</Typography> */}

      <Stack direction="column">

        <Box mt={2} mb={2}>
          <Stack direction="row" flexWrap="wrap" alignItems="center" justifyContent="space-around">
            <Box sx={{ width: "400px", height: "400px", margin: "2rem", textAlign: "center" }}>
              <Box sx={{
                borderRadius: "54% 46% 65% 35% / 34% 31% 69% 66%",
                height: "100%",
                width: "100%",
                overflow: "hidden",
                boxShadow: "rgba(0,166,147,1) 8px 4px 36px 5px, rgba(242,242,242,1) -6px -2px 12px 0px",
              }}>
                <img src={Saurabh} height="400px" width="400px" />
              </Box>
              <Typography variant='h3' m={2}>Saurabh Galgale</Typography>
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

        {/* <Divider variant="middle" /> */}

        <Box mt={2} mb={2}>
          <Stack direction="row" flexWrap="wrap-reverse" alignItems="center" justifyContent="space-around">

          <Box  m={4} width="50%" textAlign="center">
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
                borderRadius: "50% 50% 36% 64% / 61% 70% 30% 39%",
                height: "100%",
                width: "100%",
                overflow: "hidden",
                boxShadow: "rgba(0,166,147,1) 8px 4px 36px 5px, rgba(242,242,242,1) -6px -2px 8px 0px",
              }}>
                <img src={abhi} height="400px" width="400px" />
              </Box>
              <Typography variant='h3' m={2}>Abhijith Nair</Typography>
            </Box>

          </Stack>
        </Box>
      </Stack>
      <Footer />
    </>
  )
}

export default About;
