//Variables de prueba
import {
  anioActual,
  hoy,
  mesActual,
  mesActual2,
  mesRandomConNombre,
  randomBeetwenDecimal,
  randomBeetwenInteger,
  mesRandom2,
} from "../../helpers/random/fechasYNumeros";

import {
  enfermedadRandom,
  enfermedadRandom2,
  diagnósticoCIE10Random,
  incapacidadFin,
  medicoRandom,
} from "../../helpers/medicos/iniciarCita";

const { faker } = require("@faker-js/faker");

const inicio = {
  correo: Cypress.env("USER_MEDICOS"),
  password: Cypress.env("PASS_MEDICOS"),
  paciente: "Carlos Javier",
};

const signosVitales = {
  peso: randomBeetwenInteger(60, 230),
  altura: randomBeetwenDecimal(1, 2.2),
  temperatura: randomBeetwenDecimal(20, 45),
  frecRespiratorio: randomBeetwenInteger(10, 35),
  spo2: randomBeetwenInteger(20, 100),
  frecCardiaca: randomBeetwenInteger(20, 180),
  presionArterial: `${randomBeetwenInteger(100, 150)}/${randomBeetwenInteger(
    60,
    80
  )}`,
};

const antecedentesPersonales = [
  {
    enfermedad: enfermedadRandom,
    anio: randomBeetwenInteger(1960, anioActual),
    mes: mesRandom2,
    mesConNombre: mesRandomConNombre,
    dia: randomBeetwenInteger(1, 30),
    descripcion: faker.lorem.sentence(5),
  },
  {
    cirujia: "cirujia1",
    anio: randomBeetwenInteger(1960, anioActual),
    mes: mesRandom2,
    mesConNombre: mesRandomConNombre,
    dia: randomBeetwenInteger(1, 30),
    descripcion: faker.lorem.sentence(5),
  },
  {
    alergia: "alergia1",
    descripcion: faker.lorem.sentence(5),
  },
];

const antecedentesFamiliares = [
  {
    enfermedad: enfermedadRandom2,
    anio: randomBeetwenInteger(1960, anioActual),
    mes: mesRandom2,
    mesConNombre: mesRandomConNombre,
    dia: randomBeetwenInteger(1, 30),
    indiceParentesco: randomBeetwenInteger(1, 2),
    descripcion: faker.lorem.sentence(5),
  },
  {
    cirujia: "cirujia2",
    anio: randomBeetwenInteger(1960, anioActual),
    mes: mesRandom2,
    mesConNombre: mesRandomConNombre,
    dia: randomBeetwenInteger(1, 30),
    descripcion: faker.lorem.sentence(5),
  },
  {
    alergia: "alergia1",
    descripcion: faker.lorem.sentence(5),
  },
];

const fichaMedica = {
  motivo: faker.lorem.slug(),
  historia: faker.lorem.sentence(5),
  examenFisico: faker.lorem.slug(),
  diagnosticoCIE10: diagnósticoCIE10Random,
  obsPaciente: faker.lorem.sentence(5),
  obsMedicas: faker.lorem.sentence(5),
};

const documentos = {
  incapacidad: {
    motivo: faker.lorem.slug(),
    anioI: anioActual,
    mesI: mesActual,
    mesI2: mesActual2,
    diaI: hoy,
    anioF: incapacidadFin.anioF,
    mesF: incapacidadFin.mesF,
    mesFConNombre: incapacidadFin.mesFConNombre,
    diaF: incapacidadFin.diaF,
    mesNombreF: incapacidadFin.nombreMesF,
  },
  recetaMedicamento: {
    medicamento1: faker.lorem.slug(),
    dosis1: randomBeetwenInteger(1, 10),
    medicamento2: faker.lorem.slug(),
    dosis2: randomBeetwenInteger(1, 10),
    intervalos: randomBeetwenInteger(1, 10),
  },
  otraReceta: {
    titulo: faker.lorem.slug(),
    descripcion: faker.lorem.sentence(5),
  },
  referencia: {
    medicoEspecialista: medicoRandom,
    especialidad: "Dermatologia",
    datosClinicos: faker.lorem.sentence(5),
  },
  examenes: {
    examenLab: "hemograma",
    elObservacciones: "Ut enim ad minim veniam, quis nostrud exercitation",
    examenRad: "Irm De Rodilla Derecha",
    erObservacciones: faker.lorem.sentence(5),
    otroExamen: faker.lorem.slug(),
    indiceExamen: randomBeetwenInteger(0, 4),
  },
  otro: faker.lorem.sentence(5),
};

export {
  inicio,
  signosVitales,
  antecedentesPersonales,
  antecedentesFamiliares,
  fichaMedica,
  documentos,
};

