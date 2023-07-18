//---------------------------------------------------------------------------------------------
//Datos aleatorios para pantalla Gestion Empresarial
//---------------------------------------------------------------------------------------------
import {
    NacionalidadRandom,
    DepartamentoRandom,
    CiudadRandom,
    DireccionRandom,
} from "../../helpers/administracion/crearPersona";
import { randomBeetwenInteger } from "../../helpers/random/fechasYNumeros";
const { faker } = require("@faker-js/faker");

const nombresE = faker.company.bs();
const nameUsers = faker.internet.userName()
const RTN = faker.phone.number(
    `9999${randomBeetwenInteger(1920, 2022)}######`
);

const crearEmpresa = [
    { nombreE: nombresE },
    { RTNE: RTN },
    { Correo: nombresE.split(" ").join("").toLocaleLowerCase() + "@gmail.com" },
    { Telefono: faker.phone.number("22##2###") },
    { Pais: NacionalidadRandom },
    { Departamento: DepartamentoRandom },
    { Ciudad: CiudadRandom },
    { Direccion: DireccionRandom },
    { RazonSocial: faker.finance.accountName() }
]

const NewUsers = [
    { nameUser: nameUsers },
    { mailUser: nameUsers.split(" ").join("").toLocaleLowerCase() + "@gmail.com" },
    { nameEmpresa: nombresE },
]

export { crearEmpresa, NewUsers }