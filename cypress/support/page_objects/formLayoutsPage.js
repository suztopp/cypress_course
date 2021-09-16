

export class FormLayoutsPage {

    submitInlineFormWithNameAndEmail(nameFirst, email){
        cy.contains('nb-card', 'Inline form').find('form')
        .then( form => {
            cy.wrap(form).find('[placeholder="Jane Doe"]').type(nameFirst)
            cy.wrap(form).find('[placeholder="Email"]').type(email)
            cy.wrap(form).find('[type="checkbox"]').check({force: true})
            cy.wrap(form).submit() //can use this method only with forms
        })
    }

    submitBasicFormWithEmailAndPassword(email, password) {
        cy.contains('nb-card', 'Basic form').find('form')
        .then( form => {
            cy.wrap(form).find('[placeholder="Email"]').type(email)
            cy.wrap(form).find('[placeholder="Password"]').type(password)
            cy.wrap(form).find('[type="checkbox"]').check({force: true})
            cy.wrap(form).submit() //can use this method only with forms
        })
    }

}

export const onFormLayoutsPage = new FormLayoutsPage()