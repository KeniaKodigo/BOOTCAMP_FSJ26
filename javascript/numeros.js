let array_numbers = [23,45,6,100,10,12,78];

let array_par = [];
let array_impar = [];

//Devolver 2 arreglos donde tengan numeros pares e impares
//dividirlo entre 2
//numero % 2 == 0
let i = 0;
while(i < array_numbers.length){
    if(array_numbers[i] % 2 === 0){
        //numero par
        //metodo para agregar elementos al final del arreglo
        array_par.push(array_numbers[i])
    }else{
        //numero es impar
        array_impar.push(array_numbers[i])
    }
    i++;
}
//[23,45,6,100,12,78]
//item = 23
//item = 45
array_par = array_numbers.filter(value => value % 2 === 0);
array_impar = array_numbers.filter(value => value % 2 !== 0); //[]

//find => devuelve el primer elemento que encuentra
let find = array_numbers.find(value => value % 2 === 0);
console.log(find); //6

//include => verifica si un elemento esta dentro del arreglo
let results = array_par.includes(10) //true o false
console.log("Verificando si el numero esta incluido: ",results);

//carnet
console.log("Arreglo Original")
console.table(array_numbers)
console.log("Arreglo Pares")
console.table(array_par)
console.log("Arreglo Impares")
console.table(array_impar)