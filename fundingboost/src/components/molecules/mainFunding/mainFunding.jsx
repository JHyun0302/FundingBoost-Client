import React,{useEffect, useState} from 'react';
import './mainFunding.scss';
import MemberYesFunding from "../mainMyfunding/memberYesFunding/memberYesFunding";
import MemberNoFunding from "../mainMyfunding/memberNoFunding/memberNoFunding";
import MainFriendFunding from "../mainFriendFunding/mainFriendFunding/mainFriendFunding";
import NonMember from "../mainMyfunding/nonMember/nonMember";
import MainFriendNoFunding from "../mainFriendFunding/mainFriendNoFunding/mainFriendNoFunding";
import axios from "axios";

const MainFunding = () => {
    const [memberFundingData, setFundingMemberData] = useState({});
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://65fd-112-218-95-58.ngrok-free.app/api/v1/home?memberId=1',{

                    responseType: 'json',
                    headers: ({
                        "Content-Type" : "application/json",
                        "Access-Control-Allow-Credentials" : true,
                        "ngrok-skip-browser-warning": true,
                    }),
                });
                setFundingMemberData(response.data);
                console.log("response ->", response.data);
            } catch (error) {
                console.error("Error data:", error);
            }
        };
        fetchData();
    }, []);
    console.log("data:"+(memberFundingData.data));

    return (
        <div>
            {/*my 펀딩 존재 여부에 따른 변화*/}
            {memberFundingData.data?.homeMyFundingStatusDto?(
                <MemberYesFunding memberFundingData={memberFundingData} />
            ):(
                <MemberNoFunding memberFundingData={memberFundingData}/>
            )}

            {/*친구 펀딩 존재 여부에 따른 변화*/}
            {memberFundingData.data?.homeFriendFundingDtoList?.length > 0 ? (
                <MainFriendFunding memberFundingData={memberFundingData} />
            ) : (
                <MainFriendNoFunding />
            )}

            {/*<MemberNoFunding/>*/}

        </div>
    );
};

export default MainFunding;
