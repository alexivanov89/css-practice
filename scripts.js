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
                console.log(div[i].children[2].innerText);
            } else {
                div[i].classList.remove('hidden');
            }
        }
    };

    const input = document.querySelector('.search_input');

    input.addEventListener('input', (e) => {
        console.log(e.target.value);
        filterProducts(e.target.value);
    });
});
