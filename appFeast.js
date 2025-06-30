(function(app){
    'use strict'
const Feast={};
app.feastAll = function(){
    const frm=document.getElementById('form')
    Feast.submit=frm.querySelector('#submit');
    Feast.submit=addEventListener('click',submitTask);
    formWire();
    
};

const yearSpan=document.getElementById('yearDate');
const yearDate= new Date().getFullYear();
yearSpan.textContent= yearDate


/*function setdate(){
    const date= new Date();
    const yearDate=document.getElementById('yearDate');
    
}; */

function formWire(){
    const form=document.getElementById('form');
    form.onsubmit=submitTask
};
// function submitTask(e){
//     e.preventDefault();
//     e.stopPropagation();

//     const form=document.getElementById('form');
//     const email=form.querySelector('#mailInput');
//     const message=form.querySelector('#message');
    
//     const mailTo =`mailTo:${email.value}&boby=${message.value}`

//     window.open(mailTo);
//     message.value= '';
//     email.value= '';

// }

})(window.app=window.app || {});