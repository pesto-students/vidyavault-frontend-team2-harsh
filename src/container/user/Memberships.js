import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import BackWrapper from '../../components/backWrapper/BackWrapper';
import menuList from './menuList';
import Card from '../../components/card/Card';
import { Box, CircularProgress, Grid, Stack, Typography } from '@mui/material';
import { Createbanner } from '../../components/advertise/Ad';
import { useDispatch, useSelector } from 'react-redux';
import { add, addFiles, clearArr } from '../../store/courseSlice';
import courseFiles from '../../Mock_Data/courseFiles.json';
import CustomAppBar from '../../components/header/CustomAppBar';
import CustomChips from '../../components/header/CustomChips';
import Snackbar from '../../components/snackbar/Snackbar';
import { BACKEND_URL } from '../../Constant';
import axios from 'axios';
import { getUser } from './redux/userData';
import { startLoading, stopLoading } from '../../store/systemSlice';


const Memberships = () => {

  const [membershipList, setMembershipList] = useState([]);
  let auth = useSelector((state) => state.auth)
  let sys = useSelector((state) => state.system)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let loading = sys.isLoading;

  const orgCourses = (item) => {
    // dispatch(clearArr());
    // dispatch(add(item));
    // let files = courseFiles.filter((list) => {
    //   return list.CourseId == item._id;
    // });
    // let current = files[0].CourseData;
    // dispatch(addFiles(current));
    // navigate('/dash/edit');
  }

  useEffect(() => {
    dispatch(startLoading());
    let res = getUser(`${BACKEND_URL}/user`, auth.token);
    res.then((x) => {
      setMembershipList(x.data.data.memberships);
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
        ) : (membershipList.length == 0) ? (
          <Box>
            <Stack alignItems="center" justifyContent="center" height="50vh" spacing={1.4}>
              <Typography variant='h2'>Waiting for you to join your first Organization</Typography>
              <Typography variant='h4'>You can ask your admin for invite mail</Typography>
              <Typography variant='h6'>-- This is the only way you can join any Organization --</Typography>
            </Stack>
          </Box>
        ) : (<Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="flex-start"
        >
          {membershipList.map((item, index) => {
            return (<Box sx={{ margin: 2 }} key={index} onClick={() => orgCourses(item)}>
              <Card course={item} />
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

export default Memberships;