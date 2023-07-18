class SeguroVidaVINCPaso1 {
    elements = {
      btnCotizarVida: () =>
        cy.get('[href="#/vida"] > .d-flex > .v-web > div > .MuiButtonBase-root'),
      btnCotizarVINC: () =>
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
      btnCotizar: () => cy.get(':nth-child(3) > .MuiButtonBase-root'),
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
  
    clickBtnCotizar() {
      this.elements.btnCotizar().should("exist").and("be.visible").click();
    }
  }
  
  module.exports = new SeguroVidaVINCPaso1();
  