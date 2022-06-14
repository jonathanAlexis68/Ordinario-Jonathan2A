let numero = 1;

do {
  let contador = 0;
  numero++;
  for (let i = 1; i <= numero; i++) {
    if (numero % i == 0) {
      contador++;
    }
  }
  if (contador == 2) {
    console.log(numero);
  }
} while (numero <= 99);