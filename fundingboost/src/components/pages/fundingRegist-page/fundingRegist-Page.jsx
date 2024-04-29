import React, {useEffect, useState} from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import HeaderBar from "../../organisms/header/header";
import Footer from "../../organisms/footer/footer";
import FundingRegistDetails from "../../molecules/FundingRegist/FundingRegistDetails/fundingRegistDetails";
import FundingRegistItem from "../../molecules/FundingRegist/FundingRegistItem/fundingRegistItem";
import './fundingRegist-Page.scss';
import axios from "axios";
import NonItemImg from "../../../assets/nonItemImg.svg";

function FundingRegistPage(props) {
    const [endDate, setEndDate] = useState(new Date());
    const [tag, setTag] = useState("");
    const [message, setMessage] = useState("");

    useEffect(() => {
        console.log("End Date:", endDate);
        console.log("Tag:", tag);
        console.log("Message:", message);
    }, [endDate, tag, message]);

    const handleSubmit = async () => {
        try {

            const response = await axios.post('https://a77443a3-ce83-4082-b661-bf8e8150b7da.mock.pstmn.io/funding', {
                endDate: endDate,
                tag: tag,
                message: message
            });
            console.log('POST 결과:', response.data);
        } catch (error) {
            console.error('POST 에러:', error);
        }
    };

    return (
        <div className="fundingRegist-Page">
            <HeaderBar />
            <div className="fundingRegistContent">
                <FundingRegistItem />
                <FundingRegistDetails className="fundingRegist-Details"/>
            </div>
            <Footer/>
        </div>
    );
}

export default FundingRegistPage;