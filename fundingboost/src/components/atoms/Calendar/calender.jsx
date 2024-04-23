import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './calender.scss';


const Calender = () => {
    const today = new Date();
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(null);

    const onChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    };
    const formatDate = (date) => {
        // 날짜를 원하는 형식으로 포맷
        return date.toLocaleDateString('en-US');
    };
    return (

        <div >
            <div className="calender">
                <DatePicker
                    selected={startDate}
                    onChange={onChange}
                    minDate={today}
                    maxDate={endDate ? endDate : null}
                    startDate={today}
                    endDate={endDate}

                    selectsRange
                    inline
                    showDisabledMonthNavigation
                    isClearable={true}
                />
            </div>

            <div>
                {/* 선택한 시작 날짜와 종료 날짜를 출력 */}
                <p>Start Date: {startDate && formatDate(startDate)}</p>
                <p>End Date: {endDate && formatDate(endDate)}</p>
            </div>
        </div>

)
    ;
};

export default Calender;