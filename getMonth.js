const calendar = {
  1: "Январь",
  2: "Февраль",
  3: "Март",
  4: "Апрель"
}

const getMonth = (number, object) => {
  for (const key in object) {
    if (number == key) {
      console.log(object[key]);
    }
  }
}

// console.log(getMonth(1, calendar));
// getMonth(2, calendar)
getMonth(2, calendar)