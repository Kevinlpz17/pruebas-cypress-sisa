//---------------------------------------------------------------------------------------------
//Datos aleatorios para pantalla Asistentes
//---------------------------------------------------------------------------------------------

import { SexoRandom, monthsRandom, dayRandom, EstadoRandom, NacionalidadRandom } from '../../helpers/administracion/crearPersona';
import { randomBeetwenInteger } from "../../helpers/random/fechasYNumeros";

const { faker } = require('@faker-js/faker');
const nameAsistente = faker.name.firstName() + " " + faker.name.firstName();
const apellidoAsistente = faker.name.lastName() + " " + faker.name.lastName();
const dni = faker.phone.number(`9999${randomBeetwenInteger(1920,2023)}#####`);
const estado = ["Activo", "Inactivo"];

let randEstado = Math.floor(Math.random() * estado.length);
const estadoRadomAI = estado[randEstado];

const crearAsistente = {
    nombre: nameAsistente,
    apellido: apellidoAsistente,
    identidad: dni,
    sexo: SexoRandom,
    mes: monthsRandom, 
    dia: dayRandom,
    nacionalidad: NacionalidadRandom,
    correoElectronico: nameAsistente.split(" ").join("").toLocaleLowerCase() + "@gmail.com",
    password: 'Test2023',
    estado: estadoRadomAI,
    telefono: faker.phone.number("9#######")
}

export { crearAsistente };
