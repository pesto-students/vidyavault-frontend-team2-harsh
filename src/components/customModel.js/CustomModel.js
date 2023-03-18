import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { openModel, closeModel } from '../../store/systemSlice';
import { useDispatch, useSelector } from 'react-redux';
import { TextField } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function CustomModel() {
    let res = useSelector((state) => state.system);
    let dispatch = useDispatch();
    let open = res.isModelOpen;
    const handleOpen = () => {
        dispatch(openModel());
    }
    const handleClose = () => {
        dispatch(closeModel());
    }

    const changeModelState = () => {
        open = res.isModelOpen;
    }

    React.useEffect(() => {
        changeModelState()
    }, [res.isModelOpen])

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition={true}
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <Typography id="transition-modal-title" variant="h6" component="h2" mb={1}>
                            add video title below
                        </Typography>
                        <TextField
                            label='Video title'
                            color='third'
                            fullWidth
                            size='large'
                            name='name'
                        // value={formData.name}
                        // onChange={(e) => handleChange(e)}
                        />
                        <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                            Upload video below
                        </Typography>
                        <input type="file" accept="video/*"/>
                        <Button variant='contained' color='secondary'>Submit</Button>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}