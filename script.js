var button = document.getElementById('toggle-menu');
button.addEventListener('click', function(event) {
    var menu = document.getElementById('main-menu');
    menu.classList.toggle('is-open');
})