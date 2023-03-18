import { useNavigate } from 'react-router-dom';
import React from 'react'
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

const UserDashboard = () => {
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

  return (
    <BackWrapper menuList={menuList}>
      <CustomAppBar />
      <CustomChips />
      <hr></hr>
      <Snackbar />
      <hr></hr>
      <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
      >
        {courses.map((item, index) => {
          return (<Box width="max-content" sx={{ margin: 2 }} key={index} onClick={() => coursesPage(item)}>
            <Card course={item} btn="subscribe" />
          </Box>)
        })}
      </Grid>
      <Createbanner />
    </BackWrapper>
  )
}

export default UserDashboard;