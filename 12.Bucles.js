//BUCLES 
//Bucles son una estructura de control de flujo que se van repitiendo 
//dependiendo de una condición dada 

//WHILE(mientras)
/*
 let timer=0; 

 while(timer<20){
    
    timer++ 
    console.log("timer:"+timer)
 }
*/
//DO WHILE(haz - mientras)
//se va a ejecutar siempre 
//minimo una vez 
//primero hace y luego evalua
/*
 let timer=0; 

 do {
     timer++
     console.log('timer:'+timer)
 }while(timer>20)
 */

//FOR  (por)
/*
 let frutas=['platano','naranja','sandia','melón', 'manzana']

for(let i = frutas.length-1; i >= 0; i--){
    console.log(frutas[i])
}
*/
/*
 for(let i=0;i<frutas.length;i++){
     console.log(frutas[i])
 }
*/

//FOR OF (POR)
//Recorremos un array y nos devuelve 
// los elementos 

let frutas=['platano','naranja','sandia','melón', 'manzana']
/*
 for(const fruta of frutas.reverse()){
   console.log(fruta)
 }
*/

/*
 frutas.reverse().forEach((fruta, index)=>{
        console.log(fruta, index)
})
*/

//FOR IN (POR )
//Recorre un array y nos devuelve los indices 
/*
for(const fruta in frutas.reverse()){
    console.log(frutas[fruta],fruta)
}

console.log(frutas)
*/
//RECORREMOS OBJETOS CON FOR IN 
/*
const mascota={
    nombre:"Pipo",
    raza:"Pastor Aleman",
    edad:3, 
    propietario:"Luis Fernandez",
    aficciones:['saltar','jugar','morder']
}

for(const propiedad in mascota){
    console.log(`key:${propiedad},value:${mascota[propiedad]}`)
}
*/