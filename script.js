const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const parrafo_resultado = document.querySelector('#resultado');



btn.addEventListener('click', btnOnClick);

function btnOnClick(){
  const valor1 = parseFloat(input1.value);
  const valor2 = parseFloat(input2.value);
  parrafo_resultado.innerText = valor1 + valor2
}


/*
form.addEventListener('submit', sumarInputValues);


function sumarInputValues(event){
  //console.log({event});
  event.preventDefault();
  const sumaInputs = input1.value + input2.value;
  parrafo_resultado.innerText = "Resultado: " + sumaInputs;
}
*/
