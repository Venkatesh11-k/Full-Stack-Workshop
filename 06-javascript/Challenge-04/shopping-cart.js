function createShoppingCart() {
    let items = [];
    let discount = 0;

    return {
        addItem(item) {
            const existing = items.find(i => i.id === item.id);
            if (existing) {
                existing.quantity += item.quantity;
            } else {
                items.push({ ...item });
            }
        },

        removeItem(id) {
            items = items.filter(i => i.id !== id);
        },

        updateQuantity(id, quantity) {
            const item = items.find(i => i.id === id);
            if (!item) return;
            if (quantity <= 0) this.removeItem(id);
            else item.quantity = quantity;
        },

        getItems() {
            return items;
        },

        getTotal() {
            const total = items.reduce(
                (sum, i) => sum + i.price * i.quantity, 0
            );
            return (total * (1 - discount / 100)).toFixed(2);
        },

        getItemCount() {
            return items.reduce((sum, i) => sum + i.quantity, 0);
        },

        isEmpty() {
            return items.length === 0;
        },

        applyDiscount(code, percent) {
            discount = percent;
        },

        clear() {
            items = [];
            discount = 0;
        }
    };
}

/* ---------- UI Logic ---------- */

const cart = createShoppingCart();

const cartItems = document.getElementById('cartItems');
const itemCount = document.getElementById('itemCount');
const totalPrice = document.getElementById('totalPrice');

function renderCart() {
    cartItems.innerHTML = '';

    cart.getItems().forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} x ${item.quantity}`;
        cartItems.appendChild(li);
    });

    itemCount.textContent = cart.getItemCount();
    totalPrice.textContent = cart.getTotal();
}

document.getElementById('addLaptop').onclick = () => {
    cart.addItem({ id: 1, name: 'Laptop', price: 999, quantity: 1 });
    renderCart();
};

document.getElementById('addMouse').onclick = () => {
    cart.addItem({ id: 2, name: 'Mouse', price: 29, quantity: 1 });
    renderCart();
};

document.getElementById('applyDiscount').onclick = () => {
    cart.applyDiscount('SAVE10', 10);
    renderCart();
};

document.getElementById('clearCart').onclick = () => {
    cart.clear();
    renderCart();
};
