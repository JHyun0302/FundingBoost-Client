import React, { useEffect, useMemo, useState } from 'react';
import './wishList.scss';
import WishListSingleItem from "../wishList-SingleItem/wishList-SingleItem";

const ITEMS_PER_PAGE = 10;

const WishList = ({wishListData, onRemoveBookmark, isRemoving}) => {
    const bookmarkItemDtos = wishListData?.bookmarkItemDtos ?? [];
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.max(1, Math.ceil(bookmarkItemDtos.length / ITEMS_PER_PAGE));
    const pagedBookmarkItemDtos = useMemo(() => {
        const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
        return bookmarkItemDtos.slice(startIndex, startIndex + ITEMS_PER_PAGE);
    }, [bookmarkItemDtos, currentPage]);

    useEffect(() => {
        setCurrentPage(1);
    }, [bookmarkItemDtos.length]);

    return (
        <div className="wishList">
            <div className="wishList-container">
                <div className="wishList-box">
                    <div className="wish-list">
                        <div className="wish-list-head">
                            <div className="wish-list-wish-management">위시리스트</div>
                        </div>

                        <div className="wish-list-line"/>

                        <div className="wishList-SingleItem">
                            {pagedBookmarkItemDtos.map((wishListItemData, index) => (
                            <div key={`${wishListItemData.itemId}-${index}`} className="wish-list-single-item">
                                <WishListSingleItem
                                    wishListData={wishListItemData}
                                    onRemoveBookmark={onRemoveBookmark}
                                    isRemoving={isRemoving}
                                />
                            </div>
                                ))}

                        </div>
                        {bookmarkItemDtos.length === 0 && (
                            <div className="wishList-empty-state">위시리스트에 담긴 상품이 없습니다.</div>
                        )}
                        {bookmarkItemDtos.length > ITEMS_PER_PAGE && (
                            <div className="wishListPagination">
                                <button
                                    type="button"
                                    className="wishListPageButton"
                                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                                    disabled={currentPage === 1}
                                >
                                    이전
                                </button>
                                <div className="wishListPageNumbers">
                                    {Array.from({ length: totalPages }, (_, index) => {
                                        const pageNumber = index + 1;
                                        return (
                                            <button
                                                type="button"
                                                key={pageNumber}
                                                className={`wishListPageButton ${currentPage === pageNumber ? 'active' : ''}`}
                                                onClick={() => setCurrentPage(pageNumber)}
                                            >
                                                {pageNumber}
                                            </button>
                                        );
                                    })}
                                </div>
                                <button
                                    type="button"
                                    className="wishListPageButton"
                                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                                    disabled={currentPage === totalPages}
                                >
                                    다음
                                </button>
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default WishList;
