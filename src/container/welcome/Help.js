import { Box } from '@mui/system';
import React, { useState } from 'react'
import BackWrapper from '../../components/backWrapper/BackWrapper';
import menuList from './menuList';
import { Button } from '@mui/material';
import { useErrorHandler } from 'react-error-boundary'

const Help = () => {
  const [count, setCount] = useState(0);
  const handleError = useErrorHandler()
  let ErrorFn = () => {
    try {
      if(count > 3) {
        throw Error("count is too high");
      }else {
      setCount(count+1);
      }
    } catch (error) {
      handleError(error);
    }
  }
  return (
    <BackWrapper menuList={menuList}>
jkdbssssssssssssssssssssssssssssssssssssssssssssssssssss{count}
        <Button variant='contained' onClick={() => ErrorFn()}>Throw Error</Button>

    </BackWrapper>
  )
}

export default Help;

