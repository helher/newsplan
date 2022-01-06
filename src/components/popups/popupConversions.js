
export function convertDateObjectToString(date) {
    let month = `${date.month}`;
    const months = [
      "", "Jan", "Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"
    ]
    let newMonth = months[month];
    
    let newDay = date.day

    if (newDay < 10) {
      newDay = 0 + JSON.stringify(date.day)
    } 

    const newDateString = JSON.stringify(
      `${newMonth} ${newDay} ${date.year}`
    );
    const completeNewDateString = newDateString.substring(
      1,
      newDateString.length - 1
    );

    return completeNewDateString;
  }


export function convertDateStringToObject(date) {
    const stringArr = date.split(" ");

    const dateObject = {
      day: stringArr[1],
      month: stringArr[0],
      year: stringArr[2]
    }

    let month = `${dateObject.month}`
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    let newMonth = months.indexOf(month)

    const newDateObject = {
      day: parseInt(stringArr[1]),
      month: newMonth+1,
      year: parseInt(stringArr[2])
    }

    return newDateObject
  }

    // This code is from https://dev.to/sanchithasr/3-ways-to-convert-html-text-to-plain-text-52l8
    export function convertToPlain(description) {
        var temporaryText = document.createElement("div");
        temporaryText.innerHTML = description;
        return temporaryText.textContent || temporaryText.innerText || "";
      }