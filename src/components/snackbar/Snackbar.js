import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useDispatch, useSelector } from 'react-redux';
import { closeSnack } from '../../store/systemSlice';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CustomSnackbar() {
    let dispatch = useDispatch();
    let sys = useSelector((state) => state.system);
    let open = sys.isSnackOpen;
    let msg = sys.snackmsg;
    let type = sys.snackType;

    const handleClose = (event, reason) => {
        dispatch(closeSnack());
    };

    return (
        <Stack spacing={2} sx={{ width: '100%' }}>
            <Snackbar anchorOrigin={{ vertical: 'top', horizontal: "right" }} open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={type} sx={{ width: '100%' }}>
                    {msg}
                </Alert>
            </Snackbar>
        </Stack>
    );
}