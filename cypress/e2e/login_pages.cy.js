
const timeOut = {timeout:100000}

export class CreateUser {

username_textbox = '#username'
password_textbox = '#password'
login_button = '#login'
user_button = '.users'
error_message = '.toast'

newUsername_textbox =':nth-child(2) > .recommended-input'
newPassword_textbox =':nth-child(3) > .recommended-input'

birthdate_dropdown ='[type="date"]'
email_textbox = '[data-bind="value: email"]'
contactNumber_textbox = '[data-bind="value: phone"]'

primary1_dropdown ='.recommended-input-primary-group > .btn-group > .btn > .filter-option'
primary2_dropdown ='.recommended-input-primary-group > .btn-group > .open > .dropdown-menu > [data-original-index="1"] > a > .text'

configuration1_dropdown =':nth-child(8) > .btn-group > .btn > .filter-option'
configuration2_dropdown =':nth-child(8) > .btn-group > .open > .dropdown-menu > .selected > a'

add1_dropdown ='.item-with-add-button > .btn-group > .btn'
add2_dropdown ='.item-with-add-button > .btn-group > .open > .dropdown-menu > [data-original-index="2"] > a'
add3_dropdown ='.item-with-add-button > .groupxs-btn'

ok_button = '[data-bind="visible: !hideOkButton()"] > .second > .btn'

enterUsername(username){
    cy.get(this.username_textbox,timeOut).type(username)
}
enterPassword(password){
    cy.get(this.password_textbox,timeOut).type(password)
}
enterFirstName(firstname){
    cy.contains('First Name').parent().within(() => { cy.get('input',timeOut).first().type(firstname);});
}
enterLastName(lastname){
    cy.get('.recommended-input',timeOut).should('be.visible').eq(1) .type(lastname);
}
clickLogin(){
    cy.get(this.login_button).click()
}
getErrorMessage() {
    return cy.get(this.error_message)
}
enternewUsername(newUsername){
    cy.get(this.newUsername_textbox,timeOut).type(newUsername)
}
enternewPassword(newPassword){
    cy.get(this.newPassword_textbox,timeOut).type(newPassword)
}
enterbirthdate(birthdate){
    cy.get(this.birthdate_dropdown,timeOut).type(birthdate)
}
enteremail(email){
    cy.get(this.email_textbox,timeOut).type(email)
}
entercontactNumber(contactNumber){
    cy.get(this.contactNumber_textbox,timeOut).type(contactNumber)
}

clickPrimary1(){
    cy.get(this.primary1_dropdown).click()
}
clickPrimary2(){
    cy.get(this.primary2_dropdown).click()
}
clickConfiguration1(){
    cy.get(this.configuration1_dropdown).click()
}
clickConfiguration2(){
    cy.get(this.configuration2_dropdown).click()
}
clickAdd1(){
    cy.get(this.add1_dropdown).click()
}
clickAdd2(){
    cy.get(this.add2_dropdown).click()
}
clickAdd3(){
    cy.get(this.add3_dropdown).click()
}



clickOk(){
    cy.get(this.ok_button).click()
}

}
