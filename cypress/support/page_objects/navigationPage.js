
function selectGroupMenuItem(groupName) {
    cy.contains('a', groupName).then( menu => {
        cy.wrap(menu).find('.expand-state g g').invoke('attr', 'data-name')
        .then( attr => {
            if( attr.includes('left')){
                cy.wrap(menu).click()
            }
        })
    })
}

export class NavigationPage{

    formLayoutsPage() {
        // cy.contains('Forms').click()
        selectGroupMenuItem('Form')
        cy.contains('Form Layouts').click()
    }

    datePickerPage(){
        // cy.contains('Forms').click()
        selectGroupMenuItem('Form')
        cy.contains('Datepicker').click()
    }

    toasterPage(){
        // cy.contains('Modal & Overlays').click()
        selectGroupMenuItem('Modal & Overlays')
        cy.contains('Toastr').click()
    }

    smartTablePage(){
        // cy.contains('Tables & Data').click()
        selectGroupMenuItem('Tables & Data')
        cy.contains('Smart Table').click()
    }

    tooltipPage(){
        // cy.contains('Modal & Overlays').click()
        selectGroupMenuItem('Modal & Overlays')
        cy.contains('Tooltip').click()
    }
    
}

export const navigateTo = new NavigationPage()