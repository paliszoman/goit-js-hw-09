const body = document.querySelector('body')
const startButton = document.querySelector('[data-start]')
const stopButton = document.querySelector('[data-stop]')
let title = document.querySelector('.title')
let timerId = null;

let getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let copyToClipboard = () => {
    let copyText = body.style.backgroundColor;
    navigator.clipboard.writeText(copyText).then(() => {
    
        alert("Color copied to clipboard");
    })
}

startButton.addEventListener('click', () => {
    return timerId = setInterval(
        () => {return body.style.backgroundColor = getRandomHexColor(),
        title.innerHTML = `Color of this site is: ${body.style.backgroundColor}`,
        startButton.disabled = true;}, 1000)
 })

stopButton.addEventListener('click', () => {
    return clearInterval(timerId),
        startButton.disabled = false,
        copyToClipboard() 
    })
