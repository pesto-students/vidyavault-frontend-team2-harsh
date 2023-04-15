import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import BackWrapper from '../../components/backWrapper/BackWrapper';
import menuList from './menuList';
import Card from '../../components/card/Card';
import { Box, Button, CircularProgress, Grid, Stack, Typography } from '@mui/material';
import { Createbanner } from '../../components/advertise/Ad';
import { useDispatch, useSelector } from 'react-redux';
import { add, addFiles, clearArr } from '../../store/courseSlice';
// import courseFiles from '../../Mock_Data/courseFiles.json';
import CustomAppBar from '../../components/header/CustomAppBar';
import CustomChips from '../../components/header/CustomChips';
import Snackbar from '../../components/snackbar/Snackbar';
import { BACKEND_URL } from '../../Constant';
import axios from 'axios';
import { getUser } from './redux/userData';
import { startLoading, stopLoading } from '../../store/systemSlice';


const Manage = () => {
  const [courses, setCourses] = useState([]);
  let auth = useSelector((state) => state.auth);
  let sys = useSelector((state) => state.system);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let loading = sys.isLoading;

  const coursesPage = async (item) => {
    dispatch(add(item));
    let header = {
      headers: { authorization: `Bearer ${auth.token}` }
    }
    axios.post(`${BACKEND_URL}/course`, {"courseId": item._id}, header)
    .then((x) => {
      dispatch(addFiles(x.data.data.modules));
    })
    navigate('/dash/edit');
  }

  let handleFn = () => {
    navigate('/dash/cc');
  }

  useEffect(() => {
    dispatch(startLoading());
    let res = getUser(`${BACKEND_URL}/user`, auth.token);
    res.then((x) => {
      setCourses(x.data.data.ownCourses);
      dispatch(stopLoading());
    })
  }, [])

  return (
    <BackWrapper menuList={menuList}>
      <Box sx={{ position: "relative", minHeight: "90vh" }}>
        <CustomAppBar />
        <Snackbar />

        {loading ? (
          <Stack width="100%" height="100%" alignItems="center" justifyContent="center">
            <CircularProgress color="third" size="5rem" />
          </Stack>
        ) : (courses.length == 0) ? (
          <Box>
            <Stack alignItems="center" justifyContent="center" height="50vh" spacing={1.4}>
              <Typography variant='h2'>Waiting for your first course</Typography>
              <Typography variant='h5'>Click on below button to upload your course</Typography>
              <Button variant='contained' color='secondary' onClick={handleFn}>Go to create course</Button>
            </Stack>
          </Box>
        ) : (<Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="flex-start"
        >
          {courses.map((item, index) => {
            return (<Box sx={{ margin: 2 }} key={index} onClick={() => coursesPage(item)}>
              <Card course={item} btn="delete" />
            </Box>)
          })}
        </Grid>)
        }
        
      </Box>
      <Box sx={{
          position: "relative",
          bottom: "0px",
          width: "100%"
        }}>
          <Createbanner />
        </Box>
    </BackWrapper>
  )
}

export default Manage;