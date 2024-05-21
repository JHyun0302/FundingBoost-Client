import React,{useEffect, useState} from 'react';
import './mainFunding.scss';
import MemberYesFunding from "../mainMyfunding/memberYesFunding/memberYesFunding";
import MemberNoFunding from "../mainMyfunding/memberNoFunding/memberNoFunding";
import MainFriendFunding from "../mainFriendFunding/mainFriendFunding/mainFriendFunding";
import NonMember from "../mainMyfunding/nonMember/nonMember";
import MainFriendNoFunding from "../mainFriendFunding/mainFriendNoFunding/mainFriendNoFunding";
import axios from "axios";

const MainFunding = ({mainData}) => {

    return (
        <div>
            {/*my 펀딩 존재 여부에 따른 변화*/}
            {mainData.data?.homeMyFundingStatusDto?(
                <MemberYesFunding memberFundingData={mainData} />
            ):(
                <MemberNoFunding memberFundingData={mainData}/>
            )}

            {/*친구 펀딩 존재 여부에 따른 변화*/}
            {mainData.data?.homeFriendFundingDtoList?.length > 0 ? (
                <MainFriendFunding memberFundingData={mainData} />
            ) : (
                <MainFriendNoFunding />
            )}

            {/*<MemberNoFunding/>*/}

        </div>
    );
};

export default MainFunding;
