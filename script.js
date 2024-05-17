document.addEventListener('DOMContentLoaded', function() {
    const cartBtn = document.getElementById('cartBtn');
    const messageBox = document.getElementById('messageBox');

    cartBtn.addEventListener('click', function() {
        messageBox.style.display = 'block';

        setTimeout(function() {
            messageBox.style.display = 'none';
        }, 3000);
    });
});