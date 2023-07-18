import { randomBeetwenInteger } from "../../helpers/random/fechasYNumeros";
import {
  medicos,
  medicosSinCosto,
  medicosRandom,
  TipoPlan,
  CorreoSusRandom,
  medicosMedicatel,
} from "../../helpers/pacientes/pacientes";
import {
  enfermedadRandom,
  medicoRandom,
} from "../../helpers/medicos/iniciarCita";
import { AseguradosCrearPersona } from "../../data/administracion/crearPersona";

import { TipoSanreRandom } from "../../helpers/administracion/crearPersona";

const { faker } = require("@faker-js/faker");

const correo = [];
correo.push(faker.internet.email());
const pass = [];
pass.push(faker.lorem.word(5));

const userData = {
  nombres: AseguradosCrearPersona.nombre,
  apellidos: AseguradosCrearPersona.apellidos,
  identidad: AseguradosCrearPersona.identidad,
  // `9999${randomBeetwenInteger(100000000, 999999999)}`
  fecha_nacimiento: `${randomBeetwenInteger(1930, 2022)}-${randomBeetwenInteger(
    1,
    12
  )}-${randomBeetwenInteger(1, 28)}`,
  celular: faker.phone.number(),
  email: AseguradosCrearPersona.correo,
  password: "M3d1cos-M3dicatel-2021",
};

let randIndicedpMedico = Math.floor(Math.random() * medicos.length);
let randIndicedpMedicoSinCosto = Math.floor(
  Math.random() * medicosSinCosto.length
);
let randIndicedpMedicoRandom = Math.floor(Math.random() * medicosRandom.length);
let randIndiceTPlan = Math.floor(Math.random() * TipoPlan.length);
let randIndicedpMedicoMedicatel = Math.floor(
  Math.random() * medicosMedicatel.length
);
let indicePacienteExistente = Math.floor(
  Math.random() * medicos[randIndicedpMedico].pacientesPropios.length
);

const dpMedicos = {
  especialidad: medicos[randIndicedpMedico].especialidad,
  titulo: medicos[randIndicedpMedico].titulo,
  nombre: medicos[randIndicedpMedico].nombre,
  copago: medicos[randIndicedpMedico].copago,
  descuento: medicos[randIndicedpMedico].descuento,
  indiceCard: medicos[randIndicedpMedico].indiceCard,
  correo: medicos[randIndicedpMedico].correo,
  password: medicos[randIndicedpMedico].password,
  nombreLiquidacion: medicos[randIndicedpMedico].nombreLiquidacion,
  nombreCombo: medicos[randIndicedpMedico].nombreCombo,
  search: medicos[randIndicedpMedico].search,
  pacientePropio:
    medicos[randIndicedpMedico].pacientesPropios[indicePacienteExistente],
};

const dpMedicosSinCosto = {
  especialidad: medicosSinCosto[randIndicedpMedicoSinCosto].especialidad,
  nombre: medicosSinCosto[randIndicedpMedicoSinCosto].nombre,
  copago: medicosSinCosto[randIndicedpMedicoSinCosto].copago,
  descuento: medicosSinCosto[randIndicedpMedicoSinCosto].descuento,
  indiceCard: medicosSinCosto[randIndicedpMedicoSinCosto].indiceCard,
  correo: medicosSinCosto[randIndicedpMedicoSinCosto].correo,
  password: medicosSinCosto[randIndicedpMedicoSinCosto].password,
  nombreLiquidacion:
    medicosSinCosto[randIndicedpMedicoSinCosto].nombreLiquidacion,
  nombreCombo: medicosSinCosto[randIndicedpMedicoSinCosto].nombreCombo,
  search: medicosSinCosto[randIndicedpMedicoSinCosto].search,
};

const dpMedicosMedicatel = {
  nombre: medicosMedicatel[randIndicedpMedicoMedicatel].nombre,
  correo: medicosMedicatel[randIndicedpMedicoMedicatel].correo,
  password: medicosMedicatel[randIndicedpMedicoMedicatel].password,
  indice: medicosMedicatel[randIndicedpMedicoMedicatel].indice,
  especialidad: medicosMedicatel[randIndicedpMedicoMedicatel].especialidad,
};

const dpMedicoRandom = {
  especialidad: medicosRandom[randIndicedpMedicoRandom].especialidad,
  titulo: medicosRandom[randIndicedpMedicoRandom].titulo,
  nombre: medicosRandom[randIndicedpMedicoRandom].nombre,
};

const dependientes = [
  {
    nombre: "ANDREA NICOLE",
    apellido: "CABALLERO ZUNIGA",
    correo: "izuniga@terra-inmob.com",
    identidad: "0801197713531-2",
    fechaNacimiento: "05092000",
  },
];

let randDependientes = Math.floor(Math.random() * dependientes.length);
const DependientesRandom = dependientes[randDependientes];

const TPlan = {
  plan: TipoPlan[randIndiceTPlan].plan,
  indice: TipoPlan[randIndiceTPlan].indicePlan,
};

const Pacientes = [
  { correo: CorreoSusRandom },
  { tipoSangre: TipoSanreRandom },
  { profesion: faker.name.jobArea() },
  { enfermedad: enfermedadRandom },
  { anio: randomBeetwenInteger(1950, 2022) },
  { alergia: "Alergia 1" },
];

const requestBody = JSON.stringify(userData);

export {
  requestBody,
  userData,
  dpMedicos,
  dpMedicoRandom,
  TPlan,
  Pacientes,
  dpMedicosMedicatel,
  dpMedicosSinCosto,
  DependientesRandom,
};
