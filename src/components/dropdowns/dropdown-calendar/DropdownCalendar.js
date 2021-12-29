import React from 'react';

// Styles
import './DropdownCalendar.css';

// Calender
import DatePicker from 'react-modern-calendar-datepicker';
// import 'react-modern-calendar-datepicker/lib/DatePicker.css';



const DropdownCalendar = ({date, setDate}) => {

    const formatInputValue = () => {
      if (!date) return '';

      let month = `${date.month}`
      const months = ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

      let newMonth = months[month]

      return `${newMonth} ${date.day} ${date.year}`;
    }

    return (
        <>
        <DatePicker
            value={date}
            onChange={setDate}
            inputPlaceholder="Select" // placeholder
            formatInputText={formatInputValue} // format value
            inputClassName="datePicker" // custom class
        />
            {/* <IoMdArrowDropdownCircle className="dropdowncalender-icon"/> */}
            </>
    );
  };

export default DropdownCalendar;