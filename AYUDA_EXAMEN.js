const productos = {
  arroz: 2,
  leche: 1,
  pan: 3
};

let acumulador = Number
acumulador = 0
for (let clave in productos) {
  acumulador = acumulador + productos[clave];
  console.log(acumulador)
}







const frutas = ["manzana", "plátano", "naranja"];

frutas.forEach((fruta, index) => {
  console.log(`Fruta ${index + 1}: ${fruta}`);
});





const numeros = [2, 4, 6];

for (const num of numeros) {
  console.log(`Doble: ${num * 2}`);
}




const persona = {
  nombre: "Lucía",
  edad: 25,
  ciudad: "Valencia"
};

for (const clave in persona) {
  console.log(`${clave}: ${persona[clave]}`);
}




const edades = [12, 18, 25, 15, 30];

const mayoresDeEdad = edades.filter(edad => edad >= 18);
console.log(mayoresDeEdad); // [18, 25, 30]





const precios = [10, 20, 30];

const conIVA = precios.map(precio => precio * 1.21);
console.log(conIVA); // [12.1, 24.2, 36.3]
