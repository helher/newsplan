import React, { useState } from 'react';
import './DropdownCalendar.css';
import { IoMdArrowDropdownCircle } from 'react-icons/io'

// Calender
import DatePicker from 'react-modern-calendar-datepicker';
// import 'react-modern-calendar-datepicker/lib/DatePicker.css';



const DropdownCalendar = () => {
    const [selectedDay, setSelectedDay] = useState(null);


    const formatInputValue = () => {
      if (!selectedDay) return '';

      let month = `${selectedDay.month}`
      const months = ['', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

      let newMonth = months[month]

      return `${newMonth} ${selectedDay.day}, ${selectedDay.year}`;
    }
  
    return (
        <div>
        <h5>Expiration Date</h5>
        <DatePicker
            value={selectedDay}
            onChange={setSelectedDay}
            inputPlaceholder="Select" // placeholder
            formatInputText={formatInputValue} // format value
            inputClassName="datePicker" // custom class
            shouldHighlightWeekends
        />
            <IoMdArrowDropdownCircle className="dropdowncalender-icon"/>

      </div>
    );
  };

export default DropdownCalendar;