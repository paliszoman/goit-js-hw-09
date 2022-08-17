// LIBRARIES
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

//VARIABLES
const datePicker = document.querySelector('#datetime-picker');
const startButton = document.querySelector('[data-start]')
const days = document.querySelector('[data-days]');
const hours = document.querySelector('[data-hours]');
const minutes = document.querySelector('[data-minutes]');
const seconds = document.querySelector('[data-seconds]');
const timer = document.querySelector('.timer');
const value = document.querySelector('.value');
const label = document.querySelector('.label');
let today;
let chosenDate;
let clock = null;

const options = {
    //minDate: "today",   will be much easier xD
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        if (options.defaultDate.getTime() >= selectedDates[0].getTime())
        {return Notiflix.Notify.failure("Please choose a date in the future!"),
        startButton.disabled = true;
        }
         else {return startButton.disabled = false,
            Notiflix.Notify.success("Well done!"),
            chosenDate = selectedDates[0].getTime()}
    }
}


//FUNCTIONS
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

let takeDate = () => {
    let difference = chosenDate - today;
    if (difference < 1000) {clearInterval(clock)}
    
let addZero= (value) => {
    if (value < 10) {
        return value.toString().padStart(2, '0');
    } else {
        return value;
    }
}
 
    let countDay = convertMs(difference).days
    let countHour = convertMs(difference).hours
    let countMin = convertMs(difference).minutes
    let countSec = convertMs(difference).seconds
    
days.innerHTML = addZero(countDay)
hours.innerHTML = addZero(countHour)
minutes.innerHTML = addZero(countMin)
seconds.innerHTML = addZero(countSec)
    }

//MAIN
startButton.disabled = true;
setInterval(() => { return today = new Date().getTime(); }, 1000) //actual date every second
flatpickr(datePicker, options);
startButton.addEventListener('click', () => {
    startButton.disabled = true;
    clock = setInterval(() => {
       takeDate();
    }, 1000);
     }    
)