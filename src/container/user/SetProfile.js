import React from 'react';
import ProfileForm from '../../components/Forms/ProfileForm';
import BackWrapper from '../../components/backWrapper/BackWrapper';
import menuList from './menuList';

const SetProfile = () => {
  return (
    <BackWrapper menuList={menuList}>
        <ProfileForm />
    </BackWrapper>
  )
}

export default SetProfile;