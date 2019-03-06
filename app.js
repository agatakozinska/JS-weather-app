const searchInput = document.querySelector('.search__input');
const city = searchInput.value;
const popup = document.querySelector('.app-message');
const submitButton = document.querySelector('.input-group');



const showMessage = (text) => {
  const popupText = document.querySelector('.card-text');
  popup.style.display = 'block';
  popupText.textContent = text;
}

popup.addEventListener('click', e => {
  if(e.target.classList!="card-body" && e.target.classList!="card-text") {
    popup.style.display = 'none';
  }
})

submitButton.addEventListener('submit', e => {
  e.preventDefault();
  
  if (city === '') {
    showMessage('First, you have to type a city :)');
  }
})

