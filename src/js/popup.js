const showMessage = (text) => {
	const popup = document.querySelector('.app-message');
	const popupText = document.querySelector('.card-text');
	popup.style.display = 'block';
	popupText.textContent = text;
};

export default showMessage;
