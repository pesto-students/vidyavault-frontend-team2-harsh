import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Box, Button, Divider, Grid, Stack, Typography } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';

const CreatoresCategory = () => {
    return (
        <>
            <Stack
                direction="row"
                flexWrap="wrap"
                alignItems="center"
                justifyContent="space-around"
                bgcolor="primary.main"
                m={0.6}
            >
            <Box sx={{ width:{sm: "300px", xs: "200px"}, height: "fit-content", padding: 1, bgcolor: "secondary.light", borderRadius: 3, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Card sx={{ width: "100%", textAlign: "center" }}>
                        <CardMedia
                            sx={{ height: 220 }}
                            image="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="
                            title="green iguana"
                        />
                        <CardContent sx={{ bgcolor: "#E5E4E2" }}>
                            <Typography variant="h4" component="div" >
                                Creator name
                            </Typography>
                            <Typography gutterBottom variant="h5" component="div">
                            Platinum (Top creator)
                            </Typography>
                            <Typography variant="h6" color="text.secondary">
                                Creator with maximum number of courses uploaded
                                in last 6 months.
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>

                <Box sx={{ width:{sm: "300px", xs: "200px"}, height: "fit-content", padding: 1, bgcolor: "secondary.light", borderRadius: 3, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Card sx={{ width: "100%", textAlign: "center" }}>
                        <CardMedia
                            sx={{ height: 220 }}
                            image="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="
                            title="green iguana"
                        />
                        <CardContent sx={{ bgcolor: "#d4af37" }}>
                            <Typography variant="h4" component="div" >
                                Creator name
                            </Typography>
                            <Typography gutterBottom variant="h5" component="div">
                                Gold
                            </Typography>
                            <Typography variant="h6" color="text.secondary">
                            Creator on second rank...
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>

                <Box sx={{ width:{sm: "300px", xs: "200px"}, height: "fit-content", padding: 1, bgcolor: "secondary.light", borderRadius: 3, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Card sx={{ width: "100%", textAlign: "center" }}>
                        <CardMedia
                            sx={{ height: 220 }}
                            image="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="
                            title="green iguana"
                        />
                        <CardContent sx={{ bgcolor: "#c0c0c0" }}>
                            <Typography gutterBottom variant="h4" component="div">
                                Creator name
                            </Typography>
                            <Typography gutterBottom variant="h5" component="div">
                                Silver
                            </Typography>
                            <Typography variant="h6" color="text.secondary">
                                Creator on third rank...
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>

                <Box sx={{ width:{sm: "300px", xs: "200px"}, height: "fit-content", padding: 1, bgcolor: "secondary.light", borderRadius: 3, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Card sx={{ width: "100%", textAlign: "center" }}>
                        <CardMedia
                            sx={{ height: 220 }}
                            image="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="
                            title="Avatar"
                        />
                        <CardContent sx={{ bgcolor: "#cd7f32" }}>
                            <Typography gutterBottom variant="h4" component="div">
                                Creator name
                            </Typography>
                            <Typography gutterBottom variant="h5" component="div">
                                Bronze
                            </Typography>
                            <Typography variant="h6" color="text.secondary">
                                Creator on fourth rank... 
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>
            </Stack>
        </>
    )
}

export default CreatoresCategory;