//---------------------------------------------------------------------------------------------
//Datos aleatorios para pantalla Centros Clinicos
//---------------------------------------------------------------------------------------------
import { CiudadRandom } from '../../helpers/administracion/crearPersona';
const { faker } = require("@faker-js/faker");
const nombres = faker.company.name();

const direccion = faker.address.county() + " " + faker.address.city();
const horario = [
    'Lunes a Sabado de 8:00 AM - 12:00 PM Domigos cita previa',
    'Lunes a Viernes de 8:00 AM - 5:30 PM',
];

let randHorario = Math.floor(Math.random() * horario.length);
const horarioRandom = horario[randHorario];

const crearCC = [
    { nombre: nombres },
    { horario: horarioRandom },
    { telefono: faker.phone.number("22##2###") },
    { celular: faker.phone.number("9###9###") },
    { direccion: direccion },
    { ciudad: CiudadRandom },
]

export { crearCC }