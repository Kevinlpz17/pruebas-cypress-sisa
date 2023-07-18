//---------------------------------------------------------------------------------------------
//Datos aleatorios para pantalla Agenda
//---------------------------------------------------------------------------------------------

import 
{ 
    SexoRandom, 
    monthsRandom, 
    dayRandom, 
    EstadoRandom, 
    TipoSanreRandom, 
    DireccionRandom 
} from '../../helpers/administracion/crearPersona';

import { randomBeetwenInteger, mesRandomConNombre, MesAbrRandom } from "../../helpers/random/fechasYNumeros";

const { faker } = require('@faker-js/faker');
const namePaciente = faker.name.firstName() + " " + faker.name.firstName();
const apellidoPaciente = faker.name.lastName() + " " + faker.name.lastName();
const dni = faker.phone.number(`9999${randomBeetwenInteger(1920, 2023)}#####`);
const Profesion = faker.name.jobArea();

const crearPaciente = {
    identidad: dni,
    nombre: namePaciente,
    apellido: apellidoPaciente,
    telefono: faker.phone.number("9#######"),
    correo: namePaciente.split(" ").join("").toLocaleLowerCase() + "@gmail.com",
    direccion: DireccionRandom,
    day: dayRandom,
    month: MesAbrRandom,
    year: randomBeetwenInteger(1920, 2023),
    genero: SexoRandom,
    estado: EstadoRandom,
    profesion: Profesion,
    tipoSangre: TipoSanreRandom
}

export{
    crearPaciente
}