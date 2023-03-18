import { Box } from '@mui/system';
import React from 'react'
import AdminForm from '../../components/adminForm/AdminForm';
import Navbar from '../../components/navbar/Navbar';

const Organization = () => {
    return (
        <>
            <Box sx={{ height: "fit-content", width: "100%", padding: "1rem" }}>
                <AdminForm />
            </Box>
        </>
    )
}

export default Organization;