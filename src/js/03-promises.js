import Notiflix from 'notiflix';
const firstDelay = document.querySelector('[name="delay"]').valueAsNumber
const delay = document.querySelector('[name="step"]').valueAsNumber
const position = document.querySelector('[name="amount"]').valueAsNumber
const button = document.querySelector('button')

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`)
      } else {
        reject(`❌ Rejected promise ${position} in ${delay}ms`)
      }
    }, delay)
  })
}

button.addEventListener('click', (e) => {
  e.preventDefault();
    for (let i = 1; i <= position; i++) {
      createPromise(i, firstDelay+delay*(i-1))
          .then(value => { Notiflix.Notify.success(value) })
          .catch(error => { Notiflix.Notify.warning(error) })}
})
