import { IconButton, InputBase, TextField, Typography } from '@mui/material';
import { Box, Stack } from '@mui/system';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import logo from '../atoms/assets/darklogo.png';
import { Button } from '@mui/material';
import { MenuIcon, SearchIcon } from '../../components/atoms/icons/icons';
import { useSelector } from 'react-redux';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


let data = [{
    "id": 1,
    "text": "Devpulse"
}, {
    "id": 2,
    "text": "Linklinks"
}, {
    "id": 3,
    "text": "Centizu"
}, {
    "id": 4,
    "text": "Dynabox"
}, {
    "id": 5,
    "text": "Avaveo"
}, {
    "id": 6,
    "text": "Demivee"
}, {
    "id": 7,
    "text": "Jayo"
}, {
    "id": 8,
    "text": "Blognation"
}, {
    "id": 9,
    "text": "Podcat"
}, {
    "id": 10,
    "text": "Layo"
}]


function List(props) {// searching functionality

    //create a new array by filtering the original array
    const filteredData = data.filter((el) => {
        //if no input the return the original
        if (props.input === '') {
            return el;
        }
        //return the item which contains the user input
        else {
            return el.text.toLowerCase().includes(props.input)
        }
    })
    return (
        <ul>
            {filteredData.map((item) => (
                <li key={item.id} style={{ color: "white" }}>{item.text}</li>
            ))}
        </ul>
    )
}



const Navbar = () => {
    let getState = useSelector((state) => state.auth);
    let isLogin = getState.isLogin;
    let isAdmin = getState.isAdmin;

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const [inputText, setInputText] = useState("");
    let inputHandler = (e) => {
        let lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    }

    // useEffect(() => {
    //     isLogin = getState.isLogin;
    //     isAdmin = getState.isAdmin;
    //     console.log(isLogin, )
    // }, [getState.isLogin])

    return (
        <>
            <Box sx={{ width: "100%" }}>
                <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-around"
                    bgcolor="secondary.main"
                    p={1}
                    spacing={1}
                >
                    <Box sx={{ width: "110px", marginLeft: 3 }}>
                        <img src={logo} height="80px" width="80px" />
                        <Typography variant='h6' color="third.main" ml={1}>VidyaVault</Typography>
                    </Box>

                    {/* <List input={inputText} /> */}

                    {/* <Box>
                        <InputBase
                            sx={{ ml: 1, flex: 1, color: "primary.main" }}
                            placeholder="Search courses..."
                            onChange={(e) => inputHandler(e)}
                            inputProps={{ 'aria-label': 'search google maps' }}
                        />
                        <IconButton type="button" sx={{ p: '10px' }} aria-label="search" color='primary'>
                            <SearchIcon />
                        </IconButton>
                    </Box> */}

                    <IconButton
                        edge='start'
                        color='third'
                        aria-label='menu'
                        sx={{ display: { xs: "block", sm: "block", md: "none" } }}
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={handleClose} component={Link} to="/">Home</MenuItem>
                        <MenuItem onClick={handleClose} component={Link} to="/org">Organization</MenuItem>
                        <MenuItem onClick={handleClose} component={Link} to="/about">About</MenuItem>
                        <MenuItem onClick={handleClose} component={Link} to="/signup">Sign up</MenuItem>
                        <MenuItem onClick={handleClose} component={Link} to="/signin">Sign in</MenuItem>
                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                    </Menu>


                    <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}>

                        <Stack direction="row" spacing={2}>
                            <Button
                                color="primary"
                                size="large"
                                variant="text"
                                component={Link} to="/"
                            ><Typography variant='h6' color="primary.main">Home</Typography>
                            </Button>

                            <Button
                                color="primary"
                                size="large"
                                variant="text"
                                component={Link} to="/org"
                            ><Typography variant='h6' color="primary.main">Organization</Typography>
                            </Button>

                            <Button
                                color="primary"
                                size="large"
                                variant="text"
                                component={Link} to="/about"
                            ><Typography variant='h6' color="primary.main">About</Typography>
                            </Button>

                            {isLogin && isAdmin && (
                                <Button
                                    color="third"
                                    variant="contained"
                                    size="large"
                                    component={Link} to="/admindash"
                                ><Typography variant='h6' color="secondary.main">Dashboard</Typography>
                                </Button>
                            )}

                            {isLogin && !isAdmin && (
                                <Button
                                    color="third"
                                    variant="contained"
                                    size="large"
                                    component={Link} to="/dash"
                                ><Typography variant='h6' color="secondary.main">Dashboard</Typography>
                                </Button>
                            )}

                            <Button
                                color="third"
                                variant="contained"
                                size="large"
                                component={Link} to="/signup"
                            ><Typography variant='h6' color="secondary.main">Sign up</Typography>
                            </Button>

                            <Button
                                color="third"
                                variant="contained"
                                size="large"
                                component={Link} to="/signin"
                            ><Typography variant='h6' color="secondary.main">Sign in</Typography>
                            </Button>

                        </Stack>

                    </Box>
                </Stack>
            </Box>
        </>
    )
}

export default Navbar;