import { Box } from '@mui/system';
import React from 'react'
import AdminForm from '../../components/adminForm/AdminForm';
import Navbar from '../../components/navbar/Navbar';

const Organization = () => {
    return (
        <>
            <Navbar />
            <Box sx={{ height: "100vh", width: "100%", padding: "1rem", paddingTop: "10vh" }}>
                <AdminForm />
            </Box>
        </>
    )
}

export default Organization;