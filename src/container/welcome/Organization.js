import { Box } from '@mui/system';
import React from 'react'
import AdminForm from '../../components/adminForm/AdminForm';
import BackWrapper from '../../components/backWrapper/BackWrapper';
import menuList from './menuList';

const Organization = () => {
    return (
        <>
            <BackWrapper menuList={menuList}>
                <Box sx={{ height: "100vh", width: "100%", padding: "1rem", paddingTop: "10vh" }}>
                    <AdminForm />
                </Box>
            </BackWrapper>
        </>
    )
}

export default Organization;