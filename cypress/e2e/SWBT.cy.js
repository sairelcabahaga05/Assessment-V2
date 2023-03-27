const timeOut = {timeout: 1000000}

import { CreateUser } from "./login_pages.cy"

const createUser = new CreateUser()

beforeEach(function(){cy.visit('https://swbt-43857.alpha.reportheld-saas.com/admin/main.html',timeOut)})

describe('Swbt Assessments', function(){

it('Login with Valid Credentials', function(){

    createUser.enterUsername('swbt-it-admin',timeOut)
    createUser.enterPassword('testOJT**123',timeOut)
    createUser.clickLogin()
})


it('Login with Invalid Credentials', function(){

    createUser.enterUsername('swbt-it-adonis',timeOut)
    createUser.enterPassword('testOJT**000',timeOut)
    createUser.clickLogin()
    createUser.getErrorMessage().should('be.visible')
})


it('Create User', function(){
   
    createUser.enterUsername('swbt-it-admin',timeOut)
    createUser.enterPassword('testOJT**123',timeOut)
    createUser.clickLogin()

    cy.wait(1500000) 
    cy.get('.users',timeOut).click() 
       
    createUser.enternewUsername('Sasai Cabahaga',timeOut)
    createUser.enternewPassword('12345678',timeOut)

    createUser.enterFirstName('sairel')
    // cy.contains('First Name').parent().within(() => { cy.get('input',timeOut).first().type('Saiiirel');});

    createUser.enterLastName('cabahags')
    // cy.get('.recommended-input',timeOut).should('be.visible').eq(1) .type('Cabahaga');

    createUser.enterbirthdate('2001-07-12',timeOut)
    createUser.enteremail('scabahaga@ssct.edu.ph',timeOut)
    createUser.entercontactNumber('09505001514',timeOut)

    //Choose User Primary Group
    createUser.clickPrimary1()
    createUser.clickPrimary2()
    
    //Choose User Configuration Preset
    createUser.clickConfiguration1()
    createUser.clickConfiguration2()
    
    //Choose Additional Group
    createUser.clickAdd1()
    createUser.clickAdd2()
    createUser.clickAdd3()

    //Save All Inputs
    cy.contains('Save',timeOut).should('be.visible').click()
     cy.get('[data-bind="visible: !hideOkButton()"] > .second > .btn',timeOut) .should('be.visible').click()

    cy.wait(10000)
    cy.get('.scrollable > .profile',timeOut).click()
    cy.contains('Sign Out',timeOut).click();
    cy.get('.second > .btn',timeOut).click()
    

})
})