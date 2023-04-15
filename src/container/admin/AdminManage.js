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
import { getUser } from '../user/redux/userData';
import { startLoading, stopLoading } from '../../store/systemSlice';


const AdminManage = () => {
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
    navigate('/admindash/courseedit');
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

export default AdminManage;

























// import { useNavigate } from 'react-router-dom';
// import React, { useEffect, useState } from 'react'
// import BackWrapper from '../../components/backWrapper/BackWrapper';
// import menuList from './menuList';
// import Card from '../../components/card/Card';
// import { Box, Button, CircularProgress, Grid, Stack, Typography } from '@mui/material';
// import { Createbanner } from '../../components/advertise/Ad';
// import { useDispatch, useSelector } from 'react-redux';
// import { add, addFiles, clearArr } from '../../store/courseSlice';
// // import courseFiles from '../../Mock_Data/courseFiles.json';
// import CustomAppBar from '../../components/header/CustomAppBar';
// import CustomChips from '../../components/header/CustomChips';
// import Snackbar from '../../components/snackbar/Snackbar';
// import { BACKEND_URL } from '../../Constant';
// import axios from 'axios';
// import { getUser } from '../user/redux/userData';
// import { startLoading, stopLoading } from '../../store/systemSlice';


// const AdminManage = () => {
//   const [courses, setCourses] = useState([]);
//   let auth = useSelector((state) => state.auth);
//   let sys = useSelector((state) => state.system);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   let loading = sys.isLoading;

//   const coursesPage = async (item) => {
//     dispatch(add(item));
//     let header = {
//       headers: { authorization: `Bearer ${auth.token}` }
//     }
//     axios.post(`${BACKEND_URL}/course`, {"courseId": item._id}, header)
//     .then((x) => {
//       dispatch(addFiles(x.data.data.modules));
//     })
//     navigate('/dash/edit');
//   }

//   let handleFn = () => {
//     navigate('/dash/cc');
//   }

//   useEffect(() => {
//     dispatch(startLoading());
//     let res = getUser(`${BACKEND_URL}/user`, auth.token);
//     res.then((x) => {
//       setCourses(x.data.data.ownCourses);
//       dispatch(stopLoading());
//     })
//   }, [])

//   return (
//     <BackWrapper menuList={menuList}>
//       <Box sx={{ position: "relative", minHeight: "90vh" }}>
//         <CustomAppBar />
//         <Snackbar />

//         {loading ? (
//           <Stack width="100%" height="100%" alignItems="center" justifyContent="center">
//             <CircularProgress color="third" size="5rem" />
//           </Stack>
//         ) : (courses.length == 0) ? (
//           <Box>
//             <Stack alignItems="center" justifyContent="center" height="50vh" spacing={1.4}>
//               <Typography variant='h2'>Waiting for your first course</Typography>
//               <Typography variant='h5'>Click on below button to upload your course</Typography>
//               <Button variant='contained' color='secondary' onClick={handleFn}>Go to create course</Button>
//             </Stack>
//           </Box>
//         ) : (<Grid
//           container
//           direction="row"
//           justifyContent="center"
//           alignItems="flex-start"
//         >
//           {courses.map((item, index) => {
//             return (<Box sx={{ margin: 2 }} key={index} onClick={() => coursesPage(item)}>
//               <Card course={item} btn="delete" />
//             </Box>)
//           })}
//         </Grid>)
//         }
        
//       </Box>
//       <Box sx={{
//           position: "relative",
//           bottom: "0px",
//           width: "100%"
//         }}>
//           <Createbanner />
//         </Box>
//     </BackWrapper>
//   )
// }

// export default AdminManage;



















// // import { useNavigate } from "react-router-dom"
// // import React, { useEffect } from "react"
// // import BackWrapper from "../../components/backWrapper/BackWrapper"
// // import menuList from "./menuList"
// // import MediaCard from "../../components/card/Card"
// // import CardHeader from "@mui/material/CardHeader"
// // import Card from "@mui/material/Card"
// // import { Box, CardContent, Grid, Typography } from "@mui/material"
// // import { Createbanner } from "../../components/advertise/Ad"
// // import { useDispatch } from "react-redux"
// // import { add, addFiles, clearArr } from "../../store/courseSlice"
// // import courseFiles from "../../Mock_Data/courseFiles.json"
// // import CustomAppBar from "../../components/header/CustomAppBar"
// // import Snackbar from "../../components/snackbar/Snackbar"
// // import AddIcon from "@mui/icons-material/Add"
// // import IconButton from "@mui/material/IconButton"
// // import { useState } from "react"
// // import courses from "../../Mock_Data/course.json"
// // import { Link } from "react-router-dom"
// // import { SearchFn } from "../../components/Search/Search"
// // import { getData } from "../../components/DataFetch/DataFetch"

// // const AdminManage = () => {
// // 	let [data, setData] = useState([])
// // 	let [showdata, setShowData] = useState(courses)
// // 	let [query, setQuery] = useState("")
// // 	const dispatch = useDispatch()
// // 	const navigate = useNavigate()
// // 	const coursesPage = (item) => {
// // 		dispatch(clearArr())
// // 		dispatch(add(item))
// // 		let files = courseFiles.filter((list) => {
// // 			return list.CourseId == item._id
// // 		})
// // 		let current = files[0].CourseData
// // 		dispatch(addFiles(current))
// // 		navigate("/admindash")
// // 	}

// // 	useEffect(() => {
// // 		// let header = { headers: { authorization: `Bearer ${auth.token}` } }
// // 		// const result = getData(`/user , header)
// // 		// setData(result.data.ownCourses)
// // 	}, [])

// // 	useEffect(() => {
// // 		if (query !== "") {
// // 			let searchedData = SearchFn(data, query)
// // 			setShowData(searchedData)
// // 		} else {
// // 			setData(courses)
// // 		}
// // 		console.log("1")
// // 	}, [query])

// // 	return (
// // 		<BackWrapper menuList={menuList}>
// // 			<CustomAppBar query={query} setQuery={setQuery} />
// // 			<Snackbar />
// // 			<Grid container direction='row' justifyContent='center' alignItems='flex-start'>
// // 				{showdata.length !== 0 ? (
// // 					showdata.map((course, index) => {
// // 						return (
// // 							<Box sx={{ margin: 2 }} key={index} onClick={() => coursesPage(course)}>
// // 								<MediaCard course={course} btn='Edit' />
// // 							</Box>
// // 						)
// // 					})
// // 				) : (
// // 					<Box
// // 						sx={{
// // 							display: "flex",
// // 							justifyContent: "center",
// // 							alignItems: "center",
// // 							backgroundColor: "#20262e",
// // 							height: "100vh",
// // 							width: "100vw"
// // 						}}
// // 					>
// // 						<Card elevation={10} sx={{ display: "flex", width: "70%", borderRadius: 2 }}>
// // 							<CardContent sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
// // 								<IconButton aria-label='Add course' component={Link} to='/admindash/cc'>
// // 									<AddIcon color={"third"} />
// // 								</IconButton>
// // 								<Typography sx={{ opacity: 0.5 }} color='secondary.light' variant='body1'>
// // 									Click the button to add course
// // 								</Typography>
// // 							</CardContent>
// // 						</Card>
// // 					</Box>
// // 				)}
// // 			</Grid>
// // 			{/* <Createbanner /> */}
// // 		</BackWrapper>
// // 	)
// // }

// // export default AdminManage
