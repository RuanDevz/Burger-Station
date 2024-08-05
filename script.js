document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.menu-item');
    const cartItemsList = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    const checkoutButton = document.getElementById('checkout');
    const addMoreItemsButton = document.getElementById('add-more-items');
    const checkoutSection = document.getElementById('checkout-section');
    const checkoutForm = document.getElementById('checkout-form');
    const orderSummary = document.getElementById('order-summary');
    const orderTotalPriceElement = document.getElementById('order-total-price');
    const cancelOrderButton = document.getElementById('cancel-order');

    let cart = [];

    menuItems.forEach(item => {
        item.addEventListener('change', updateCart);
    });

    function updateCart() {
        cart = [];
        menuItems.forEach(item => {
            if (item.checked) {
                const name = item.dataset.name;
                const price = parseFloat(item.dataset.price);
                const quantity = parseInt(item.nextElementSibling.nextElementSibling.value);
                cart.push({ name, price, quantity });
            }
        });
        renderCart();
    }

    function renderCart() {
        cartItemsList.innerHTML = '';
        let totalPrice = 0;
        cart.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - R$${item.price.toFixed(2)} x ${item.quantity}`;
            cartItemsList.appendChild(li);
            totalPrice += item.price * item.quantity;
        });
        totalPriceElement.textContent = totalPrice.toFixed(2);
    }

    checkoutButton.addEventListener('click', () => {
        checkoutSection.style.display = 'block';
        renderOrderSummary();
    });

    addMoreItemsButton.addEventListener('click', () => {
        checkoutSection.style.display = 'none';
    });

    function renderOrderSummary() {
        orderSummary.innerHTML = '';
        let totalPrice = 0;
        cart.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - R$${item.price.toFixed(2)} x ${item.quantity}`;
            orderSummary.appendChild(li);
            totalPrice += item.price * item.quantity;
        });
        orderTotalPriceElement.textContent = totalPrice.toFixed(2);
    }

    checkoutForm.addEventListener('submit', event => {
        event.preventDefault();
        alert('Pedido confirmado! Obrigado por comprar conosco.');
        
    });

    cancelOrderButton.addEventListener('click', () => {
        checkoutSection.style.display = 'none';
    });
});
