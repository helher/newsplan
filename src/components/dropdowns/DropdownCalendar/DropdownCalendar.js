import React from 'react';
import './DropdownCalendar.css';

// Calender
import DatePicker from 'react-modern-calendar-datepicker';
// import 'react-modern-calendar-datepicker/lib/DatePicker.css';



const DropdownCalendar = ({date, setDate}) => {

    const formatInputValue = () => {
      if (!date) return '';

      let month = `${date.month}`
      const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

      let newMonth = months[month]

      return `${newMonth} ${date.day}, ${date.year}`;
    }

    return (
        <div>
        <DatePicker
            value={date}
            onChange={setDate}
            inputPlaceholder="Select" // placeholder
            formatInputText={formatInputValue} // format value
            inputClassName="datePicker" // custom class
        />
            {/* <IoMdArrowDropdownCircle className="dropdowncalender-icon"/> */}
      </div>
    );
  };

export default DropdownCalendar;