import { navigateTo } from '../support/page_objects/navigationPage'
import { onFormLayoutsPage } from '../support/page_objects/formLayoutsPage'
import { onDatePickerPage } from '../support/page_objects/datepickerPage'
import { onSmartTablePage } from '../support/page_objects/smartTablePage'

describe('Test with page Objects', () => {

    beforeEach('open application', () => {
        cy.openHomePage()
    })

    it('vertify navigation accross the pages', () => {

        navigateTo.formLayoutsPage()
        navigateTo.datePickerPage()
        navigateTo.smartTablePage()
        navigateTo.tooltipPage()
        navigateTo.toasterPage()

    })

    it.only('should submit Inline and Basic form and select tomorrow date in the calendar', () => {
        
        navigateTo.formLayoutsPage()
        onFormLayoutsPage.submitInlineFormWithNameAndEmail('Artem', 'test@test.com')
        onFormLayoutsPage.submitBasicFormWithEmailAndPassword('test@test.com', 'password')
        navigateTo.datePickerPage()
        onDatePickerPage.selectCommonDatepickerDateFromToday(1)
        onDatePickerPage.selectDatepickerWithRangeFromToday(7, 14)

        navigateTo.smartTablePage()
        onSmartTablePage.addNewRecordWithFirstAndLastName('Artem', 'Bondar')
        onSmartTablePage.updateAgeByFirstname('Artem', '35')
        onSmartTablePage.deleteRowByIndex(1)
    })

})