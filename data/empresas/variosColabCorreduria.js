// Arreglo de colaboradores
const colaboradoresCorreduria = [
  { nombre: "Jadon Sancho", indice: 2 },
  { nombre: "Cristian Pulisic", indice: 4 },
  { nombre: "Julio Draxler", indice: 10 },
];

// Seleccionar un colaborador aleatorio
const colaboradorAleatorio =
  colaboradoresCorreduria[
    Math.floor(Math.random() * colaboradoresCorreduria.length)
  ];

/*---Colaboradores 2da parte ---*/
const colaboradoresCorreduria2 = [
  { nombre: "Mario Balotelli", indice: 5 },
  { nombre: "Tadeo Manuel", indice: 9 },
  { nombre: "Tomás Partey", indice: 7 },
];

const colaboradorAleatorio2 =
  colaboradoresCorreduria2[
    Math.floor(Math.random() * colaboradoresCorreduria2.length)
  ];

/*---Colaboradores 3ra parte ---*/
const colaboradoresCorreduria3 = [
  { nombre: "Gillermina Rosa", indice: 6 },
  { nombre: "Marcos Reus", indice: 1 },
  { nombre: "Gael Donovan", indice: 3 },
];

const colaboradorAleatorio3 =
  colaboradoresCorreduria3[
    Math.floor(Math.random() * colaboradoresCorreduria3.length)
  ];

export { colaboradorAleatorio, colaboradorAleatorio2, colaboradorAleatorio3 };
