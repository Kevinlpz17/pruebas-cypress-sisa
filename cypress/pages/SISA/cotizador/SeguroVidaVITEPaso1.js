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
    selectCobertura: (idx) =>
      cy.get(
        `[style="margin-top: 8px; gap: 16px; overflow-x: auto; align-items: center; flex-flow: row wrap; justify-content: center;"] > :nth-child(${idx})`
      ),
    btnSiguiente: () => cy.get(":nth-child(7) > .MuiButtonBase-root"),
  };

  //Functions

  clickBtnCotizarVida() {
    this.elements.btnCotizarVida().should("exist").and("be.visible").click();
  }

  clickBtnCotizarVITE() {
    this.elements.btnCotizarVITE().should("exist").and("be.visible").click();
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

  selectCobertura(idx) {
    this.elements
      .selectCobertura(idx)
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

module.exports = new SeguroVidaVITEPaso1();
