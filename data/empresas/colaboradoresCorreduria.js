// Arreglo de colaboradores
const colaboradoresCorreduria = [
  { nombre: "Jadon Sancho", indice: 2 },
  { nombre: "Cristian Pulisic", indice: 4 },
  { nombre: "Tomás Partey", indice: 7 },
  { nombre: "Julio Draxler", indice: 10 },
];

// Seleccionar un colaborador aleatorio
const colaboradorAleatorio =
  colaboradoresCorreduria[
    Math.floor(Math.random() * colaboradoresCorreduria.length)
  ];

export { colaboradorAleatorio };
