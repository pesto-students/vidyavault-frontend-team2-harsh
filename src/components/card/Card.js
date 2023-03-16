import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function ImgMediaCard(props) {
    let course = props.course;
    let btn = props.btn;

    let subFn = (e) => {
        e.stopPropagation();
    }

    return (
        <Box sx={{ bgcolor: "primary.dark", width: "fit-content", height: "fit-content", padding: 2, borderRadius: 2 }}>
            <Card sx={{ width: {xs: 280, sm: 280, md: 260}, textAlign: "center", bgcolor: "primary.main" }}>
                <CardMedia
                    component="img"
                    alt={course.courseName}
                    height="120"
                    image={course.thumbnail}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5">
                        {course.courseName}
                    </Typography>
                    <Typography variant="body2" color="secondary.main">
                        {course.description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" color='secondary' variant='contained'>Share</Button>
                    {btn && <Button size="small" color='secondary' variant='contained' onClick={(e) => subFn(e)}>{btn}</Button>}
                </CardActions>
            </Card>
        </Box>
    );
}