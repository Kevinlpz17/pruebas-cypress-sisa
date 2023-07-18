import { randomBeetwenInteger } from "../../helpers/random/fechasYNumeros";

const { faker } = require("@faker-js/faker");
const nombres = faker.name.firstName() + " " + faker.name.firstName();
const apellidos = faker.name.lastName() + " " + faker.name.lastName();

const asistenteMedico = {
  nombreAsistente: `${nombres} ${apellidos}`,
  telefonoAsistente: faker.phone.number("9#######"),
  correoAsistente:
    nombres.split(" ").join("").toLocaleLowerCase() + "@mail.com",
};

const passwordWord = faker.lorem.word(6);
const passwordRandom =
  passwordWord.charAt(0).toUpperCase() +
  passwordWord.slice(1) +
  randomBeetwenInteger(111, 999);

const numColegiacion = randomBeetwenInteger(1111, 9999);

export { asistenteMedico, passwordRandom, numColegiacion };
