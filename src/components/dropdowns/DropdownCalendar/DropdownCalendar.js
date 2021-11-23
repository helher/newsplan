import React, { useState } from 'react';
import './DropdownCalendar.css';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";



const DropdownCalendar = () => {
  const [startDate, setStartDate] = useState(new Date());
  
  return (
    <div className="dropdown">
        <h5>Expiration Date</h5>
        <div className="dropdown-select">
            <DatePicker className="datePicker" selected={startDate} onChange={(date) => setStartDate(date)} />
        </div>
    </div>
    
        
  )
}

export default DropdownCalendar;