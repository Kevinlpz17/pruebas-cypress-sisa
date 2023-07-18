class SeguroVidaVITEPaso1 {
  elements = {
    btnCotizarVida: () =>
      cy.get('[href="#/vida"] > .d-flex > .v-web > div > .MuiButtonBase-root'),
    btnCotizarVITE: () =>
      cy.get(
        '[href="#/vida/vida-temporal "] > .d-flex > :nth-child(3) > div > .MuiButtonBase-root'
      ),
    monto: () =>
      cy.get('input[placeholder="Escribe el monto a segurar"]').eq(0),
    nombre: () => cy.get('input[placeholder="Primer nombre"]').eq(0),
    nombre2: () => cy.get('input[placeholder="Segundo nombre"]').eq(0),
    apellido: () => cy.get('input[placeholder="Primer apellido"]').eq(0),
    apellido2: () => cy.get('input[placeholder="Segundo apellido"]').eq(0),
    correo: () => cy.get('input[placeholder="Correo electrónico"]').eq(0),
    selectCodPais: () => cy.get('#country-select-demo'),
    telefono: () => cy.get('input[placeholder="Celular"]').eq(0),
    selectAddIntermediario: () => cy.get('.w-100 > [style="display: flex; gap: 10px; justify-content: center; align-items: center;"]').find('svg'), 
    intermediario: () => cy.get('input[placeholder="Ingresa tu código de intermediario"]'),
    btnCotizar: (boolean) => cy.get(`:nth-child(${ boolean === 0 ? 4 : 8}) > .MuiButtonBase-root`),
  };

  typePrimerNombre(value) {
    this.elements.nombre().should("exist").and("be.visible").type(value);
  }

  typeSegundoNombre(value) {
    this.elements.nombre2().should("exist").and("be.visible").type(value);
  }

  typePrimerApellido(value) {
    this.elements.apellido().should("exist").and("be.visible").type(value);
  }

  typeSegundoApellido(value) {
    this.elements.apellido2().should("exist").and("be.visible").type(value);
  }

  typeCorreo(value) {
    this.elements.correo().should("exist").and("be.visible").type(value);
  }

  typeTelefono(value) {
    this.elements.telefono().should("exist").and("be.visible").type(value);
  }

  selectCodPais(value) {
    this.elements.selectCodPais().should("exist").and("be.visible").click().type(value + '{downArrow}' + '{enter}')
  }

  selectAddIntermediario(value) {
    if(value === 1) {
        this.elements.
            selectAddIntermediario().should("exist").and("be.visible").click()
    }
  }

  typeIntermediario(boolean,value) {
    if(boolean === 1) {
        this.elements
        .intermediario().should("exist").and("be.visible").type(value)
    }
  }

  clickBtnCotizar(boolean) {
    this.elements.btnCotizar(boolean).should("exist").and("be.visible").click();
  }
}

module.exports = new SeguroVidaVITEPaso1();
