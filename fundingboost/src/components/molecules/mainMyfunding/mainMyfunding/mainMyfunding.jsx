import React,{useEffect, useState} from 'react';
import './mainMyFunding.scss';
import MemberYesFunding from "../memberYesFunding/memberYesFunding";
import MemberNoFunding from "../memberNoFunding/memberNoFunding";
import NonMember from "../nonMember/nonMember";
import axios from "axios";

const MainMyfunding = () => {
    const [memberFundingData, setFundingMemberData] = useState({});
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://58aa-112-218-95-58.ngrok-free.app/api/v1/home?memberId=1',{
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
            <MemberYesFunding memberFundingData={memberFundingData} />
            {/*<MemberNoFunding/>*/}

        </div>
    );
};

export default MainMyfunding;
