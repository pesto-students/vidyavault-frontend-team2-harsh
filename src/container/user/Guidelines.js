import React from 'react';
import BackWrapper from '../../components/backWrapper/BackWrapper';
import menuList from './menuList';
import { Box, Typography } from '@mui/material';

const Guidelines = () => {
  return (
    <BackWrapper menuList={menuList}>
    <Box sx={{display: "flex", alignItems: "center", justifyContent: "center"}}>
      <Typography variant='h4' color="secondary.main">We are working on it</Typography>
    </Box>
    </BackWrapper>
  )
}

export default Guidelines;