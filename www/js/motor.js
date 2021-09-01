// This is a JavaScript file
window.onload = function(){
  const display = document.querySelector("#display");

  let refrigerante = document.querySelector("#refrigerante");
  let agua = document.querySelector("#agua");
  let bolo = document.querySelector("#bolo");
  let doces = document.querySelector("#doces");
  let salgadinhos = document.querySelector("#salgadinhos");

  document.querySelector("#calc").addEventListener('click', function(){
    let valor;
    let res;
    valor = display.value;
   
    res = 600 * valor;
    if(res>1000){
      res = res/1000;
      refrigerante.value = res+"L";
    }else{
      refrigerante.value = res+"ml";
    }

    res = 200 * valor;
    if(res>1000){
      res = res/1000;
      agua.value = res+"L";
    }else{
      agua.value = res+"ml";
    }
    
    res = 100 * valor;
    if(res>1000){
      res = res/1000;
      bolo.value = res+"Kg";
    }else{
      bolo.value = res+"g";
    }

    res = 3 * valor;
    doces.value = res+" un";

    res= 10 * valor;
    salgadinhos.value = res+" un";

  });

}