
const { randomBeetwenInteger, mesRandomConNombre } = require("../../../helpers/random/fechasYNumeros");
const SeguroVidaVITEPaso1 = require("../../pages/SISA/cotizador/SeguroVidaVITEPaso1");
const SeguroVidaVITEPaso2 = require("../../pages/SISA/cotizador/SeguroVidaVITEPaso2");
const { randomBooleanNumber } = require("../../../helpers/random/fechasYNumeros");
const SeguroVidaVINCPaso1 = require("../../pages/SISA/cotizador/SeguroVidaVINCPaso1");
const SeguroVidaVINCPaso2 = require("../../pages/SISA/cotizador/SeguroVidaVINCPaso2");

describe("Sistemas Combinados", () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
        return false;
    });

    it.only("Cotizar auto", () => {
        cy.visit(Cypress.env("URL_APP_SISA_COTIZADOR"));
       
    })

    it("Cotizar seguro vida increible", () => {
        cy.visit(Cypress.env("URL_APP_SISA_COTIZADOR"));
        cy.wait(1000)
        SeguroVidaVINCPaso1.clickBtnCotizarVida()
        SeguroVidaVINCPaso1.clickBtnCotizarVINC()
        SeguroVidaVINCPaso1.typeMonto(randomBeetwenInteger(10000, 100000))
        SeguroVidaVINCPaso1.selectDia(randomBeetwenInteger(1,29))
        SeguroVidaVINCPaso1.selectMes(mesRandomConNombre)
        SeguroVidaVINCPaso1.selectAnio(randomBeetwenInteger(1996, 2004))
        SeguroVidaVINCPaso1.selectGenero(randomBeetwenInteger(0,1))
        SeguroVidaVINCPaso1.selectFuma(randomBeetwenInteger(0,1))
        SeguroVidaVINCPaso1.clickBtnSiguiente()
        SeguroVidaVINCPaso2.typePrimerNombre("Mario")
        SeguroVidaVINCPaso2.typeSegundoNombre("Felipe")
        SeguroVidaVINCPaso2.typePrimerApellido("Bros")
        SeguroVidaVINCPaso2.typeSegundoApellido("Zuniga")
        SeguroVidaVINCPaso2.typeCorreo("mbros@gmail.com")
        SeguroVidaVINCPaso2.selectCodPais("503")
        SeguroVidaVINCPaso2.typeTelefono("23232323")
        SeguroVidaVINCPaso2.clickBtnCotizar()
    })

    it("Cotizar seguro vida temporal", () => {
        cy.visit(Cypress.env("URL_APP_SISA_COTIZADOR"));
        const boolean = randomBooleanNumber
        cy.wait(1000)
        SeguroVidaVITEPaso1.clickBtnCotizarVida()
        SeguroVidaVITEPaso1.clickBtnCotizarVITE()
        SeguroVidaVITEPaso1.typeMonto(randomBeetwenInteger(10000, 100000))
        SeguroVidaVITEPaso1.selectDia(randomBeetwenInteger(1,29))
        SeguroVidaVITEPaso1.selectMes(mesRandomConNombre)
        SeguroVidaVITEPaso1.selectAnio(randomBeetwenInteger(1996, 2004))
        SeguroVidaVITEPaso1.selectGenero(randomBeetwenInteger(0,1))
        SeguroVidaVITEPaso1.selectFuma(randomBeetwenInteger(0,1))
        SeguroVidaVITEPaso1.selectCobertura(randomBeetwenInteger(1,6))
        SeguroVidaVITEPaso1.clickBtnSiguiente()
        SeguroVidaVITEPaso2.typePrimerNombre("Mario")
        SeguroVidaVITEPaso2.typeSegundoNombre("Felipe")
        SeguroVidaVITEPaso2.typePrimerApellido("Bros")
        SeguroVidaVITEPaso2.typeSegundoApellido("Zuniga")
        SeguroVidaVITEPaso2.typeCorreo("mbros@gmail.com")
        SeguroVidaVITEPaso2.selectCodPais("503")
        SeguroVidaVITEPaso2.typeTelefono("23232323")
        SeguroVidaVITEPaso2.selectAddIntermediario(boolean)
        SeguroVidaVITEPaso2.typeIntermediario(boolean,"INTERMEDIARIO1")
        SeguroVidaVITEPaso2.clickBtnCotizar(boolean)
    })

    

})