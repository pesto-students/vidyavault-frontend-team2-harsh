import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export default function CustomChips() {
  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  return (
    <Stack direction="row" spacing={1} m={2}>
      <Chip label="Clickable" onClick={handleClick} color="secondary"/>
      <Chip label="Clickable" variant="outlined" onClick={handleClick} />
      <Chip label="Clickable" onClick={handleClick} color="secondary"/>
      <Chip label="Clickable" variant="outlined" onClick={handleClick} />
      <Chip label="Clickable" onClick={handleClick} color="secondary"/>
      <Chip label="Clickable" variant="outlined" onClick={handleClick} />
      <Chip label="Clickable" onClick={handleClick} color="secondary"/>
      <Chip label="Clickable" onClick={handleClick} color="secondary"/>
      <Chip label="Clickable" onClick={handleClick} color="secondary"/>
    </Stack>
  );
}