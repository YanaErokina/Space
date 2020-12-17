//Данный скрипт отвечает за анимацию полей ввода
let inputsAnim = document.getElementsByTagName('input');

for(let input of inputsAnim) {
  let val = input.value;
  input.onfocus = function() {    
    input.value = '';
    input.style.borderColor = '#feca30';
    input.style.transition = 'all 0.5s';    
  }

  input.onblur = function() {    
    if(input.value === '') {
      input.value = val;       
    }
    input.style.borderColor = 'white';
    input.style.transition = 'all 0.5s';
  }
}