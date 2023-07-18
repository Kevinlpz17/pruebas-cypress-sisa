import { faker } from "@faker-js/faker";

const pais = faker.address.country();

const updateProfile = {
    telefono: faker.phone.number("9#######"),
    correoNuevo: faker.name.firstName().split(" ").join("").toLocaleLowerCase() + "@gmail.com",
    password: "M3d1cos-M3dicatel-2023",
    pais: pais,
}

export{
    updateProfile
};