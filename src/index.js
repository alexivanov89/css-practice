import './modules/getProducts.js';
import './modules/getProductItem.js';

import './css/styles.css';

/* scripts listProduct page */
window.addEventListener('load', () => {
    const hearts = document.querySelectorAll('.heart');

    hearts.forEach((heart) => {
        function toggleHeart() {
            heart.classList.toggle('heart-active');
        }

        heart.addEventListener('click', toggleHeart);
    });

    const div = document.querySelectorAll('.products__item');

    const filterProducts = (value) => {
        for (let i = 0; i < div.length; i++) {
            if (!div[i].children[2].innerText.toLowerCase().includes(value)) {
                div[i].classList.add('hidden');
            } else {
                div[i].classList.remove('hidden');
            }
        }
    };

    const input = document.querySelector('.search_input');

    input.addEventListener('input', (e) => {
        filterProducts(e.target.value);
    });

    /* scripts detail page */
    const productInput = document.querySelector('.product_input');
    const buttonDec = document.querySelector('.btn-dec');
    const buttonInc = document.querySelector('.btn-inc');
    const favorite = document.querySelector('.product_favorite');

    function decrease() {
        if (productInput.value > 1) {
            productInput.value--;
        }
    }

    function increase() {
        productInput.value++;
    }

    function toggleFavorite() {
        favorite.classList.toggle('favorite-active');
    }

    buttonDec.addEventListener('click', decrease);
    buttonInc.addEventListener('click', increase);

    favorite.addEventListener('click', toggleFavorite);
});
