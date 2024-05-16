import React from 'react';
import './friendFunding-itemImg.scss';
import img from "../../../assets/logo.svg";
import NonItemImg from "../../../assets/nonItemImg.svg";

const FriendFundingItemImg = ({friendFundingData}) => {

    return (
        <div className="friendFunding-itemImg">
            <div className="frienditemlist">
                <div className="friendFunding-item-itemimg">
                    <img className="fundingItem1" alt="Rectangle"
                         src={friendFundingData?.friendFundingPageItemDtoList[0].itemImageUrl}/>

                    <div className="fundingItemSub">
                        {/*펀딩 item 존재 여부 체크*/}
                        {friendFundingData.friendFundingPageItemDtoList && friendFundingData.friendFundingPageItemDtoList.length > 1 ? (
                            <img className="fundingItem2" alt="Rectangle"
                                 src={friendFundingData?.friendFundingPageItemDtoList[1].itemImageUrl}/>
                        ) : (
                            <img className="fundingItem2" alt="Rectangle" src={NonItemImg}/>
                        )}

                        {friendFundingData.friendFundingPageItemDtoList && friendFundingData.friendFundingPageItemDtoList.length > 2 ? (
                            <img className="fundingItem3" alt="Rectangle"
                                 src={friendFundingData?.friendFundingPageItemDtoList[2].itemImageUrl}/>
                        ) : (
                            <img className="fundingItem3" alt="Rectangle" src={NonItemImg}/>
                        )}
                    </div>
                </div>


            </div>
        </div>
    );
};

export default FriendFundingItemImg;