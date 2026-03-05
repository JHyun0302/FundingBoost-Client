import React, {useEffect, useMemo, useState} from 'react';
import './friendFunding-page.scss';
import Header from "../../organisms/header/header";
import Footer from "../../organisms/footer/footer";
import SingleFriendFunding from "../../molecules/Single-friendFunding/single-friendFunding";
import FriendFundingDropdownBtn from "../../atoms/friendFunding-DropdownBtn/friendFunding-DropdownBtn";
import axios from "axios";
import FriendNonFunding from "../../organisms/contents/FriendNonFunding/FriendNonFunding";

import NonMemberModal from "../../atoms/nonMemberModal/nonMemberModal";

const FRIEND_FUNDING_ITEMS_PER_PAGE = 12;
const MAX_PAGE_BUTTONS = 7;

const FriendFundingPage = () => {
    const [modalShowState, setModalShowState] = useState(false);
    const [friendFundingData, setFriendFundingData] = useState({ data: [] });
    const [sortOption, setSortOption] = useState('최신 등록순');
    const [currentPage, setCurrentPage] = useState(1);

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

    const sortedFriendFundingItems = useMemo(() => {
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

        return rawItems;
    }, [friendFundingData, sortOption]);

    const totalPages = Math.max(1, Math.ceil(sortedFriendFundingItems.length / FRIEND_FUNDING_ITEMS_PER_PAGE));

    const pagedFriendFundingData = useMemo(() => {
        const startIndex = (currentPage - 1) * FRIEND_FUNDING_ITEMS_PER_PAGE;
        const currentItems = sortedFriendFundingItems.slice(startIndex, startIndex + FRIEND_FUNDING_ITEMS_PER_PAGE);
        return {
            ...friendFundingData,
            data: currentItems
        };
    }, [currentPage, sortedFriendFundingItems, friendFundingData]);

    const visiblePageNumbers = useMemo(() => {
        if (totalPages <= MAX_PAGE_BUTTONS) {
            return Array.from({ length: totalPages }, (_, index) => index + 1);
        }

        const half = Math.floor(MAX_PAGE_BUTTONS / 2);
        let start = Math.max(currentPage - half, 1);
        let end = start + MAX_PAGE_BUTTONS - 1;
        if (end > totalPages) {
            end = totalPages;
            start = end - MAX_PAGE_BUTTONS + 1;
        }
        return Array.from({ length: end - start + 1 }, (_, index) => start + index);
    }, [currentPage, totalPages]);

    useEffect(() => {
        setCurrentPage(1);
    }, [sortOption]);

    useEffect(() => {
        if (currentPage > totalPages) {
            setCurrentPage(totalPages);
        }
    }, [currentPage, totalPages]);

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
            {sortedFriendFundingItems.length > 0 ? (
                <>
                    <SingleFriendFunding friendFundingData={pagedFriendFundingData} />
                    {totalPages > 1 && (
                        <div className="friendFundingPaginationWrap">
                            <div className="friendFundingPaginationInfo">
                                {currentPage} / {totalPages}
                            </div>
                            <div className="friendFundingPagination">
                                <button
                                    type="button"
                                    className="friendFundingPageButton"
                                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                                    disabled={currentPage === 1}
                                >
                                    이전
                                </button>
                                <div className="friendFundingPageNumbers">
                                    {visiblePageNumbers.map((pageNumber) => (
                                        <button
                                            key={pageNumber}
                                            type="button"
                                            className={`friendFundingPageButton ${currentPage === pageNumber ? 'active' : ''}`}
                                            onClick={() => setCurrentPage(pageNumber)}
                                        >
                                            {pageNumber}
                                        </button>
                                    ))}
                                </div>
                                <button
                                    type="button"
                                    className="friendFundingPageButton"
                                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                                    disabled={currentPage === totalPages}
                                >
                                    다음
                                </button>
                            </div>
                        </div>
                    )}
                </>
            ):(
            <FriendNonFunding />
            )}
            <Footer />
        </div>
    );
};

export default FriendFundingPage;
