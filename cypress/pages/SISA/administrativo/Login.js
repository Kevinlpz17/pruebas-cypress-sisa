

class login {
    elements = {
        correo: () => cy.get('input[type="email"]'),
        password: () => cy.get('input[type="password"]'),
        btnIngresar: () => cy.get(':nth-child(10) > .MuiButtonBase-root'),

        selectPerfil: () => cy.get(`.flex-wrap > :nth-child(${randomBeetwenInteger(1,3)})`), 
        selectPerfilMedico: () => cy.get(`.flex-wrap > :nth-child(1)`), 
        selectPerfilInstitucion: () => cy.get(`.flex-wrap > :nth-child(2)`), 
    }

    //Functions

    typeCorreo(email){
        this.elements
            .correo()
            .type(email)
            .should("be.visible")
    }

    typePassword(password){
        this.elements
            .password()
            .type(password)
            .should("be.visible")
    }

    btnViewPassword(){
        this.elements
            .viewPassword()
            .should("be.visible") 
            .click()
    }

    clickBtnIngresar(){
        this.elements
            .btnIngresar()
            .should("be.visible")
            .click()
    }

    clickSelectPerfil(){
        this.elements
            .selectPerfil()
            .click()
            .should("be.visible")
    }

    clickSelectPerfilMedico(){
        this.elements
            .selectPerfilMedico()
            .click()
            .should("be.visible")
    }

    clickSelectPerfilInstitucion(){
        this.elements
            .selectPerfilInstitucion()
            .click()
            .should("be.visible")
    }
}

module.exports = new login();