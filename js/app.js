window.addEventListener('click', e => {
    let counter
    if (e.target.dataset.action === 'plus' ||
        e.target.dataset.action === 'minus') {
        const countWrap = e.target.closest('.box__amount_container')
        counter = countWrap.querySelector('[data-count]')
    }
    if (e.target.dataset.action === 'plus') {
        counter.innerText = ++counter.innerText
    }
    if (e.target.dataset.action === 'minus') {
        if(parseInt(counter.innerText) > 1) {
            counter.innerText = --counter.innerText
        } else if (e.target.closest('.box__amount_container') && parseInt(counter.innerText) == 1) {
            e.target.closest('.cart-item').remove()
            statusCart()
        }
    }
})