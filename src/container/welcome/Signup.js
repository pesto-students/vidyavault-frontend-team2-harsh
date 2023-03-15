import React, { useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Box } from '@mui/system';
import GoogleIcon from '@mui/icons-material/Google';
import { Divider, Typography } from '@mui/material';
import { addType } from '../../store/authSlice';
import { useDispatch } from 'react-redux';
import Navbar from '../../components/navbar/Navbar';

function Signup() {
    // const dispatch = useDispatch();
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        password: ''
    })

    const handleChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        setFormData({
            ...formData,
            [name]: value
        })
    }

    let submit = async () => {
        // dispatch(addType("itsUser"));
        console.log(formData);

    }

    return (
        <>
            <Navbar />
                <Box sx={{ bgcolor: "primary.main", width: { sm: "55%", md: "50%", lg: "40%", xs: "85%" }, height: "max-content", margin: "auto auto", borderRadius: 5 }}>
                    <Stack
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        spacing={3}
                        height="100%"
                        margin={3}
                    >
                        <Typography variant='h3'>Sign up</Typography>
                        <Typography variant='h6'>Enter your credentials to continue</Typography>
                        <Button variant='contained' color='third' fullWidth startIcon={<GoogleIcon />}>Sign up with google</Button>
                        <Divider variant='middle'>OR</Divider>
                        <TextField
                            id="standard-basic"
                            label="Name"
                            fullWidth
                            size='large'
                            variant="standard"
                            name='name'
                            value={formData.name}
                            onChange={(e) => handleChange(e)}
                        />
                        <TextField
                            id="standard-basic"
                            label="Email"
                            fullWidth
                            variant="standard"
                            name='email'
                            value={formData.email}
                            onChange={(e) => handleChange(e)}
                        />
                        <TextField
                            id="standard-basic"
                            label="Password"
                            fullWidth
                            variant="standard"
                            name='password'
                            value={formData.password}
                            onChange={(e) => handleChange(e)}
                        />
                        <Button
                            color="secondary"
                            size="large"
                            variant="contained"
                            fullWidth
                            onClick={submit}
                        >Sign up</Button>

                        <Divider variant='middle' />
                        <Link to="/signin" style={{ textDecoration: 'none' }}>
                            <Button variant='text' sx={{ textTransform: "none" }}><Typography color="secondary">Already have an account?</Typography></Button>
                        </Link>
                    </Stack>
                </Box>
        </>
    )
}

export default Signup
