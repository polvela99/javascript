//parte1
const nombre = (name,surname) =>{
    console.log(name+ " "+surname);
}
nombre("pol","vela");
//parte 2
const nombre1 = function(){
    const nombre1 = false;
    console.log(nombre1); 
}
nombre1();

//parte3
const saludar = function(...valores){
    valores.forEach(element => {
        console.log(element);
    })
}
saludar(1,2,3,4,5)