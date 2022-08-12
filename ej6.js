//part1
const suma = (num1,num2,num3) =>{
    result = num1+num2+num3;
    return(result);
  }
  function resultado(result){
    console.log(result);
  }
  resultado(suma(3,3,3));
//part2
const presentacion = function(nombre,surname,surname2){
    console.log(nombre +" "+ surname +" " + surname2);
}
presentacion("Pol","Vela","Prous");

//part3

const aceptar = (number1,number2) =>{
    if (number1 > number2){
        console.log(number1);
    }else{
        console.log(number2);
    }
}
aceptar(5,4);


