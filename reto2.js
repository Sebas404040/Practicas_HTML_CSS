let inicio = Number(prompt("Ingrese el número inicial del rango:"));
let fin = Number(prompt("Ingrese el número final del rango:"));

console.log("Números primos entre " + inicio + " y " + fin + ":");

for (let numero = inicio; numero <= fin; numero++) {
  let esPrimo = true;

  if (numero <= 1) {
    esPrimo = false;
  } else {
    for (let i = 2; i <= numero / 2; i++) {
      if (numero % i === 0) {
        esPrimo = false;
        break;
      }
    }
  }

  if (esPrimo) {
    console.log(numero);
  }
}


