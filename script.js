js
document.querySelectorAll('.city').forEach(city => {
    city.addEventListener('click', () => {
        alert(`Вы выбрали город: ${city.textContent}`);
    });
});

// Добавление вращающихся листьев
const bg = document.querySelector('.bg-leaves');
for (let i = 0; i < 15; i++) {
    let leaf = document.createElement('div');
    leaf.classList.add('leaf');
    leaf.style.top = Math.random() * 100 + 'vh';
    leaf.style.left = Math.random() * 100 + 'vw';
    leaf.style.animationDuration = (6 + Math.random() * 5) + 's';
    bg.appendChild(leaf);