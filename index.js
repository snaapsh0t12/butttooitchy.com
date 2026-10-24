window.addEventListener('DOMContentLoaded', () => {
    const img = document.getElementById('pic');
    
        if (Math.random() < 0.01) {
            if (Math.random() < 0.50) {
                img.src = './doggy.jpg';
            } else {
                img.src = './owen.png'
            }
        }
    img.addEventListener('click', () => {
        if (Math.random() < 0.02) {
            if (Math.random() < 0.50) {
                img.src = './doggy.jpg';
            } else {
                img.src = './owen.png'
            }
        }
    });
});