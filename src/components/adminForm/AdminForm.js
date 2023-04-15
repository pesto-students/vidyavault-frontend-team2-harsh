import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/system';
import { UploadIcon, DescriptionIcon, NoteAddIcon, } from '../atoms/icons/icons';
import { useDispatch, useSelector } from 'react-redux';
import { openSnack, closeSnack } from '../../store/systemSlice';
import CustomSnackbar from '../snackbar/Snackbar';
import AdminSignup from './AdminSignup';
import AdminSignin from './AdminSignin';
import { KeyboardBackspaceIcon } from '../../components/atoms/icons/icons';
import { useNavigate } from 'react-router-dom';

const steps = [
    { "title": 'Sign up', "icon": <NoteAddIcon /> },
    { "title": 'Sign in', "icon": <DescriptionIcon /> }
];

export default function AdminForm() {
    let navigate = useNavigate();
    let dispatch = useDispatch();
    let sys = useSelector((state) => state.system);
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());

    const isStepOptional = (step) => {
        return step === 1;
    };

    const thumFn = () => {
        dispatch(openSnack("Saurabh"));
        console.log(sys);
    }

    let goHome = () => {
        navigate("/");
    }

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSkip = () => {
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <>
            <Box sx={{ position: "absolute", margin: "0.6rem" }}>
                <KeyboardBackspaceIcon fontSize="large" onClick={goHome} />
            </Box>
            <Box sx={{ width: '100%', minHeight: "95vh", height: "fit-content", bgcolor: "primary.main", padding: "1rem", borderRadius: "1rem", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start" }}>
                <Box sx={{ width: "70%" }}>
                    <Stepper activeStep={activeStep}>
                        {steps.map((label, index) => {
                            const stepProps = {};
                            const labelProps = {};
                            return (
                                <Step key={index} {...stepProps}>
                                    <StepLabel {...labelProps} icon={label.icon}><Typography variant='h5' color="secondary.main">{label.title}</Typography></StepLabel>
                                </Step>
                            );
                        })}
                    </Stepper>
                </Box>
                {activeStep == steps.length - 1 ? (
                    <React.Fragment>
                        <AdminSignin />
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <AdminSignup />
                    </React.Fragment>
                )}
                {activeStep === steps.length - 1 ? (
                    <React.Fragment>
                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                            <Box sx={{ flex: '1 1 auto' }} />
                            <Button onClick={handleReset}><Typography variant='h5' color="secondary">Finish</Typography></Button>
                        </Box>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        {/* <Typography sx={{ mt: 2, mb: 1 }} variant="h6">Step {activeStep + 1}</Typography> */}
                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                            <Box sx={{ flex: '1 1 auto' }} />
                            <Button onClick={handleNext}><Typography variant='h5' color="secondary">Next</Typography></Button>
                        </Box>
                    </React.Fragment>
                )}
                <CustomSnackbar />
            </Box>
        </>
    );
}