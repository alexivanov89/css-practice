import getResource from './api.js';

window.addEventListener('DOMContentLoaded', () => {
    class ProductCard {
        constructor(id, name, description, info, details, like, picture, price, parentSelector) {
            this.id = id;
            this.name = name;
            this.description = description;
            this.info = info;
            this.details = details;
            this.like = like;
            this.picture = picture;
            this.price = price;
            this.parent = document.querySelector(parentSelector);
            this.favoriteActive = '';
        }

        render() {
            if (this.like) {
                this.favoriteActive = ' favorite-active';
            }

            const baseURL = 'http://localhost:3006';

            const element = document.createElement('div');
            element.innerHTML = `
            <div class="product_image">
            <img class="image-preview" src=${baseURL}${this.picture.path} alt=${this.picture.alt} />
            </div>
            <div class="product_info">
                <div class="product_description">
                    <h3 class="title-description" >${this.name}</h3>
                    <p class="text-description">${this.info}</p>
                </div>
            <div class="product_detail">
                <h4 class="title-detail" >${this.description}</h3>
                    <p class="text-detail">${this.details}</p>
            </div>
            <div class="product_commerce">
                <div class="product_page_price">$${this.price.value}</div>
                <div class="product_quantity">
                    <button class='btn btn-dec'>-</button>
                    <input class='product_input' type="number" value="1" min="1" >
                    <button class='btn btn-inc'>+</button>
                </div>
                <div class="add-cart">
                    <a href="">Add to cart</a>
                </div>
                <div class="product_favorite${this.favoriteActive}">
                </div>
            </div>
            `;
            element.classList.add('product');
            this.parent.append(element);
        }
    }

    let id = '571fc60d-ea2c-469e-a5b6-c229d31f195d';
    getResource(`http://localhost:3006/item/:${id}`).then((data) => {
        const { id, name, description, info, details, like, picture, price } = data.content;
        new ProductCard(id, name, description, info, details, like, picture, price, '.product_card').render();
    });
});
