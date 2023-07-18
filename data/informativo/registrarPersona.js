import { randomBeetwenInteger } from "../../helpers/random/fechasYNumeros";
import { mesRandom, diasRandom } from "../../helpers/random/fechasYNumeros";

const { faker } = require("@faker-js/faker");
const nombres = faker.name.firstName() + " " + faker.name.firstName();
const apellidos = faker.name.lastName() + " " + faker.name.lastName();
const anioNacimiento = randomBeetwenInteger(1920, 2022);
const identidades = faker.phone.number(`9999${anioNacimiento}#####`);
const mesNacimiento = mesRandom;
let diaNac = diasRandom;

if (mesNacimiento === "02" && diaNac > 28) {
  diaNac = "01";
}

const diaNacimiento = diaNac;
const fechaNacimiento = `${anioNacimiento}-${mesNacimiento}-${diaNacimiento}`;

const informativoRegistroPersona = {
  identidad: identidades,
  nombre: nombres,
  apellidos: apellidos,
  fecha: fechaNacimiento,
  celular: faker.phone.number("9#######"),
  correo: nombres.split(" ").join("").toLocaleLowerCase() + "@gmail.com",
  password: "M3d1cos-M3dicatel-2021",
};

export { informativoRegistroPersona };
