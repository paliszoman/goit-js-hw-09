import Notiflix from 'notiflix';
const body = document.querySelector('body')
const startButton = document.querySelector('[data-start]')
const stopButton = document.querySelector('[data-stop]')

let title = document.querySelector('.title')
let timerId = null;

stopButton.disabled = true;

body.style.position = 'relative';
startButton.style.width = "1000px";

let getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let copyToClipboard = () => {
    let copyText = body.style.backgroundColor;
    navigator.clipboard.writeText(copyText).then(() => {
    
        Notiflix.Notify.success("Color copied to clipboard");
    })
}

startButton.addEventListener('click', () => {
    return stopButton.disabled = false,
    timerId = setInterval(
        () => {return startButton.disabled = true,
            body.style.backgroundColor = getRandomHexColor(),
        title.innerHTML = `Color of this site is: ${body.style.backgroundColor}`;}, 1000)
 })

stopButton.addEventListener('click', () => {
    return clearInterval(timerId),
        stopButton.disabled = true,
        startButton.disabled = false,
        copyToClipboard() 
    })
