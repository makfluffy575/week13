
const inputBDay = document.getElementById("date");

const errorWrap = document.querySelector(".error-wrap");

const now = new Date();

//ограничиваем минимальный выбор даты
let currentMonth = now.getMonth()+1;

if (currentMonth < 10) {
  currentMonth = `0` + currentMonth;
}

let currentDate = now.getDate();

if (currentDate < 10) {
  currentDate = `0` + currentDate;
}

const fullCurrentDate = now.getFullYear() + "-" + currentMonth + "-" + currentDate;

inputBDay.setAttribute("min", `${fullCurrentDate}`);

//считаем дни до др
const countDays = () => {

  if (inputBDay.value == "") {
    errorWrap.innerText = "Пожалуйста, введите дату рождения"
  }
  else {
    errorWrap.classList.add("error-wrap_none");
    const getDayNumbers = () => {
      const bDay = new Date(inputBDay.value);
      const diff = bDay - now;
      const result = Math.ceil(diff/1000/3600/24);
      return result;
    }
    const dayNumber = getDayNumbers();

    //склоняем дни
    const wordForms = ["день", "дня", "дней"];

    const getDayWords = (dayNumber, wordForms) => {
      dayNumber = dayNumber % 100;
      const dayNumber1 = dayNumber % 10;
      if (dayNumber > 10 && dayNumber < 20) {
        return wordForms[2];
      }
      if (dayNumber1 > 1 && dayNumber1 < 5) {
          return wordForms[1];
      }
      if (dayNumber1 === 1) {
        return wordForms[0];
      }
      return wordForms[2];
    }
    const daysWrap = document.querySelector(".days-wrap")
    daysWrap.innerText = `До вашего дня рождения ${dayNumber} ${getDayWords(dayNumber, wordForms)}.`
  }
}