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
		console.log(productCount.textContent)
		const all = Array.from(document.querySelectorAll('.cart__product'));

		const inMyCart = all.find(item => item.dataset.id === productItem.dataset.id);
		console.log(all)


		if(!inMyCart){
			//productCount.textContent = count.textContent;
            //const countInCart = cartProducts.querySelector('.cart__product-count')

        cartProducts.insertAdjacentHTML('afterbegin', `<div class="cart__product" data-id=${productItem.dataset.id}><img class="cart__product-image" src=${productImg.src}><div class="cart__product-count">${productCount.textContent}</div></div>`);

            
            // countInCart.textContent = productCount.textContent ;
            // countInCart.textContent++;
			/*let productInCart = Array.from(cartProducts.querySelectorAll('.cart__product'));
			console.log(productInCart);

			
			//кол-во в корзину
			let count = productItem.querySelector('.product__quantity-value');

			//cartProducts.insertAdjacentHTML('afterbegin', `<div class="cart__product" data-id="1"><img class="cart__product-image" src="image.png"><div class="cart__product-count">${count.textContent}</div></div>`);


			//картинка в корзину
			let cartImg = Array.from(document.querySelector('.cart__product-image'));
			let productImg = productItem.querySelector('.product__image');
			

			//id
			let cartProductCart = Array.from(document.querySelectorAll('[data-id]'));
			//console.log(cartProductCart.getAttribute('[data-id]'));
			//let product = document.querySelector('product');
			cartProductCart.setAttribute('Data-id', cartProductCart.getAttribute('[data-id]'))*/
		} else {

			let countInCart = cartProducts.querySelector('.cart__product-count');
            console.log(countInCart.textContent)
           if(countInCart.closest(''))
            countInCart.textContent = productCount.textContent + countInCart.textContent;

		}
	});	
}


