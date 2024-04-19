import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const Calender = () => {
    const today = new Date();
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(null);
    const onChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    };
    return (
        <DatePicker
            selected={startDate}
            onChange={onChange}
            minDate={today}
            maxDate={null}
            startDate={today}
            endDate={endDate}
            selectsRange
            inline
            showDisabledMonthNavigation
            isClearable={true}
        />

    );
};

export default Calender;