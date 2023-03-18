import React, { useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Box } from '@mui/system';
import GoogleIcon from '@mui/icons-material/Google';
import { Divider, Typography } from '@mui/material';
import { addType } from '../../store/authSlice';
import { useDispatch } from 'react-redux';
import { BACKEND_URL } from '../../Constant';
import Navbar from '../../components/navbar/Navbar';
import { KeyboardBackspaceIcon } from '../../components/atoms/icons/icons';

function Signup() {
    let navigate = useNavigate();
    // const dispatch = useDispatch();
    // https://vidyavault.onrender.com/

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

    let handleBack = () => {
        navigate("/");
    }

    let submit = async () => {

        // dispatch(addType("itsUser"));

        const body = {
            name: formData.name,
            email: formData.email,
            password: formData.password
        };
        axios.post(
            'https://vidyavault.onrender.com/api/user/signup',
            body
        ).then((x) => console.log(x)).catch((x) => console.log(x));
    }

    return (
        <>
            <Box sx={{ width: "100%", height: "100%" }}>
                <Box sx={{ bgcolor: "primary.main", width: { sm: "55%", md: "50%", lg: "40%", xs: "85%" }, height: "fit-content", margin: "auto auto", borderRadius: 3 }}>
                    <Box sx={{ position: "absolute", marginLeft: "1.2rem", marginTop: "0.5rem" }}>
                        <KeyboardBackspaceIcon fontSize="large" onClick={handleBack} />
                    </Box>
                    <Stack
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        spacing={4}
                        height="fit-content"
                        margin={3}
                    >
                        <Typography variant='h3'>Sign up</Typography>
                        <Typography variant='h6'>Enter your credentials to continue</Typography>
                        <Button variant='contained' color='third' fullWidth startIcon={<GoogleIcon />}>Sign up with google</Button>
                        <Divider variant='middle'>OR</Divider>
                        <TextField
                            label="Name"
                            color='third'
                            fullWidth
                            size='large'
                            name='name'
                            value={formData.name}
                            onChange={(e) => handleChange(e)}
                        />
                        <TextField
                            color='third'
                            label="Email"
                            fullWidth
                            name='email'
                            value={formData.email}
                            onChange={(e) => handleChange(e)}
                        />
                        <TextField
                            color='third'
                            label="Password"
                            fullWidth
                            name='password'
                            type="password"
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
            </Box>
        </>
    )
}

export default Signup
