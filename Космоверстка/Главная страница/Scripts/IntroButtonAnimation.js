//Данный скрипт отвечает за анимацию первой кнопки на странице
let introButton = document.querySelector('.get-tour-button');
let img = introButton.querySelector('.intro-arrow');

introButton.onmouseout = function() {    
    introButton.style.transition = 'all 0.5s';
    introButton.style.backgroundColor = '#feca30';    
}

introButton.onmouseover = function() {    
    introButton.style.transition = 'all 0.5s';
    introButton.style.backgroundColor = '#daa300';        
}

introButton.onmouseup = function() {
    introButton.style.transition = 'all 0.5s';
    introButton.style.backgroundColor = '#daa300';       
}

introButton.onmousedown = function() {
    introButton.style.transition = 'all 0.5s';
    introButton.style.backgroundColor = '#feca30';    
}