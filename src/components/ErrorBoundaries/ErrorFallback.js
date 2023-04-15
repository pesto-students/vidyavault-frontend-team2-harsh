import { Button, Stack } from "@mui/material";
import errorImg from '../../components/atoms/assets/error.png';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import Logo from '../backWrapper/assets/darkerlogo.png';

function ErrorFallback({ error, resetErrorBoundary }) {
    // console.log("hiiiiiiiiiiii", error, resetErrorBoundary)
    return (
        <>
            <Box sx={{ width: "310px", height: "320px", margin: "1rem", position: "absolute", top: 0, left: 0, }}>
                {/* <Box sx={{
                    borderRadius: 8,
                    height: "50%",
                    bgcolor: "secondary.main",
                    width: "50%",
                    overflow: "hidden",
                    // boxShadow: "rgba(0,166,147,1) 8px 4px 18px 5px, rgba(242,242,242,1) -6px -2px 12px 0px",
                    boxShadow: "rgba(0,166,147,1)  0px 7px 29px 0px"
                }}>
                    <Stack alignItems="center" m={2}>
                        <img src={Logo} alt="VidyaVault" height={100} width={100} />
                        <Typography variant='h6' color="third.main">VidyaVault</Typography>
                    </Stack>
                </Box> */}
            </Box>
            <Box sx={{ width: "100vw", height: "100vh", bgcolor: "primary.light", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                <Box sx={{ width: { lg: "75%", md: "80%" }, height: "80%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                    <Typography variant='h3' color="third.dark" mb="1.5rem">oops! sorry, {error.message}</Typography>
                    <img src={errorImg} height="100%" width="100%" />
                    <Button variant="contained" color="secondary" sx={{ margin: 1 }} onClick={resetErrorBoundary}>Try again</Button>
                </Box>
            </Box>
        </>
    )
}

export default ErrorFallback;

