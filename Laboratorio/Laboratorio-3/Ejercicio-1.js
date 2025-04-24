/*
   El problema nos plantea que debemos tener una función que reciba un número
   según el día actual del 0 al 6 con el objeto Date. Debemos devolver el dia
   en cadena o texto.

   Mi solución será crear un objeto Date, usar su método getDay() y la función
   mediante un arreglo inicializado de los días de la semana.
*/

function diaSemana (numero) {
	const dia = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
	return dia[numero];
}

const fecha = new Date();
let   dia   = fecha.getDay();

console.log( diaSemana(dia) );
