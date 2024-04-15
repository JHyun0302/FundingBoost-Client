// 프로필 이미지
import React from 'react';
import './ProfileImg.scss';

import defaultProfileImg from '../../assets/defaultProfile.svg';

function ProfileImg({profile}){
    return(
        <img src={profile || defaultProfileImg} alt="프로필 이미지" className="profile-img" />
    );
}

export default ProfileImg;