window.addEventListener('load', () => {
    const input = document.querySelector('.product_input');
    const buttonDec = document.querySelector('.btn-dec');
    const buttonInc = document.querySelector('.btn-inc');
    const favorite = document.querySelector('.product_favorite');

    function decrease() {
        if (input.value > 1) {
            input.value--;
        }
    }

    function increase() {
        input.value++;
    }

    function toggleFavorite() {
        favorite.classList.toggle('favorite-active');
    }

    buttonDec.addEventListener('click', decrease);
    buttonInc.addEventListener('click', increase);

    favorite.addEventListener('click', toggleFavorite);
});
