//Данный скрипт отвечает за данные формы и за анимацию внутри нее
let sendFormButton = document.querySelector('.send-confirm');
let inputs = document.getElementsByTagName('input');
let checkedPersonalData = false;
let checkBox = document.getElementById('ConfirmPersonalData');
let confirmText = document.getElementById('text-of-confirm');

//Кликнули на кнопку
sendFormButton.onclick = function() {
    if(checkBox.checked) {
        console.log('click');
        let content = 'Данные:';
        for(let input of inputs) {
            if(input != checkBox)  {
                content += '\n' + input.value;        
            }                      
        }
        alert(content);
    } else {
        //Не подтвердили соглашение. Делаем встряску.
        confirmText.animate([{ transform: 'translateX(0px)' },
        { transform: 'translateX(10px)' },
        { transform: 'translateX(0px)' },
        { transform: 'translateX(-10px)' },
        { transform: 'translateX(0px)' },
        { transform: 'translateX(10px)' },
        { transform: 'translateX(0px)' },
        { transform: 'translateX(-10px)' },
        { transform: 'translateX(0px)'} ],
        { duration: 200, direction: "alternate" });        
    }    
}

//Придаем живость кнопке
sendFormButton.onmouseover = function() {    
    sendFormButton.style.transition = 'background-color 0.5s';
    sendFormButton.style.backgroundColor = '#feca30';
}

sendFormButton.onmouseout = function() {    
    sendFormButton.style.transition = 'background-color 0.5s';
    sendFormButton.style.backgroundColor = 'black';
}

sendFormButton.onmousedown = function() {
    sendFormButton.style.transition = 'background-color 0.5s';
    sendFormButton.style.backgroundColor = 'black';   
}

sendFormButton.onmouseup = function() {
    sendFormButton.style.transition = 'background-color 0.5s';
    sendFormButton.style.backgroundColor = '#feca30';
}