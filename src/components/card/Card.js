import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Stack } from '@mui/system';
import { KeyboardArrowRightIcon } from '../atoms/icons/icons';

export default function ImgMediaCard(props) {
    let course = props.course;
    let btn = props.btn;

    let subFn = (e) => {
        e.stopPropagation();
    }

    // let extendCard = (e) => {
    //     e.stopPropagation();
    // }

    return (
        <Box sx={{ position: "relative", bgcolor: "secondary.main", width: "max-content", height: "fit-content", borderRadius: 3 }}>
            {/* <Box sx={{ position: "absolute", top: 0, left: 0, zIndex: "5", m: 0.5 }} onClick={(e) => extendCard(e)}>
                <KeyboardArrowRightIcon color="primary" fontSize='large' />
            </Box> */}
            <Card sx={{ width: { xs: 240, sm: 280, md: 300 }, textAlign: "center", bgcolor: "primary.main", borderTopLeftRadius: "130px" }}>
                <CardMedia
                    component="img"
                    alt={course.courseName}
                    height="140px"
                    image={course.thumbnail}
                />
                <Box width="100%" >
                    <Typography gutterBottom variant="h5">
                        {course.courseName}
                    </Typography>
                    <Typography variant="body2" color="secondary.main">
                        {course.description}
                    </Typography>
                    <Stack direction="row" alignitems="center" justifyContent="center" spacing={1} m={2}>
                        <Button size="small" color='secondary' variant='contained'>Share</Button>
                        {btn && <Button size="small" color='secondary' variant='contained' onClick={(e) => subFn(e)}>{btn}</Button>}
                    </Stack>
                </Box>
            </Card>
        </Box>
    );
}