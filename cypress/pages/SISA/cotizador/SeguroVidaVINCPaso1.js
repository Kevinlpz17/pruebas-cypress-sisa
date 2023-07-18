class SeguroVidaVINCPaso1 {
    elements = {
      btnCotizarVida: () =>
        cy.get('[href="#/vida"] > .d-flex > .v-web > div > .MuiButtonBase-root'),
      btnCotizarVINC: () =>
        cy.get(
          '[href="#/vida/vida-increible "] > .d-flex > :nth-child(3) > div > .MuiButtonBase-root'
        ),
      monto: () =>
        cy.get('input[placeholder="Escribe el monto a segurar"]').eq(0),
      selectDia: () => cy.get('input[placeholder="Día"]'),
      selectMes: () => cy.get('input[placeholder="Mes"]'),
      selectAnio: () => cy.get('input[placeholder="Año"]'),
      selectGenero: () =>
        cy.get(
          ":nth-child(4) > :nth-child(2) > .flex-row > :nth-child(1) > .justify-content-center"
        ),
      selectFuma: () =>
        cy.get(
          ":nth-child(5) > :nth-child(2) > .flex-row > :nth-child(1) > .justify-content-center"
        ),
      btnSiguiente: () => cy.get(':nth-child(6) > .MuiButtonBase-root'),
    };
  
    //Functions
  
    clickBtnCotizarVida() {
      this.elements.btnCotizarVida().should("exist").and("be.visible").click();
    }
  
    clickBtnCotizarVINC() {
      this.elements.btnCotizarVINC().should("exist").and("be.visible").click();
    }
  
    selectDia(value) {
      this.elements
        .selectDia()
        .should("exist")
        .and("be.visible")
        .click()
        .type(value + "{downArrow}" + "{enter}");
    }
  
    selectMes(value) {
      this.elements
        .selectMes()
        .should("exist")
        .and("be.visible")
        .click()
        .type(value + "{downArrow}" + "{enter}");
    }
  
    selectAnio(value) {
      this.elements
        .selectAnio()
        .should("exist")
        .and("be.visible")
        .click()
        .type(value + "{downArrow}" + "{enter}");
    }
  
    selectGenero(idx) {
      this.elements
        .selectGenero()
        .eq(idx)
        .should("exist")
        .and("be.visible")
        .click();
    }
  
    selectFuma(idx) {
      this.elements
        .selectFuma()
        .eq(idx)
        .should("exist")
        .and("be.visible")
        .click();
    }

    typeMonto(value) {
      this.elements.monto().should("exist").and("be.visible").type(value);
    }
  
    clickBtnSiguiente() {
      this.elements.btnSiguiente().should("exist").and("be.visible").click();
    }
  }
  
  module.exports = new SeguroVidaVINCPaso1();
  