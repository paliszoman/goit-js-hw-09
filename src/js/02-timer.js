// LIBRARIES
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

//VARIABLES
const datePicker = document.querySelector('#datetime-picker');
const startButton = document.querySelector('[data-start]')
const countDay = document.querySelector('[data-days]');
const countHour = document.querySelector('[data-hours]');
const countMin = document.querySelector('[data-minutes]');
const countSec = document.querySelector('[data-seconds]');
const timer = document.querySelector('.timer');
const value = document.querySelector('.value');
const label = document.querySelector('.label');
let today;
let chosenDate;

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

//STYLES
/*timer.style
    .display = 'flex';


value.style.justifyContent = 'center'
value.style.alignItems = 'space-between'
value.style.paddingLeft = '20px'
    
label.style.position = 'absolute'


;
*/

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
    if (difference <= 0) {clearInterval(clock)}
    
    countDay.innerHTML = convertMs(difference).days
    countHour.innerHTML = convertMs(difference).hours
    countMin.innerHTML = convertMs(difference).minutes
    countSec.innerHTML = convertMs(difference).seconds

}


//MAIN
startButton.disabled = true;
setInterval(() => { return today = new Date().getTime(); }, 1000) //actual date every second
flatpickr(datePicker, options);
startButton.addEventListener('click', () => {
    takeDate()
   let clock = setInterval(() => {
       takeDate();
    }, 1000);
     }    
)