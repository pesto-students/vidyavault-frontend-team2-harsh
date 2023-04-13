import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import CheckIcon from "@mui/icons-material/Check"
import Typography from '@mui/material/Typography';
import { openModel, closeModel, startLoading, stopLoading, openSnack } from '../../store/systemSlice';
import { useDispatch, useSelector } from 'react-redux';
import { CircularProgress, Stack, TextField } from '@mui/material';
import axios from 'axios';
import { postData } from '../DataFetch/DataFetch';
import { BACKEND_URL } from '../../Constant';
import { useNavigate } from 'react-router-dom';

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

export default function AddVideo() {
    let auth = useSelector((state) => state.auth);
    let res = useSelector((state) => state.system);
    const dispatch = useDispatch();
    let navigate = useNavigate();
    const [videoSuccess, setVideoSuccess] = React.useState(false)
    const [thumbSuccess, setThumbSuccess] = React.useState(false)
    const [thumbloading, setThumbLoading] = React.useState(false)
    const [videoloading, setVideoLoading] = React.useState(false)
    const [videofile, setVideoFile] = React.useState("")
    const [thumbfile, setThumbFile] = React.useState("")
    const [thumbUrl, setThumbUrl] = React.useState("")
    const [videourl, setVideoUrl] = React.useState("")

    const [formData, setFormData] = React.useState({
        moduleId: "",
        lecName: "",
        thumbnail: "",
        path: ""
    })

    const handleChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        setFormData({
            ...formData,
            [name]: value
        })
    }

    let open = res.isFileModelOpen;

    const handleClose = () => {
        dispatch(closeModel());
    }

    const changeModelState = () => {
        open = res.isModelOpen;
    }

    const handleVideoFileChange = (event) => {
        setVideoFile(event.target.files[0])
    }
    const handleThumbFileChange = (event) => {
        setThumbFile(event.target.files[0])
    }
    const handleVideoUpload = async () => {
        setVideoLoading(true)
        const Data = new FormData()
        Data.append("file", videofile)
        Data.append("upload_preset", "rdizbhea")
        try {
            const response = await axios.post("https://api.cloudinary.com/v1_1/dd2bmcpqv/upload", Data)
            setVideoUrl(response.data.secure_url)
            setFormData({ ...formData, path: response.data.secure_url })

            setVideoSuccess(true)
            setVideoLoading(false)
            setTimeout(() => {
                setVideoSuccess(false)
                // console.log(videourl)
            }, 1000)
        } catch (error) {
            // console.error(error)
        }
    }
    const handleThumbUpload = async () => {
        setThumbLoading(true)
        const Data = new FormData()
        Data.append("file", thumbfile)
        Data.append("upload_preset", "rdizbhea")
        try {
            const response = await axios.post("https://api.cloudinary.com/v1_1/dd2bmcpqv/upload", Data)
            setThumbUrl(response.data.secure_url)
            setFormData({ ...formData, thumbnail: response.data.secure_url })

            setThumbSuccess(true)
            setThumbLoading(false)
            setTimeout(() => {
                setThumbSuccess(false)
                // console.log(thumbUrl)
            }, 1000)
        } catch (error) {
            // console.error(error)
        }
    }

    let handleSubmit = async () => {
        setFormData((form) => {
            return {
                ...form,
                ["moduleId"]: res.modelPayload,
            }
        })
        dispatch(startLoading())
        if (
            formData.lecName == "" ||
            formData.moduleId == "" ||
            formData.path == ""
        ) {
            dispatch(openSnack({ msg: "Missing credentials", type: "error" }));
            dispatch(stopLoading());
            return;
        }

        const data = {
            moduleId: formData.moduleId,
            lecName: formData.lecName,
            path: formData.path
        }
        let header = {
            headers: { authorization: `Bearer ${auth.token}` }
        }
        console.log("data", data)
        const result = await axios.post(`${BACKEND_URL}/file`, data, header)
        if (result.data.status) {
            dispatch(openSnack({ msg: "congratulations! course created successfuly", type: "success" }))
            dispatch(stopLoading())
        } else {
            dispatch(openSnack({ msg: "Failed", type: "error" }))
            dispatch(stopLoading())
        }
        handleClose();
        navigate('/dash/manage');
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
                        <Stack direction="column" spacing={2}>
                        <Typography variant='h6' color='secondary.main'>
                                Lecture name (Title)
                            </Typography>
                            <TextField
                                label='Lecture name'
                                fullWidth
                                name="lecName"
                                variant='outlined'
                                onChange={(e) => handleChange(e)}
                                value={formData.lecName}
                                color='third'
                            />
                            <Typography variant='h6' color='secondary.main'>
                                Click on below button to upload course thumbnail
                            </Typography>
                            <Stack display='flex' direction='row'>
                                <Button
                                    variant='outlined'
                                    color='secondary'
                                    onClick={(e) => {
                                        e.target.firstChild.click()
                                    }}
                                >
                                    <input
                                        style={{ width: "100%" }}
                                        type='file'
                                        accept='image/*'
                                        hidden
                                        onChange={(e) => handleThumbFileChange(e)}
                                    />
                                    Select Thumbnail
                                </Button>
                                <TextField disabled variant='outlined' color='third' value={thumbfile.name} />
                                {thumbSuccess ? (
                                    <CheckIcon color='success' />
                                ) : (
                                    thumbloading && (
                                        <Box sx={{ display: "flex", height: "100%", justifyContent: "center", alignItems: "center" }}>
                                            <CircularProgress size={20} thickness={4} color='secondary' />
                                        </Box>
                                    )
                                )}
                            </Stack>
                            <Button variant='contained' color='secondary' onClick={(e) => handleThumbUpload(e)}>
                                <Typography>Upload course thumbnail</Typography>
                            </Button>

                            <Typography variant='h6' color='secondary.main'>
                                Click on below button to upload video
                            </Typography>
                            <Stack display='flex' direction='row'>
                                <Button
                                    variant='outlined'
                                    color='secondary'
                                    onClick={(e) => {
                                        e.target.firstChild.click()
                                    }}
                                >
                                    <input
                                        style={{ width: "100%" }}
                                        type='file'
                                        accept='video/*'
                                        hidden
                                        onChange={(e) => handleVideoFileChange(e)}
                                    />
                                    Select Video
                                </Button>
                                <TextField disabled variant='outlined' color='third' value={videofile.name} />
                                {videoSuccess ? (
                                    <CheckIcon color='success' />
                                ) : (
                                    videoloading && (
                                        <Box sx={{ display: "flex", height: "100%", justifyContent: "center", alignItems: "center" }}>
                                            <CircularProgress size={20} thickness={4} color='secondary' />
                                        </Box>
                                    )
                                )}
                            </Stack>
                            <Button variant='contained' color='secondary' onClick={(e) => handleVideoUpload(e)}>
                                <Typography>Upload video</Typography>
                            </Button>
                            <Typography variant='h6' color='secondary.main'>
                                proceed after uploading is complete
                            </Typography>
                            <Button variant='contained' color='secondary' onClick={handleSubmit}>Submit</Button>
                        </Stack>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}