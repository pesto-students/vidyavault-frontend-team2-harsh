import { Typography } from '@mui/material';
import { Box, Stack } from '@mui/system';
import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../atoms/assets/darklogo.png';
import { Button } from '@mui/material';

const Navbar = () => {
    return (
        <>
            <Box sx={{ top: 0, width: "100%" }}>
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

            </Box>
        </>
    )
}

export default Navbar;