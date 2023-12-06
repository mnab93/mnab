import { slowCypressDown } from 'cypress-slow-down'

slowCypressDown(150)

describe('customer in counter',() => {
    beforeEach(()=>{
      cy.login('MNAB','Mnab25772')
      cy.visit('/dashboard')
      //cy.intercept('GET','/api/participant/find/{mobile_number}').as('checknumber')
  })
    // it('not registered phone',()=>{
    //   cy.log('Before typing phone number');
    //   cy.get('.q-input')
    //   .first()
    //   .type('09171318268');
  
    //   cy.log('Before clicking the button');
    //   cy.get('.q-btn').contains('بررسی').click();
  
    //   //cy.wait('@checknumber').its('response.statusCode').should('eq',404)
    //   cy.findAllByText('کاربر یافت نشد').should('exist');
    //   cy.get('.q-btn').contains('ثبت نام سرپرست').should('be.visible')
    // })
    
    it('registered phone',()=>{
      cy.log('Before typing phone number');
      cy.get('.q-input').eq(0)
      .first()
      .type('09337117521');

      //cy.log('Before clicking the button');
      cy.get('.q-btn').contains('بررسی').click();
      //cy.wait('@checknumber').its('response.statusCode').should('eq',200)

      cy.get('.q-btn').contains('افزودن فرزند').click()
      cy.get('.q-input').eq(2).type("shadi")
      cy.get('.q-input').eq(3).type("mohammadi")
      // Assuming your dropdown has a class '.q-dropdown'
      //cy.get('#f_30c209d3-173a-4c84-a5e1-28e916f03575').eq(5).select('دختر').should('have.value','دختر'); 
      cy.dataCy('gender').select("دختر")
      cy.get('.q-input').eq(4).click()
      cy.findByText('15').click()
      cy.dataCy('account').select('ساعتی')
      cy.dataCy('adding').click()
      
    });
    it('select one kid entrance',()=>{
      cy.log('Before selecting checkbox');
      cy.get('.q-checkbox').eq(1).check().parent().should('have.class',)
      //cy.get('.q-checkbox').eq(1).uncheck().parent().should('have.class','no-outline')
      cy.get('.q-btn').contains('ورود')
    })
  
  
    })
  