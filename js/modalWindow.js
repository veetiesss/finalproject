// Модальные окна
const openBtn = document.querySelector('#openModal')
const exitModalWin = document.querySelector('.info__exit_action')
const modalWin = document.querySelector('.modal__window')
const blurEffect = document.querySelector('#BlurForModalWin')
const RegisterBtn = document.querySelector('.registerForm__btn_register')
const invalidNumber = document.querySelector('.invalidNumber')

// Контент модального окна
const form = document.querySelector('#registerForm')
const RegisterFormSpan = document.querySelector('.registerForm__span')
const windowFrameStatus = document.querySelector('#ModalStatus')
const contentContainer = document.querySelector('.content_container')
const nameContainer = document.createElement('p')
const phoneContainer = document.createElement('p')

// Открытие модального окна
openBtn.addEventListener('click', e => {
	e.preventDefault()
	RegisterFormSpan.classList.remove('hidden')
	nameContainer.classList.add('hidden')
	phoneContainer.classList.add('hidden')
	RegisterBtn.textContent = 'Подзвонити'
	windowFrameStatus.textContent = 'Подзвонити'

	modalWin.classList.remove('hidden')
	blurEffect.classList.remove('hidden')
	document.body.style.overflow = 'hidden'
})

// Закрытие модального окна
exitModalWin.addEventListener('click', () => {
	modalWin.classList.add('hidden')
	blurEffect.classList.add('hidden')
	document.body.style.overflow = ''
})

RegisterBtn.addEventListener('click', e => {
	e.preventDefault()
	invalidNumber.innerHTML = ''
	modalWin.classList.add('hidden')
	blurEffect.classList.add('hidden')
	document.body.style.overflow = ''
})

// Закрытие окна при клике на затемнение
window.addEventListener('click', e => {
	if (e.target === blurEffect && activeBurgerMenu === false && cartOpened === false) {
		modalWin.classList.add('hidden')
		blurEffect.classList.add('hidden')
		document.body.style.overflow = ''
	}
})
