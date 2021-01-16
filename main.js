'use strict';


function showValuation (){
  let valuation = document.querySelector('.js-valuation').value;
 
  alert('Has valorado con '+ valuation + ' puntos');
}


function showBank (){
  
  let country = document.querySelector('.country').value;
  let iban = document.querySelector('.iban').value;
  let entity = document.querySelector('.entity').value;
  let branch = document.querySelector('.branch').value;
  let dc= document.querySelector('.dc').value;
  let account= document.querySelector('.account').value;
  alert('Le informamos que su cuenta bancaria es: '+country+iban+'-'+entity+'-'+branch+'-'+dc+'-'+account);

}


function showDay(){
let chosenDate = document.querySelector('.js-day').value;
let makeDate= new Date(chosenDate);
let day = makeDate.getDay();
let weekday= ['Domingo','Lunes', 'Martes','Miércoles','Jueves', 'Viernes', 'Sábado'];
let dayName = weekday[day];
alert('La fecha seleccionada en el elemento de fecha es un '+ dayName);
}







// he intentado probar otra forma de mostrar los datos bancarios, utilizando un bucle
// function showBank (){
//   let bank = ['country','iban','entity','branch','dc','account'];
//   let data = 'Le informamos que su cuenta bancaria es:';

//   for (let i = 0; i < bank.length; i++) {
//     console.log(bank[i]);
//     let newData = document.querySelector(`.${bank[i]}`).value;
//      data += '-'+newData;
//   }
//   alert(data);
// }