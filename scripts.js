window.onload = function () {
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
};
