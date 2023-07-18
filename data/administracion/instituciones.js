//---------------------------------------------------------------------------------------------
//Datos aleatorios para pantalla Instituciones
//---------------------------------------------------------------------------------------------
import { DireccionRandom } from "../../helpers/administracion/crearPersona";
import { randomBeetwenInteger } from "../../helpers/random/fechasYNumeros";

const { faker } = require("@faker-js/faker");
const nombres = faker.company.bs();
const identidades = faker.phone.number(
    `9999${randomBeetwenInteger(1920, 2022)}#####`
);
const RTN = faker.phone.number(
    `${identidades}#`
);
const estado = ['Activo', 'Inactivo'];

let randEstado = Math.floor(Math.random() * estado.length);
const estadoRadomAI = estado[randEstado];

const crearInstitucion = [


    { nombre: nombres },
    { rtn: RTN },
    { correo: nombres.split(" ").join("").toLocaleLowerCase() + "@gmail.com", },
    { estado: estadoRadomAI },
    { telefono: faker.phone.number("22##2###") },
    { direccion: DireccionRandom },
]

export { crearInstitucion }