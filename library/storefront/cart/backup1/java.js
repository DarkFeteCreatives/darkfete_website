

// This is for the math on the cart item
document.addEventListener("DOMContentLoaded", function() {
    updateCartTotal();

    document.querySelector('.remove-item').addEventListener('click', function() {
        // Logic to remove the item goes here
    });
});

function updateCartTotal() {
    const unitPrice = parseFloat(document.querySelector('.unit-price span').textContent.slice(1));
    const quantity = parseFloat(document.querySelector('.item-quantity span').textContent);
    let subtotal = unitPrice * quantity;

    // Add 12% tax
    const tax = subtotal * 0.12;
    subtotal += tax;

    // Add $4.9 shipping
    const shipping = 4.9;
    subtotal += shipping;

    document.querySelector('.cartitemtotal span').textContent = `$${subtotal.toFixed(2)}`;
}
