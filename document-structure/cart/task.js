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


		let productInCart = Array.from(cartProducts.querySelectorAll('.cart__product'));
		console.log(productInCart);

		
		//кол-во в корзину
		cartProducts.insertAdjacentHTML('beforeend', `<div class="cart__product" data-id="1"><img class="cart__product-image" src="image.png"><div class="cart__product-count"></div></div>`);
		let productCount = document.querySelector('.cart__product-count');
		let count = document.querySelector('.product__quantity-value');
		productCount.textContent = count.textContent;
		console.log(productCount.textContent)


		//картинка в корзину
		let cartImg = Array.from(document.querySelector('.cart__product-image'));
		let productImg = document.querySelector('.product__image');
		console.log(cartImg)
		//cartImg.setAttribute('Src', productImg.getAttribute('Src'));

		//id
		let cartProductCart = Array.from(document.querySelectorAll('[data-id]'));
		//console.log(cartProductCart.getAttribute('[data-id]'));
		//let product = document.querySelector('product');
		cartProductCart.setAttribute('Data-id', cartProductCart.getAttribute('[data-id]'))
	});

	/*if(productInCart.find((item) => item.dataset.id)){
		console.log('то то и оно')
	};*/
	//console.log(cartProducts.getAttribute)

	
}


