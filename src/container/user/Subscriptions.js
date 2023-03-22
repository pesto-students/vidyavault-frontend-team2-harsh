import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import BackWrapper from '../../components/backWrapper/BackWrapper';
import menuList from './menuList';
import Card from '../../components/card/Card';
// import courses from '../../Mock_Data/course.json';
import { Box, Grid } from '@mui/material';
import { Createbanner } from '../../components/advertise/Ad';
import { useDispatch, useSelector } from 'react-redux';
import { add, addFiles, clearArr } from '../../store/courseSlice';
import courseFiles from '../../Mock_Data/courseFiles.json';
import CustomAppBar from '../../components/header/CustomAppBar';
import CustomChips from '../../components/header/CustomChips';
import Snackbar from '../../components/snackbar/Snackbar';
import { BACKEND_URL } from '../../Constant'
import { getUser } from './redux/userData';

const Subscriptions = () => {
  const [courses, setCourses] = useState([]);
  let auth = useSelector((state) => state.auth)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const coursesPage = (item) => {
    dispatch(clearArr());
    dispatch(add(item));
    let files = courseFiles.filter((list) => {
      return list.CourseId == item._id;
    });
    let current = files[0].CourseData;
    dispatch(addFiles(current));
    navigate('/dash/curriculum');
  }

  useEffect(() => {
    let res = getUser(`${BACKEND_URL}/user/${auth.id}`, auth.token);
    res.then((x) => {
      // console.log(x.data.data.ownCourses);
      setCourses(x.data.data.ownCourses);
    })
    // console.log("response getUser",res, auth);
  }, [])

  return (
    <BackWrapper menuList={menuList}>
      <CustomAppBar />
      <Snackbar />
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
      >
        {courses.map((item, index) => {
          return (<Box sx={{ margin: 2 }} key={index} onClick={() => coursesPage(item)}>
            <Card course={item} btn="subscribe" />
          </Box>)
        })}
      </Grid>
      <Createbanner />
    </BackWrapper>
  )
}

export default Subscriptions;