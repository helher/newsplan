import React from 'react';
import './DropdownCalendar.css';

// Calender
import DatePicker from 'react-modern-calendar-datepicker';
// import 'react-modern-calendar-datepicker/lib/DatePicker.css';



const DropdownCalendar = ({expirationDate, setExpirationDate}) => {

    const formatInputValue = () => {
      if (!expirationDate) return '';

      let month = `${expirationDate.month}`
      const months = ['', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

      let newMonth = months[month]

      return `${newMonth} ${expirationDate.day}, ${expirationDate.year}`;
    }

    return (
        <div>
        <h5>Expiration Date</h5>
        <DatePicker
            value={expirationDate}
            onChange={setExpirationDate}
            inputPlaceholder="Select" // placeholder
            formatInputText={formatInputValue} // format value
            inputClassName="datePicker" // custom class
        />
            {/* <IoMdArrowDropdownCircle className="dropdowncalender-icon"/> */}
      </div>
    );
  };

export default DropdownCalendar;