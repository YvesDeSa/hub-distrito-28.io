document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.querySelector('.menu-icon');
    const navigation = document.getElementById('navigation');

    menuIcon.addEventListener('click', function() {
        this.classList.toggle('active');
        navigation.classList.toggle('show');
    });
});