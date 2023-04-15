import { Typography } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { BACKEND_URL } from '../../Constant';
import { useLocation } from 'react-router-dom';

const ShowCurriculum = () => {
    let [content, setContent] = useState([]);
    let auth = useSelector((state) => state.auth)

    // useEffect(() => {
    //     let header = { headers: { authorization: `Bearer ${auth.token}` } }
    //     axios.post(`${BACKEND_URL}/course`, { courseId: id }, header)
    //         .then((x) => {
    //             console.log("content", x);
    //             // setContent(x)
    //         })
    // }, [])

    return (
        <>
            {/* <Stack alignItems="center">
                <Typography variant='h3' margin={2}>curriculum</Typography>
                {content.map((item, index) => {
                    return (
                        <Box key={index} sx={{ width: "100%", height: "100%" }}>
                            <Button variant='contained' size="small" fullWidth color='third' sx={{ margin: 0.4, textTransform: "none" }} onClick={() => toggleFn(index)}><Typography variant='h5' margin={1} >{item.moduleName}</Typography></Button>
                            {index == itemIndex && item.files.map((VideoFile, index) => {
                                return (<Button variant='contained' size="small" fullWidth key={index} sx={{ textTransform: "none" }} onClick={(e) => playVideo(e, VideoFile)}><Typography variant='h6' margin={1}>{VideoFile.lecName}</Typography></Button>)
                            })}
                        </Box>
                    )
                })}
            </Stack> */}
        </>
    )
}

export default ShowCurriculum