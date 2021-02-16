document.getElementById('menu__open').onclick = function(){
    let side_menu = document.getElementById('side-menu');
    side_menu.style.cssText = 'display: flex;';
};
document.getElementById('menu__close').onclick = function(){
    let side_menu = document.getElementById('side-menu');
    side_menu.style.cssText = 'display: none;';
};