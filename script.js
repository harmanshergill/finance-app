
let pin="";
const correct="260400";

function press(n){
  if(pin.length>=6)return;
  pin+=n;
  updateDots();
  if(pin.length===6)setTimeout(check,150);
}

function del(){
  pin=pin.slice(0,-1);
  updateDots();
}

function updateDots(){
  document.querySelectorAll('.dots span').forEach((d,i)=>{
    d.classList.toggle('filled',i<pin.length);
  });
}

function check(){
  if(pin===correct){
    location.href='loading.html';
  }else{
    pin="";
    updateDots();
  }
}
