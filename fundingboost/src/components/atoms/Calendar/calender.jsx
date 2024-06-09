import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './calender.scss';

const Calender = ({ onDateChange, selectedDate }) => {
    const today = new Date();
    const defaultEndDate = new Date(today);
    defaultEndDate.setDate(today.getDate() + 13);

    const [startDate, setStartDate] = useState(selectedDate || today);
    const [endDate, setEndDate] = useState(selectedDate ? new Date(selectedDate) : defaultEndDate);

    useEffect(() => {
        // If no date is selected, set the default end date
        if (!selectedDate) {
            setEndDate(defaultEndDate);
            onDateChange(defaultEndDate);
        }
    }, [selectedDate, onDateChange, defaultEndDate]);

    const onChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
        onDateChange(end || start);
    };

    const formatDate = (date) => {
        return date.toLocaleDateString('ko-KR');
    };

    return (
        <div>
            <div className="calender">
                <DatePicker
                    selected={startDate}
                    onChange={onChange}
                    minDate={today}
                    startDate={startDate}
                    endDate={endDate}
                    selectsRange
                    inline
                    showDisabledMonthNavigation
                    isClearable={true}
                />
            </div>
            <div>
                {/* Display selected start and end dates */}
                <p>시작일: {startDate && formatDate(startDate)} 종료일: {endDate && formatDate(endDate)}</p>
            </div>
        </div>
    );
};

export default Calender;
