import { Box, Button, Divider, FormControlLabel, Stack, TextField, Typography } from "@mui/material"

let AdminSignin = () => {
    return (
        <>
            <Box sx={{ width: { sm: "55%", md: "50%", lg: "40%", xs: "85%" } }}>
                <Stack
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    spacing={3}
                    height="100%"
                    margin={3}
                >
                    <Typography variant='h3'>Admin Sign in</Typography>
                    <TextField
                        id="standard-basic"
                        label="Email"
                        fullWidth
                        size='large'
                        variant="standard"
                        // onChange={(e) => setName(e.target.value)}
                        value={""}
                    />
                    <TextField
                        id="standard-basic"
                        label="Password"
                        fullWidth
                        variant="standard"
                        // onChange={(e) => setEmail(e.target.value)}
                        value={""}
                    />
                    <Button 
                    variant="contained" 
                    fullWidth
                    color="secondary">Sign in</Button>
                </Stack>
            </Box>
        </>
    )
}

export default AdminSignin; 