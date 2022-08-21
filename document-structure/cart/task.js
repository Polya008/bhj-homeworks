const decs = Array.from(document.querySelectorAll('.product__quantity-control_dec'));
const incs = Array.from(document.querySelectorAll('.product__quantity-control_inc'));
const minimum = 1;


//убавление товара
for(let dec of decs) {
	dec.addEventListener('click', () => {
		dec.nextElementSibling.textContent--;
		if(dec.nextElementSibling.textContent < minimum) {
			dec.nextElementSibling.textContent = minimum;
		}
	});
}

//добавление товара
for(let inc of incs) {
	inc.addEventListener('click', () => {
		inc.previousElementSibling.textContent++;
	});
}

//добавляем в корзину
const adds = Array.from(document.querySelectorAll('.product__add'));

//корзина
const cartProducts = document.querySelector('.cart__products');

for(let add of adds){
	add.addEventListener('click', () => {
		let productItem = add.closest('.product');
		let productImg = productItem.querySelector('img');
		let productCount = productItem.querySelector('.product__quantity-value');
		const all = Array.from(cartProducts.getElementsByClassName('cart__product'))

		const inMyCart = all.find(item => item.dataset.id === productItem.dataset.id);

		if(inMyCart){
	
            let countInCart = inMyCart.querySelector('.cart__product-count');
            countInCart.textContent = Number(countInCart.textContent) + Number(productCount.textContent);

		} else {
			cartProducts.insertAdjacentHTML('afterbegin', `<div class="cart__product" data-id=${productItem.dataset.id}><img class="cart__product-image" src=${productImg.src}><div class="cart__product-count">${productCount.textContent}</div></div>`);
		}
	});	
}


