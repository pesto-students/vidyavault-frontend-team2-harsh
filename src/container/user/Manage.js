import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import BackWrapper from '../../components/backWrapper/BackWrapper';
import menuList from './menuList';
import Card from '../../components/card/Card';
import courses from '../../Mock_Data/course.json';
import { Box, Grid } from '@mui/material';
import { Createbanner } from '../../components/advertise/Ad';
import { useDispatch } from 'react-redux';
import { add, addFiles, clearArr } from '../../store/courseSlice';
import courseFiles from '../../Mock_Data/courseFiles.json';
import CustomAppBar from '../../components/header/CustomAppBar';
import CustomChips from '../../components/header/CustomChips';
import Snackbar from '../../components/snackbar/Snackbar';
import { BACKEND_URL } from '../../Constant';
import axios from 'axios';

const Manage = () => {
  // const [courses, setCourses] = useState([]);

  // const getCourses = () => {
  //   const id = localStorage.getItem("userId");
  //   const ID = JSON.parse(id);
  //   const token = localStorage.getItem("token");
  //   const Token = JSON.parse(token);
  //   axios.get(`${BACKEND_URL}/user/${ID}`,
  //     {
  //       headers: { authorization: `Bearer ${Token}` }
  //     })
  //     .then((res) => {
  //       console.log(res.data.data.ownCourses)
  //       setCourses(res.data);
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //     })
  // }


  // useEffect(() => {
  //   getCourses()
  // }, [])

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
    navigate('/dash/edit');
  }

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

export default Manage;