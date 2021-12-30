const plumegame = document.getElementById('plumegame');

window.addEventListener('scroll', function() {
    let value = window.scrollY;
    rocks.style.top = value * 1.05 + 'px';
    ground_1.style.top = value * 0.5 + 'px';
    ground_2.style.top = value * 0 + 'px';
    text.style.marginRight = value * 4 + 'px';
    text.style.marginTop = value * 0.75 + 'px';
    btn.style.marginTop = value * 1.5 + 'px';
    header.style.top = value * 0.5 + 'px';
})