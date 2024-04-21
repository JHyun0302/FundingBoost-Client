import React from 'react';
import '../gifthub/gifthub.scss';
import SingleGifthubItem from '../../../molecules/SingleGifthubItem/singlegifthubitem';
import Gifthubresult from "../../../molecules/GifthubResult/gifthubresult"

const GifthubPane = () => {
    return (
        <div className="gifthub-page-container">
            <div className="gifthub-item-pane-container">
                <SingleGifthubItem />
                <SingleGifthubItem />
                <SingleGifthubItem />
                <SingleGifthubItem />
            </div>
            <div className="gifthub-result-pane">
                <Gifthubresult />
            </div>
        </div>
    );
}

export default GifthubPane;
