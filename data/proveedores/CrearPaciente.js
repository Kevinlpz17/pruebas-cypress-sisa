import {
    SexoRandom,
    monthsRandom,
    dayRandom,
    EstadoRandom,
    randIndiceEst,
    DireccionRandom,
    TipoSanreRandom,
    randIndiceSexo,
  } from "../../helpers/administracion/crearPersona";
  
  import {
    diasRandom,
    mesRandomConNombre,
    randomBeetwenInteger,
    mesRandom
  } from "../../helpers/random/fechasYNumeros";
  import { fechaCitaAgenda } from "../../helpers/medicos/FechaCitaAgenda";
  
  const { faker } = require("@faker-js/faker");
  const nombres = faker.name.firstName() + " " + faker.name.firstName();
  const apellidos = lastNameValidator() + " " + lastNameValidator();
  const nombres2 = faker.name.firstName() + " " + faker.name.firstName();
  const apellidos2 = lastNameValidator() + " " + lastNameValidator();
  const nombres3 = faker.name.firstName() + " " + faker.name.firstName();
  const apellidos3 = lastNameValidator() + " " + lastNameValidator();
  
  function lastNameValidator() {
    let apellidoFaker = faker.name.lastName();
    while (apellidoFaker.includes("'")) {
      apellidoFaker = faker.name.lastName();
    }
  
    return apellidoFaker;
  }
  
  const identidades = faker.phone.number(
    `9999${randomBeetwenInteger(1920, 2023)}#####`
  );
  
  const identidades2 = faker.phone.number(
    `9999${randomBeetwenInteger(1920, 2023)}#####`
  );
  
  const identidad3 = faker.phone.number(
    `9999${randomBeetwenInteger(1920, 2023)}#####`
  );
  
  
  const CrearNuevoPaciente = {
    // tipoIdentidad: TipoIDRandom,
    identidad: identidades,
    identidad2: identidades2,
    identidad3: identidad3,
    nombre: nombres,
    apellidos: apellidos,
    nombres2: nombres2,
    apellidos2: apellidos2,
    nombres3: nombres3,
    apellidos3: apellidos3,
    fechaNacimiento:
      diasRandom + mesRandom + randomBeetwenInteger(1920, 2022),
    fechaActual: diasRandom + mesRandom + "2023",
    sexo: SexoRandom,
    sexoIndice: randIndiceSexo,
    fechaAgenda: fechaCitaAgenda,
    meses: mesRandomConNombre,
    day: dayRandom,
    annioNacimiento: randomBeetwenInteger(1920, 2023),
    ocupacion: faker.name.jobArea(),
    estado: EstadoRandom,
    indiceEstado: randIndiceEst,
    direccion: DireccionRandom,
    telefono: faker.phone.number("22##2###"),
    celular: faker.phone.number("9#######"),
    correo: nombres.split(" ").join("").toLocaleLowerCase() + "@gmail.com",
    tipoSangre: TipoSanreRandom
}

export { CrearNuevoPaciente };