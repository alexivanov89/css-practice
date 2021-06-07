import getResource from './api.js';

window.addEventListener('DOMContentLoaded', () => {
    class ProductCard {
        constructor(id, name, description, like, picture, price, parentSelector) {
            this.id = id;
            this.name = name;
            this.description = description;
            this.like = like;
            this.picture = picture;
            this.price = price;
            this.parent = document.querySelector(parentSelector);
            this.heartActive = '';
        }

        render() {
            if (this.like) {
                this.heartActive = ' heart-active';
            }
            const baseURL = 'http://localhost:3006';

            const element = document.createElement('div');
            element.innerHTML = `
                    <div class="favorite">
                        <div class="heart${this.heartActive}"></div>
                    </div>
                    <div class="product_image-item">
                        <a id=${this.id}  href="./detailed-paige.html"><img class="image" src=${baseURL}${this.picture.path} alt=${this.picture.alt} /></a>
                    </div>
                    <div class="product_title"><a id=${this.id} class="name" href="./detailed-paige.html">${this.name}</a></div>
                    <div class="product_price">$${this.price.value}</div>
            `;
            element.classList.add('products__item');
            this.parent.append(element);
        }
    }

    getResource('http://localhost:3006/item').then((data) => {
        const products = data.content;
        products.forEach(({ id, name, description, like, picture, price }) => {
            new ProductCard(id, name, description, like, picture, price, '.products').render();
        });
    });
});
