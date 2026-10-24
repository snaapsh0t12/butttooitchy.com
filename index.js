window.addEventListener('DOMContentLoaded', () => {
    const img = document.getElementById('pic');
    
    // Generates a 1 in 100 chance (1% probability)
        if (Math.random() < 0.01) {
            if (Math.random() < 0.50) {
                img.src = './doggy.jpg';
            } else {
                img.src = './owen.png'
            }
        }
    img.addEventListener('click', () => {
        // 1/100 chance on each click
        if (Math.random() < 0.02) {
            if (Math.random() < 0.50) {
                img.src = './doggy.jpg';
            } else {
                img.src = './owen.png'
            }
        }
    });
});