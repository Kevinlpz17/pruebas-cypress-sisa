
const GestionarPerfil =  require("../../pages/SISA/administrativo/GestionarPerfil")

describe("Sistemas Combinados", () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
        return false;
    });

    //Cerrar seciones abiertas
    before(() => {
        Cypress.session.clearAllSavedSessions();
        Cypress.session.clearCurrentSessionData();
        cy.loginAdminSisa("admin@sisa.com", "Asegurame_2023")
        
    });


    it("Gestionar perfi", () => {
        GestionarPerfil.clickSisaMenu()
        GestionarPerfil.selectPerfil()
    })
})