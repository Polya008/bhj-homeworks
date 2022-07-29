const decs = Array.from(document.querySelectorAll('.product__quantity-control_dec'));
const incs = Array.from(document.querySelectorAll('.product__quantity-control_inc'));
const minimum = 1;


//убавление товара
for(let dec of decs) {
	dec.addEventListener('click', () => {
		let count = dec.nextElementSibling.textContent--;
		if(dec.nextElementSibling.textContent < minimum) {
			dec.nextElementSibling.textContent = minimum;
		}
	});
}

//добавление товара
for(let inc of incs) {
	inc.addEventListener('click', () => {
		let count = inc.previousElementSibling.textContent++;
	});
}


//добавляем в корзину
const adds = Array.from(document.querySelectorAll('.product__add'));
const cartProducts = document.querySelector('.cart__products');

for(let add of adds){
	add.addEventListener('click', () => {

		//кол-во в корзину
		cartProducts.insertAdjacentHTML('afterend', `<div class="cart__product" data-id="1"><img class="cart__product-image" src="image.png"><div class="cart__product-count"></div></div>`);
		let productCount = document.querySelector('.cart__product-count');
		let count = document.querySelector('.product__quantity-value');
		productCount.value = count.textContent;
		console.log(productCount.value)


		//картинка в корзину
		let cartImg = document.querySelector('.cart__product-image');
		let productImg = document.querySelector('.product__image');
		cartImg.setAttribute('Src', productImg.getAttribute('Src'));

		//id
		let cartProductCart = document.querySelector('[data-id]');
		console.log(cartProductCart.getAttribute('data-id'));
		let product = document.querySelector('product');
		cartProductCart.setAttribute('Data-id', cartProductCart.getAttribute('data-id'))




	});
}
