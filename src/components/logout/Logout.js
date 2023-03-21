import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { closeLogout, openSnack } from '../../store/systemSlice';
import {addLogin, addType, addId, addToken} from '../../store/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Typography } from '@mui/material';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function Logout() {
    const dispatch = useDispatch();
    const sys = useSelector((state) => state.system);
    let open = sys.popLogout;

    const handleClose = () => {
        dispatch(closeLogout());
    };
    const handleLogout = () => {
        dispatch(closeLogout());
        let keysToRemove = ["isLoggedIn", "isAdmin", "userId", "token"];

        for (let key of keysToRemove) {
            localStorage.removeItem(key);
        }
        dispatch(addLogin(false));
        dispatch(addType(false));
        dispatch(addId(""));
        dispatch(addToken(""));
        window.location.reload(false);
        dispatch(openSnack("Log out successful"));
    };


    return (
        <div>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                fullWidth={true}
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>Log out</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        Do you really want to log out?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} variant="contained" color='secondary'>Cancel</Button>
                    <Button onClick={handleLogout} variant="contained" color='secondary'>Log out</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}