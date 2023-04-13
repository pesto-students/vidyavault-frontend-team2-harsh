import { Navigate, useNavigate } from 'react-router-dom';
import React, { useEffect, useMemo, useState } from 'react'
import BackWrapper from '../../components/backWrapper/BackWrapper';
import menuList from './menuList';
import Card from '../../components/card/Card';
import debounce from 'lodash.debounce';
import { BACKEND_URL } from '../../Constant';
import { Box, Grid } from '@mui/material';
import { Createbanner } from '../../components/advertise/Ad';
import { useDispatch, useSelector } from 'react-redux';
import { add, addFiles, clearArr } from '../../store/courseSlice';
import courseFiles from '../../Mock_Data/courseFiles.json';
import CustomAppBar from '../../components/header/CustomAppBar';
import CustomChips from '../../components/header/CustomChips';
import Snackbar from '../../components/snackbar/Snackbar';
import { getUser } from './redux/userData';
import { startLoading, stopLoading } from '../../store/systemSlice';

const UserDashboard = () => {
  const [courses, setCourse] = useState([]);
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let auth = useSelector((state) => state.auth);

  const coursesPage = (item) => {
    let id = item._id;
    <Navigate to={"/dash/showcurriculum"} state={{ id }} />
  }

  useEffect(() => {
    dispatch(startLoading());
    let res = getUser(`${BACKEND_URL}/user/feed`, auth.token);
    res.then((x) => {
      setCourse(x.data);
      dispatch(stopLoading());
    })
  }, [])

  return (
    <BackWrapper menuList={menuList}>
      <Box sx={{ position: "relative", minHeight: "100vh" }}>
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

        <Box sx={{
          position: "absolute",
          bottom: "0px",
          width: "100%"
        }}>
          <Createbanner />
        </Box>
      </Box>
    </BackWrapper>
  )
}

export default UserDashboard;