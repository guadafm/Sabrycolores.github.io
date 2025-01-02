// script.js

const cart = [];
const cartContainer = document.querySelector('.cart-items');

document.querySelectorAll('.product button').forEach((button, index) => {
    button.addEventListener('click', () => {
        const productName = button.parentElement.querySelector('h3').innerText;
        const productPrice = button.parentElement.querySelector('p').innerText;
        cart.push({ name: productName, price: productPrice });
        updateCart();
    });
});

function updateCart() {
    cartContainer.innerHTML = '';
    if (cart.length === 0) {
        cartContainer.innerHTML = '<p>No items in the cart.</p>';
    } else {
        cart.forEach(item => {
            const itemElement = document.createElement('p');
            itemElement.innerText = `${item.name} - ${item.price}`;
            cartContainer.appendChild(itemElement);
        });
    }
}
