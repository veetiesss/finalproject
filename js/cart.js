const cartWrap = document.querySelector('.cartWrap')
const cartWrapContainer = document.querySelector('.cartWrap_container')
const cartExit = document.querySelector('.cartWrap_exit')
const price = document.querySelector('.cartWrap__totalPrice')
const blurEffect = document.querySelector('#BlurForModalWin') 

let sum = 0
let cartOpened = false

cartExit.addEventListener('click', function() {
    cartWrap.classList.add('hidden')
    blurEffect.classList.add('hidden')
    cartOpened = false
    document.body.style.overflow = ''
})

let cartItems = [];  

window.addEventListener('click', e => {
    
    if (e.target.hasAttribute('openCartMenu')) {
        cartWrap.classList.remove('hidden');
        blurEffect.classList.remove('hidden');
        cartOpened = true;
        document.body.style.overflow = 'hidden';
    }

    
    if (e.target.hasAttribute('data-cart')) {
        const card = e.target.closest('.Web__box');
        if (card) {
            const productInfo = {
                imgSrc: card.querySelector('.box__image_web').getAttribute('src'),
                title: card.querySelector('.box__title_web').innerText,
                info: card.querySelector('.box__info_web').innerText,
                price: parseFloat(card.querySelector('.box__cost_web').innerText.replace(/\s+/g, '').replace('грн.', '')),
                counter: parseInt(card.querySelector('.amount').innerText),
            };

            
            const existingProductIndex = cartItems.findIndex(item => item.title === productInfo.title);
            if (existingProductIndex === -1) {
                
                cartItems.push(productInfo);
            } else {
                
                cartItems[existingProductIndex].counter += productInfo.counter;
            }

            
            renderCart();
        }
    }

    
    if (e.target.hasAttribute('data-cart-delete')) {
        const parentNode = e.target.closest('.Web__box');
        if (parentNode) {
            
            const productTitle = parentNode.querySelector('.box__title_web').innerText;
            cartItems = cartItems.filter(item => item.title !== productTitle);

            
            renderCart();
        }
    }
});


function renderCart() {
    
    cartWrapContainer.innerHTML = '';

    
    cartItems.forEach(item => {
        const cartItemHtml = `
            <div class="Web__box">
                <img src="${item.imgSrc}" alt="" class="box__image_web"/>
                <h3 class="box__title_web">${item.title}</h3>
                <p class="box__info_web">${item.info}</p>
                <div class="box_container">
                    <p class="box__cost_web">${item.price * item.counter} грн.</p>
                    <div class="box__amount_container">
                        <button class="amount__descrease" data-action="minus">-</button>
                        <p class="amount" data-count>${item.counter}</p>
                        <button class="amount__increase" data-action="plus">+</button>
                    </div>
                </div>
                <button data-cart-delete class="box__buy">Видалити<img src="images/cart.png" alt="" /></button>
            </div>
        `;
        cartWrapContainer.insertAdjacentHTML('beforeend', cartItemHtml);
    });

    
    let totalSum = 0;
    cartItems.forEach(item => {
        totalSum += item.price * item.counter;
    });
    price.innerText = `${totalSum} грн.`;
}
