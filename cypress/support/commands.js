const LoginSISA = require("../pages/SISA/administrativo/Login.js");
const {
  randomBeetwenInteger,
} = require("../../helpers/random/fechasYNumeros.js");
const { destinosRandom } = require("../../helpers/random/paises.js");

Cypress.Commands.add("loginAdminSisa", (correo, password) => {
  cy.visit(Cypress.env("URL_APP_SISA_ADMINISTRATIVO"));

  //Iniciar Sesion
  LoginSISA.typeCorreo(correo);
  LoginSISA.typePassword(password);
  LoginSISA.clickBtnIngresar();
});
