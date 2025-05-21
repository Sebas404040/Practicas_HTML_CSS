let continuar;

do {
  let opcion = Number(prompt("Ingrese un número para ordenar sus postres:\n1. Genovesa\n2. Limonsazo\n3. Tres leches\n4. Pan francés"));
  let postre;

  switch (opcion) {
    case 1:
      postre = "Genovesa";
      break;
    case 2:
      postre = "Limonsazo";
      break;
    case 3:
      postre = "Tres leches";
      break;
    case 4:
      postre = "Pan francés";
      break;
    default:
      postre = "Opción no válida. Listo, gracias.";
  }
  console.log(postre)

  continuar = confirm("¿Deseas pedir otro postre?");
} while (continuar);

console.log("Gracias por tu compra.");

