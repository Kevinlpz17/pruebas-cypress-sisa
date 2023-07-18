//---------------------------------------------------------------------------------------------
//Datos aleatorios para pantalla Proveedores
//---------------------------------------------------------------------------------------------

import {
  SexoRandom,
  monthsRandom,
  dayRandom,
  EstadoRandom,
  EstadoRandomAse,
  NacionalidadRandom,
} from "../../helpers/administracion/crearPersona";

import { randomBeetwenInteger } from "../../helpers/random/fechasYNumeros";

const { faker } = require("@faker-js/faker");
const nombres = faker.name.firstName() + " " + faker.name.firstName();
const apellidos = faker.name.lastName() + " " + faker.name.lastName();
const identidades = faker.phone.number(
  `9999${randomBeetwenInteger(1920, 2023)}#####`
);
const RTN = faker.phone.number(`${identidades}#`);
const colegiacion = faker.phone.number("########");
const diasCredito = randomBeetwenInteger(1, 5);
const estado = ["Activo", "Inactivo"];
const NPacientes = ["1 Paciente", "2 Pacientes", "3 Pacientes", "4 Pacientes"];

let randNPacientes = Math.floor(Math.random() * NPacientes.length);
const NPacientesRandom = NPacientes[randNPacientes];

let randEstado = Math.floor(Math.random() * estado.length);
const estadoRadomAI = estado[randEstado];

const crearMedico = {
  ncolegiacion: colegiacion,
  identidad: identidades,
  nombre: nombres,
  apellidos: apellidos,
  sexo: SexoRandom,
  months: monthsRandom,
  day: dayRandom,
  estadoCivil: EstadoRandomAse,
  nacionalidad: NacionalidadRandom,
  correo: nombres.split(" ").join("").toLocaleLowerCase() + "@gmail.com",
  celular: faker.phone.number("9#######"),
  rtn: RTN,
  nombreAsistente: "Juan Jose",
  correoAsistente: "juanjose@gmail.com",
  telAsistente: 94949494,
  estado: estadoRadomAI,
  diasCredito: diasCredito,
  NPacientesxHora: NPacientesRandom,
};

export { crearMedico };
