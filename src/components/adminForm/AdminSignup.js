import { Box, Button, Divider, FormControlLabel, Stack, TextField, Typography } from "@mui/material"

let AdminSignup = () => {
    return (
        <>
            <Box sx={{ width: { sm: "55%", md: "50%", lg: "40%", xs: "85%" } }}>
                <Stack
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    spacing={3}
                    height="100%"
                    margin={2}
                >
                    <Typography variant='h5'>To create your Organization sign up here</Typography>
                    <Typography variant='h3'>Admin Sign up</Typography>
                    <TextField
                        id="standard-basic"
                        label="Name"
                        fullWidth
                        size='large'
                        variant="standard"
                        // onChange={(e) => setName(e.target.value)}
                        value={""}
                    />
                    <TextField
                        id="standard-basic"
                        label="Email"
                        fullWidth
                        variant="standard"
                        // onChange={(e) => setEmail(e.target.value)}
                        value={""}
                    />
                    <TextField
                        id="standard-basic"
                        label="Password"
                        fullWidth
                        variant="standard"
                        // onChange={(e) => setPassword(e.target.value)}
                        value={""}
                    />
                    <Button 
                    variant="contained" 
                    fullWidth
                    color="secondary">Sign up</Button>
                </Stack>
            </Box>
        </>
    )
}

export default AdminSignup;