const btn = document.querySelector('.baner__btn');
const popap = document.querySelector('.popup')

btn.addEventListener('click', e => {
    e.preventDefault();

    popap.style.display = 'block';
    document.body.style.overflow = 'hidden';
})

popap.addEventListener('click', e => {
    if (e.target === popap) {
        popap.style.display = 'none';
        document.body.style.overflow = '';
    }
})

