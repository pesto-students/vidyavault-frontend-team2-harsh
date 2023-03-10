import BackWrapper from '../../components/backWrapper/BackWrapper';
import menuList from './menuList';
import Button from '@mui/material/Button/Button';
import Stack from '@mui/material/Stack/Stack';
import { Divider, Typography } from '@mui/material';
import { Box } from '@mui/system';
import TextField from '@mui/material/TextField/TextField';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import GoogleIcon from '@mui/icons-material/Google';
import { setLogin } from '../../store/authSlice';

function Signin() {
  const nevigate = useNavigate();
  const dispatch = useDispatch();
  const [value, setValue] = useState({});

  let status = useSelector((state) => state.auth);

  let submit = () => {
    dispatch(setLogin(true));
    if (status.type == "itsUser") {
      nevigate("/dash/");
    }
    if (status.type == "itsAdmin") {
      nevigate("/admindash/");
    }
    // console.log("submit Button", value);
  }

  let onTextChange = (e) => {
    // setValue({
    //   ...value,
    //   [e.target]: e.target.value
    // });
    console.log(e.target);
  }

  return (
    <>
      <BackWrapper menuList={menuList}>
        <Box sx={{ bgcolor: "primary.main", width: { sm: "55%", md: "50%", lg: "40%", xs: "85%" }, height: "90vh", margin: "auto auto", borderRadius: 5 }}>
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={3}
            height="100%"
            margin={3}
          >
            <Typography variant='h3'>Sign in</Typography>
            <Typography variant='h6'>Enter your credentials to continue</Typography>
            <Button variant='contained' color='third' fullWidth startIcon={<GoogleIcon />}>Sign up with google</Button>
            <Divider variant='middle'>OR</Divider>

            <TextField
              id="standard-basic"
              label="Name"
              fullWidth
              variant="standard"
              onChange={onTextChange}
              value={value.name}
            />
            <TextField
              id="standard-basic"
              label="Email"
              fullWidth
              variant="standard"
              onChange={onTextChange}
              value={value.email}
            />
            <Button
              color="secondary"
              size="large"
              fullWidth
              variant="contained"
              onClick={() => { submit() }}
            >
            Sign in
            </Button>
            <Link to="/signup" style={{ textDecoration: 'none' }}>
              <Button variant='text'>
              <Typography color="secondary" sx={{textTransform: "none"}}>Go to registration/Sign up page</Typography>
              </Button>
            </Link>
          </Stack>
        </Box>
      </BackWrapper>
    </>
  )
}

export default Signin;