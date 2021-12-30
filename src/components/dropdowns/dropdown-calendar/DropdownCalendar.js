import React from 'react';

// Styles
import './DropdownCalendar.css';

// Calender
import DatePicker from 'react-modern-calendar-datepicker';

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
            inputPlaceholder="Select"
            formatInputText={formatInputValue}
            inputClassName="datePicker"
        />
            </>
    );
  };

export default DropdownCalendar;