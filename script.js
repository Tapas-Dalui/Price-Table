const checkbox = document.querySelectorAll('input[type="radio"]');
const currency = document.getElementById('setCurrency');
const professional = document.getElementById('professional');
const master = document.getElementById('master');
const basic = document.getElementById('basic');

let cValueBasic= 15;
let cValueStandard= 20;
let cValuePro= 23;
let disc = 0;



function setValue(event){
  
  const num = event.target.value ;
  if( num == '1'){
    cValueBasic = 15;
    cValueStandard = 20 ;
    cValuePro = 23 ;
    updateCurrency();
    
  }
  if( num == '2'){
    disc=1;
    cValueBasic = (cValueBasic - disc)*3;
    cValueStandard = (cValueStandard - disc)*3;
    cValuePro = (cValuePro - disc)*3;
    updateCurrency();
    
  }
  if( num == '3'){
    disc=1.5;
    cValueBasic = (cValueBasic - disc)*12;
    cValueStandard = (cValueStandard - disc)*12;
    cValuePro = (cValuePro - disc)*12;
    updateCurrency();
  }

}


function updateCurrency(){
  basic.textContent =  "$" + cValueBasic;
  professional.textContent = "$" + cValueStandard;
  master.textContent =  "$" + cValuePro;

  cValueBasic= 15;
  cValueStandard= 20;
  cValuePro= 23;
}


