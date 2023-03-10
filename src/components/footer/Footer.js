import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';

export default function Footer() {
    const [value, setValue] = React.useState('recents');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{
            width: "100%",
            height: "30vh",
            bgcolor: "secondary.main",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
        }}>
            <Typography color="primary.main" variant='h6'>VidyaVault</Typography>
            <Typography color="primary.main" variant='h6'>VidyaVault</Typography>
            <Typography color="primary.main" variant='h6'>VidyaVault</Typography>
            <Typography color="primary.main" variant='h6'>VidyaVault</Typography>
        </Box>
        // <BottomNavigation sx={{ width: "100%", height: "30vh", bgcolor: "secondary.main"}} value={value} onChange={handleChange}>
        //   <BottomNavigationAction
        //     label="Recents"
        //     value="recents"
        //     icon={<RestoreIcon />}
        //   />
        //   <BottomNavigationAction
        //     label="Favorites"
        //     value="favorites"
        //     icon={<FavoriteIcon />}
        //   />
        //   <BottomNavigationAction
        //     label="Nearby"
        //     value="nearby"
        //     icon={<LocationOnIcon />}
        //   />
        //   <BottomNavigationAction 
        //   label="Folder" 
        //   value="folder" 
        //   icon={<FolderIcon />} />
        // </BottomNavigation>
    );
}