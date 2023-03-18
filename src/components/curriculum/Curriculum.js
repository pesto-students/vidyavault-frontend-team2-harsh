import { Button, Checkbox, Drawer, Typography } from '@mui/material';
import { Box, Stack } from '@mui/system';
import React, { useEffect, useState } from 'react';
import BackWrapper from '../backWrapper/BackWrapper';
import menuList from '../../container/user/menuList';
import { useSelector } from 'react-redux';
import { EditIcon, DeleteIcon, AddIcon } from '../atoms/icons/icons';

const Curriculum = () => {
    const [open, setOpen] = useState("none");
    const [itemIndex, setItemIndex] = useState();
    let data;
    let res = useSelector((state) => state.courses);
    let CourseData;

    console.log(res);
    if (res.courses.length == 0) {
        let sessionRes = window.sessionStorage.getItem("onGoing");
        let sessionFiles = window.sessionStorage.getItem("current");
        data = JSON.parse(sessionRes);
        CourseData = JSON.parse(sessionFiles);
        // console.log(data);
    } else {
        data = res.courses[res.courses.length - 1];
        CourseData = res.courseFile[res.courseFile.length - 1];
    }

    useEffect(() => {
        window.sessionStorage.setItem("onGoing", JSON.stringify(data));
        window.sessionStorage.setItem("current", JSON.stringify(CourseData));
    }, []);

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
    return (
        <>
            <BackWrapper menuList={menuList}>
                <Stack direction="row">
                    <Box sx={{ width: { md: "60%", sm: "100%", xs: "100%" }, height: "100vh", bgcolor: "primary.main", borderRadius: 5, margin: 1 }} onClick={(e) => handleFn(e)}>
                        <Stack alignItems="center">
                            <Typography variant='h4' margin={2}>{data.courseName}</Typography>
                            <Button variant='contained' color="secondary" sx={{ display: { md: "none" } }} onClick={(e) => drawerFn(e)}>Curriculum</Button>
                            <Box sx={{ height: "500px", width: "100%", bgcolor: "secondary.main", borderRadius: 5, overflow: "hidden" }}>

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

                    <Box sx={{ width: "40%", height: "100vh", borderRadius: 5, float: "right", display: { sm: open, md: "block", xs: open } }}>
                        <Stack alignItems="center">
                            <Typography variant='h3' margin={2}>curriculum</Typography>
                            {CourseData.map((item, index) => {
                                return (
                                    <Box key={index} sx={{ width: "100%", height: "100%" }}>
                                        <Button variant='contained' size="small" fullWidth color='third' sx={{ margin: 0.4, textTransform: "none" }} onClick={() => toggleFn(index)}><Typography variant='h5' margin={1} >{item.moduleName}</Typography></Button>
                                        {index == itemIndex && item.files.map((VideoFile, index) => {
                                            return (<Button variant='contained' size="small" fullWidth key={index} sx={{ textTransform: "none" }}><Typography variant='h6' margin={1}>{VideoFile.lecName}</Typography></Button>)
                                        })}
                                    </Box>
                                )
                            })}
                        </Stack>
                    </Box>
                </Stack>
            </BackWrapper>
        </>
    )
}

export default Curriculum;