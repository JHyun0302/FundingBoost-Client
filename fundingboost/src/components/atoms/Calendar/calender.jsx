import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './calender.scss';


const Calender = ({ onDateChange }) => {
    const today = new Date();
    const defaultEndDate = new Date();
    defaultEndDate.setDate(today.getDate() + 13);
    const [startDate, setStartDate] = useState(today);
    const [endDate, setEndDate] = useState(defaultEndDate);

    const onChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
        onDateChange({ startDate: start, endDate: end });
    };


    const formatDate = (date) => {
        return date.toLocaleDateString('ko-KR');
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
                <p>시작일: {startDate && formatDate(startDate)} 종료일: {endDate && formatDate(endDate)}</p>
            </div>
        </div>

)
    ;
};

export default Calender;