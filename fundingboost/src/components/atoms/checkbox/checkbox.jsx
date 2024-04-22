import React from "react";

const Checkbox = ({ label, isSelected, onCheckboxChange }) => (
    <div className="checkbox-container">
        <div className="form-check">
            <label>
                <input
                    type="checkbox"
                    name={label}
                    checked={isSelected}
                    onChange={onCheckboxChange}
                    className="form-check-input"
                />
                {label}
            </label>
        </div>
    </div>
);

export default Checkbox;
