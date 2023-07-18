import { faker } from "@faker-js/faker";
import { mesRandomConNombre, mesRandomConNombreIngles, randomBeetwenDecimal, randomBeetwenInteger } from "../../helpers/random/fechasYNumeros";
import { 
    CiudadRandom, 
    DepartamentoRandom,
    randIndiceSexo,
    randCoberturasRandom,
    randTipoPolizaRandom,
    randMonedaRandom,
    dayRandom,
    PrioridadPolizaRandom
 } from "../../helpers/administracion/crearPersona";
import { randEspecialidadesRandom, randTipoProductoRandom } from "../../helpers/administracion/seguros";

const nameAseguradora = faker.company.bsBuzz();


const CreateAseguradora = {
    RTN: faker.phone.number("9999"+randomBeetwenInteger(1950,2023)+"######"),
    NameAseguradora: nameAseguradora,
    RazonSocial: nameAseguradora,
    Correo: nameAseguradora.split(" ").join("").toLocaleLowerCase() +"@gmail.com",
    Telefono: faker.phone.number("22##2###"),
    Departamento: DepartamentoRandom,
    Ciudad: CiudadRandom,
    Direccion: faker.address.direction(),

    NameContact: faker.name.firstName() + " " + faker.name.lastName(),
    CorreoContact: faker.name.firstName().toLocaleLowerCase() + faker.name.lastName().toLocaleLowerCase() +"@gmail.com",
    TelefonoContact: faker.phone.number("99######"),

    //Create Seguro a Aseguradora
    NameSeguro: faker.lorem.slug(2),
    DescriptionSeguro: "N/A",
}

const CreatePoliza = {
    TipoPoliza: randTipoPolizaRandom,
    PrioridadPoliza: PrioridadPolizaRandom,
    Aseguradora: nameAseguradora,
    Seguro: CreateAseguradora.NameSeguro,
    NPoliza: nameAseguradora.substring(0,3).toUpperCase() + "-" + faker.phone.number("####"),
    Moneda: randMonedaRandom,
    Dia: dayRandom,
    Mes: mesRandomConNombreIngles,
    Descripcion: "N/A",
    PorcentajeA: randomBeetwenInteger(10,15)
}

const CreatePlanDeCobertura = {
    NamePlan: faker.lorem.slug(4),
    PrecioMinimo: randomBeetwenInteger(0, 400),
    LimiteReemolsoMedico: randomBeetwenInteger(400, 4000),
    LimiteReemolsoOtros: randomBeetwenInteger(400, 4000),
    Deducible: randomBeetwenInteger(200, 2000),
    LimitePrecestrificacion: randomBeetwenInteger(200, 4000),
    CoberturaMundial: randCoberturasRandom,
}

const ConfiguracionPlanCobertura = {
    Especialidades: randEspecialidadesRandom,
    MontoMinimo: 200,
    MontoMaximo: 5000,
    PorcentajeCoPago: 30,
    PorcentajeDescuento: 70,
    TipoProducto: randTipoProductoRandom,
}

export{
    CreateAseguradora,
    CreatePlanDeCobertura,
    CreatePoliza,
    ConfiguracionPlanCobertura
}