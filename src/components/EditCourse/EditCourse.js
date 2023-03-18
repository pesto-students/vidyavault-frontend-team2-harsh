import { Button, Checkbox, Drawer, Typography } from '@mui/material';
import { Box, Stack } from '@mui/system';
import React, { useEffect, useState } from 'react';
import BackWrapper from '../backWrapper/BackWrapper';
import menuList from '../../container/user/menuList';
import { useDispatch, useSelector } from 'react-redux';
import { openModel } from '../../store/systemSlice';
import { EditIcon, DeleteIcon, AddIcon } from '../atoms/icons/icons';
import CustomModel from '../customModel.js/CustomModel';


const EditCourse = () => {
    const [open, setOpen] = useState("none");
    const [itemIndex, setItemIndex] = useState();
    let res = useSelector((state) => state.courses);
    let dispatch = useDispatch();

    let data = res.courses[res.courses.length - 1];
    let CourseData = res.courseFile[res.courseFile.length - 1];

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

    const addFiles = (e) => {
        e.stopPropagation();
        dispatch(openModel());
    }

    const addModule = (e) => {
        e.preventDefault();
        e.stopPropagation();
        dispatch(openModel());
    }

    const editVName = (e, file) => {
        console.log(file);
    }

    return (
        <>
            <BackWrapper menuList={menuList}>
                <Stack direction="row">
                    <CustomModel />
                    <Box sx={{ width: "65%", height: "100vh", borderRadius: 5, float: "right", display: { sm: open, md: "block", xs: open } }}>
                        <Stack alignItems="center">
                            <Typography variant='h3' margin={2}>curriculum</Typography>
                            {CourseData.map((item, index) => {
                                return (
                                    <Box key={index} sx={{ width: "100%", height: "100%" }}>
                                        <Box bgcolor='third.main' sx={{ margin: 0.8, padding: 1, borderRadius: 1 }} onClick={() => toggleFn(index)}>
                                        <Stack direction="row" flexWrap="wrap">
                                            <Typography variant='h5' margin={1} >{item.moduleName}</Typography>
                                            <Button variant='outlined' color="secondary" sx={{ marginLeft: "auto" }} onClick={(e) => addFiles(e)}>
                                                <Typography variant='h6'>Add video in this module</Typography>
                                                </Button>
                                                </Stack>
                                        </Box>
                                        {index == itemIndex && item.files.map((VideoFile, index) => {
                                            return (<Box key={index} sx={{ textTransform: "none" }}>
                                                <Stack direction="row" margin={1} alignItems="center" justifyContent="center">
                                                    <EditIcon onClick={(e) => editVName(e, VideoFile)} />
                                                    <Typography variant='h6' margin={1}>{VideoFile.lecName}</Typography>
                                                    <DeleteIcon />
                                                </Stack>
                                            </Box>)
                                        })}
                                    </Box>
                                )
                            })}
                            <Button variant='contained' startIcon={<AddIcon />} color='third' sx={{ margin: 0.4 }} onClick={(e) => addModule(e)}><Typography variant='h6' margin={1}>Add new module</Typography></Button>
                        </Stack>
                    </Box>


                    <Box sx={{ width: { md: "60%", sm: "100%", xs: "100%" }, height: "100vh", bgcolor: "primary.main", borderRadius: 5, margin: 1 }} onClick={(e) => handleFn(e)}>
                        <Stack alignItems="center">
                            <Typography variant='h4' margin={2}>{data.courseName}</Typography>
                            <Button variant='contained' color="secondary" sx={{ display: { md: "none" } }} onClick={(e) => drawerFn(e)}>Curriculum</Button>
                            <Box sx={{ height: "400px", width: "100%", bgcolor: "secondary.main", borderRadius: 5 }}>
                                <video width="100%"
                                    height="100%"
                                    controls
                                    preload="auto"
                                    loop
                                    poster='https://icons.veryicon.com/png/o/object/material-design-icons/movie-46.png'
                                >
                                    <source src="https://res.cloudinary.com/dgj1tfu0j/video/upload/v1679123311/samples/sea-turtle.mp4"
                                        type="video/mp4" />
                                    <source src="https://res.cloudinary.com/dgj1tfu0j/video/upload/v1679123311/samples/sea-turtle.mp4"
                                        type="video/ogg" />
                                </video>
                            </Box>
                            <Typography variant='h6' margin={2}>{data.description}</Typography>
                        </Stack>
                    </Box>
                </Stack>
            </BackWrapper>
        </>
    )
}

export default EditCourse;