const menuBtn = document.getElementById('menu-btn');
const menuList = document.getElementById('menu-list');

// Menü düymesine tıklama olayını dinleyin
menuBtn.addEventListener('click', function() {
    // Menüyü açıp kapatmak için CSS sınıfını değiştirin
    menuList.classList.toggle('menu-open');
});
