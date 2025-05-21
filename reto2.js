console.log("Ingrese el rango de numeros")
let rango = Number("Ingrese el rango de numeros")

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
  alert(numero + " es un número primo.");
} else {
  alert(numero + " NO es un número primo.");
}

