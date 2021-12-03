import React from 'react';
import './DropdownCalendar.css';
import { IoMdArrowDropdownCircle } from 'react-icons/io'

// Calender
import DatePicker from 'react-modern-calendar-datepicker';
// import 'react-modern-calendar-datepicker/lib/DatePicker.css';



const DropdownCalendar = ({expirationDateSelected, setExpirationDateSelected}) => {

    const formatInputValue = () => {
      if (!expirationDateSelected) return '';

      let month = `${expirationDateSelected.month}`
      const months = ['', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

      let newMonth = months[month]

      return `${newMonth} ${expirationDateSelected.day}, ${expirationDateSelected.year}`;
    }
  
    return (
        <div>
        <h5>Expiration Date</h5>
        <DatePicker
            value={expirationDateSelected}
            onChange={setExpirationDateSelected}
            inputPlaceholder="Select" // placeholder
            formatInputText={formatInputValue} // format value
            inputClassName="datePicker" // custom class
        />
            {/* <IoMdArrowDropdownCircle className="dropdowncalender-icon"/> */}
      </div>
    );
  };

export default DropdownCalendar;