import React, {useEffect, useMemo, useState} from 'react';
import './friendFunding-page.scss';
import Header from "../../organisms/header/header";
import Footer from "../../organisms/footer/footer";
import SingleFriendFunding from "../../molecules/Single-friendFunding/single-friendFunding";
import FriendFundingDropdownBtn from "../../atoms/friendFunding-DropdownBtn/friendFunding-DropdownBtn";
import axios from "axios";
import FriendNonFunding from "../../organisms/contents/FriendNonFunding/FriendNonFunding";

import NonMemberModal from "../../atoms/nonMemberModal/nonMemberModal";

const FriendFundingPage = () => {
    const [modalShowState, setModalShowState] = useState(false);
    const [friendFundingData, setFriendFundingData] = useState({ data: [] });
    const [sortOption, setSortOption] = useState('최신 등록순');

    const parseDeadlineRank = (deadlineText) => {
        if (typeof deadlineText !== 'string') {
            return Number.MAX_SAFE_INTEGER;
        }

        const match = deadlineText.match(/^D-(\d+)$/i);
        if (match) {
            return Number.parseInt(match[1], 10);
        }

        return Number.MAX_SAFE_INTEGER;
    };

    const sortedFriendFundingData = useMemo(() => {
        const rawItems = Array.isArray(friendFundingData?.data) ? [...friendFundingData.data] : [];

        rawItems.sort((left, right) => {
            if (sortOption === '이름순') {
                return (left?.nickName || '').localeCompare(right?.nickName || '', 'ko');
            }

            if (sortOption === '마감 임박순') {
                return parseDeadlineRank(left?.friendFundingDeadlineDate) - parseDeadlineRank(right?.friendFundingDeadlineDate);
            }

            return (right?.fundingId || 0) - (left?.fundingId || 0);
        });

        return {
            ...friendFundingData,
            data: rawItems,
        };
    }, [friendFundingData, sortOption]);

    useEffect(() => {
        const fetchData = async () => {
            try {

                const accessToken = localStorage.getItem('accessToken');
                if (!accessToken) {
                    setModalShowState(true);
                    return;
                }

                const response = await axios.get(`${process.env.REACT_APP_FUNDINGBOOST}/funding/friends`, {

                    responseType: 'json',
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${accessToken}`,
                    },
                });
                setFriendFundingData(response.data);
                console.log("response ->", response.data);
            } catch (error) {
                console.error("Error data:", error);
            }
        };
        fetchData();
    },[] );

    return (
        <div>
            <Header />
            {modalShowState && <NonMemberModal message="로그인 후 친구들의 펀딩을 구경해보세요."/>}
            <FriendFundingDropdownBtn
                sortOption={sortOption}
                onSortChange={setSortOption}
            />
            {sortedFriendFundingData.data && sortedFriendFundingData.data.length > 0 ? (
                <SingleFriendFunding friendFundingData={sortedFriendFundingData} />
            ):(
            <FriendNonFunding />
            )}
            <Footer />
        </div>
    );
};

export default FriendFundingPage;
