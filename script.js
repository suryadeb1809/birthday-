document.addEventListener('DOMContentLoaded', () => {
    const pages = document.querySelectorAll('.page');
    let currentPage = 0;

    pages.forEach((page, index) => {
        page.addEventListener('click', () => {
            if (index < pages.length - 1) {
                pages[currentPage].style.animation = 'page-turn 1s forwards';
                setTimeout(() => {
                    pages[currentPage].style.display = 'none';
                    pages[++currentPage].style.display = 'block';
                    createConfetti();
                }, 1000);
            }
        });
    });

    function createConfetti() {
        for (let i = 0; i < 300; i++) {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            confetti.style.left = `${Math.random() * 100}vw`;
            confetti.style.top = `${Math.random() * -100}vh`;
            confetti.style.background = getRandomColor();
            document.body.appendChild(confetti);
            setTimeout(() => confetti.remove(), 4000);
        }
    }

    function getRandomColor() {
        const colors = ['#FFCC00', '#FF66CC', '#00CCFF', '#66FF66', '#FF6699', '#99FF66', '#FF0066', '#CCFF00'];
        return colors[Math.floor(Math.random() * colors.length)];
    }
});