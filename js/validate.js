const validator = new JustValidate('.main__form')
const FormOpenBtn = document.querySelector('#FormOpenModal')
validator.addField('#form__name', [
	{
		rule: 'required',
		errorMessage: 'Введите ваше имя',
	},
	{
		rule: 'minLength',
		value: 2,
		errorMessage: 'Имя должно состоять хотябы из двух букв',
	},
])
validator.addField('#form__phone', [
	{
		rule: 'required',
		errorMessage: 'Введите ваш номер телефона',
	},
	{
		rule: 'minLength',
		value: 7,
		errorMessage: 'Телефон должен содержать в себе хотябы 7 цифр',
	},
])
FormOpenBtn.addEventListener('click', e => {
	e.preventDefault()

	validator.revalidate().then(isValid => {
		if (!isValid) return // Прекращаем выполнение, если форма невалидна

		RegisterFormSpan.classList.add('hidden')

		const name = document.querySelector('#form__name').value.trim()
		const phone = document.querySelector('#form__phone').value.trim()

		RegisterBtn.textContent = 'Ок'

		nameContainer.style.color = 'white'
		phoneContainer.style.color = 'white'

		nameContainer.textContent = `Имя: ${name}`
		phoneContainer.textContent = `Телефон: ${phone}`

		contentContainer.append(nameContainer)
		contentContainer.append(phoneContainer)

		windowFrameStatus.textContent = 'Надіслано'

		modalWin.classList.remove('hidden')
		blurEffect.classList.remove('hidden')
		document.body.style.overflow = 'hidden'
	})
})
