import { Button, Checkbox, Drawer, Typography } from '@mui/material';
import { Box, Stack } from '@mui/system';
import React, { useEffect, useState } from 'react';
import BackWrapper from '../backWrapper/BackWrapper';
import menuList from '../../container/admin/menuList';
import { useDispatch, useSelector } from 'react-redux';
import { openFileModel, openModel, openModuleModel, openSnack, startLoading, stopLoading } from '../../store/systemSlice';
import { EditIcon, DeleteIcon, AddIcon } from '../atoms/icons/icons';
import CustomModel from '../customModel.js/CustomModel';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import AddVideo from '../customModel.js/AddVideo';
import { BACKEND_URL } from '../../Constant';
import { add, clearArr } from '../../store/courseSlice';
import Snackbar from "../snackbar/Snackbar";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AddModule from '../customModel.js/AddModule';

const AdminEditCourse = () => {
    let dispatch = useDispatch();
    const navigate = useNavigate();
    let auth = useSelector((state) => state.auth);
    let res = useSelector((state) => state.courses);
    const [open, setOpen] = useState("none");
    const [itemIndex, setItemIndex] = useState();
    const [player, setPlayer] = useState();

    let data;
    let CourseData;
    if (res.courses.length == 0) {
        let sessionRes = sessionStorage.getItem("onGoing");
        let sessionFiles = sessionStorage.getItem("current");
        data = JSON.parse(sessionRes);
        CourseData = JSON.parse(sessionFiles);
    } else {
        data = res.courses[res.courses.length - 1];
        CourseData = res.courseFile[res.courseFile.length - 1];
    }

    let toggleFn = (inx) => {
        setItemIndex((prev) => {
            if (prev == inx) {
                return;
            } else {
                return inx;
            }
        });
    }

    let handleFn = (e) => {
        setOpen("none");
    }

    let drawerFn = (e) => {
        e.stopPropagation();
        setOpen("block");
    }

    const addFiles = (e, item) => {
        e.preventDefault();
        dispatch(openFileModel({ id: item._id }));
    }

    const addModule = (e, id) => {
        e.preventDefault();
        dispatch(openModuleModel({ id: id }));
    }

    const playVideo = (e, file) => {
        e.preventDefault();
        setPlayer(file.path)
    }

    let deleteFileFn = (e, item, videoFile) => {
        let result = window.confirm("Want to delete this video?");
        if (result) {
            e.preventDefault();
            let header = {
                headers: { authorization: `Bearer ${auth.token}` }
            }
            axios.post(`${BACKEND_URL}/filedelete`, { "moduleId": item._id, "fileId": videoFile._id }, header)
                .then((x) => {
                    dispatch(openSnack({ msg: "video deleted", type: "success" }));
                })
            navigate('/admindash/ismanage');
        } else {
            return;
        }
    }

    let deleteModuleFn = (e, cou, mod) => {
        e.preventDefault();
        e.stopPropagation();
        let result = window.confirm("Want to delete this Module?");
        if (result) {
            e.preventDefault();
            let header = {
                headers: { authorization: `Bearer ${auth.token}` }
            }
            axios.post(`${BACKEND_URL}/moduledelete`, { "moduleId": mod._id, "courseId": cou._id }, header)
                .then((x) => {
                    dispatch(openSnack({ msg: "Module deleted", type: "success" }));
                })
            navigate('/admindash/ismanage');
        } else {
            return;
        }
    }

    useEffect(() => {
        sessionStorage.setItem("onGoing", JSON.stringify(data));
        sessionStorage.setItem("current", JSON.stringify(CourseData));
    }, []);

    return (
        <>
            <BackWrapper menuList={menuList}>
                <Snackbar />
                <Stack direction="row">
                    <AddVideo />
                    <AddModule />
                    <Box sx={{ width: "65%", height: "100vh", borderRadius: 5, float: "right", display: { sm: open, md: "block", xs: open } }}>
                        <Stack alignItems="center">
                            <Typography variant='h3' margin={2}>curriculum</Typography>
                            {CourseData && CourseData.map((item, index) => {
                                return (
                                    <Box key={index} sx={{ width: "100%", height: "100%" }}>
                                        <Box bgcolor='third.main' sx={{ margin: 0.8, padding: 1, borderRadius: 1 }} onClick={() => toggleFn(index)}>
                                            <Stack direction="row" flexWrap="wrap" alignItems="center" justifyContent="center">
                                                <Typography variant='h5' margin={1} >{item.moduleName}</Typography>
                                                <DeleteIcon onClick={(e) => deleteModuleFn(e, data, item)} />
                                                <Button variant='outlined' color="secondary" sx={{ marginLeft: "auto" }} onClick={(e) => addFiles(e, item)}>
                                                    <Typography variant='h6'>Add video in this module</Typography>
                                                </Button>
                                            </Stack>
                                        </Box>
                                        {index == itemIndex && item.files.map((VideoFile, index) => {
                                            return (<Box key={index} sx={{ textTransform: "none" }}>
                                                <Stack direction="row" margin={1} alignItems="center" justifyContent="center">
                                                    <Typography variant='h6' margin={1} onClick={(e) => playVideo(e, VideoFile)}>{VideoFile.lecName}</Typography>
                                                    <DeleteIcon onClick={(e) => deleteFileFn(e, item, VideoFile)} />
                                                </Stack>
                                            </Box>)
                                        })}
                                    </Box>
                                )
                            })}
                            <Button variant='contained' startIcon={<AddIcon />} color='third' sx={{ margin: 0.4 }} onClick={(e) => addModule(e, data._id)}>
                                <Typography variant='h6' margin={1}>Add new module</Typography>
                            </Button>
                        </Stack>
                    </Box>


                    <Box sx={{ width: { md: "60%", sm: "100%", xs: "100%" }, height: "100vh", bgcolor: "primary.main", borderRadius: 5, margin: 1 }} onClick={(e) => handleFn(e)}>
                        <Stack alignItems="center">
                            <Typography variant='h4' margin={2}>{data.courseName}</Typography>
                            <Button variant='contained' color="secondary" sx={{ display: { md: "none" } }} onClick={(e) => drawerFn(e)}>Curriculum</Button>
                            <Box sx={{ height: "400px", width: "100%", bgcolor: "secondary.main", borderRadius: 5 }}>
                                <VideoPlayer path={player} />
                            </Box>
                            <Typography variant='h6' margin={2}>{data.description}</Typography>
                        </Stack>
                    </Box>
                </Stack>
            </BackWrapper>
        </>
    )
}

export default AdminEditCourse;