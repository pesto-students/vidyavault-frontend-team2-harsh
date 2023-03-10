import { Box, Button, Divider, FormControlLabel, Stack, TextField, Typography } from "@mui/material"

export const CourseContent = (
    <>
        <Box sx={{ width: { sm: "55%", md: "50%", lg: "40%", xs: "85%" }, margin: "auto auto", borderRadius: "1rem" }}>
            <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={3}
                height="100%"
                margin={3}
            >
                <Typography variant='h3'>Course structure</Typography>
                <TextField
                    id="standard-basic"
                    label="Module-Name"
                    fullWidth
                    size='large'
                    variant="standard"
                    // onChange={(e) => setName(e.target.value)}
                    value={""}
                />
                <TextField
                    id="standard-basic"
                    label="Video-title"
                    fullWidth
                    variant="standard"
                    // onChange={(e) => setEmail(e.target.value)}
                    value={""}
                />
            </Stack>
        </Box>
    </>
)