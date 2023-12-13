import { slowCypressDown } from 'cypress-slow-down'

slowCypressDown(100)

describe('parents scenario',() => {
    beforeEach(()=>{
      cy.login('omid','Dellcash2')
      cy.visit('/guardian')
      cy.intercept('GET','/api/participant/find/*').as('checknumber')
  })

//   it('add new parent with one kid',()=>{
//     cy.get('.q-btn').contains('ثبت نام سرپرست').click()
//     cy.get('.q-input').eq(1).type('09378143383')
//     cy.get('.q-btn').contains('بررسی').click()

//     cy.wait('@checknumber').its('response.statusCode').should('eq',404)
//     cy.findAllByText('کاربر یافت نشد').should('exist');

//     cy.get('.q-input').eq(2).type('رهاشادی')
//     cy.get('.q-btn').contains('افزودن فرزند').click()
//     cy.get('.q-input').eq(3).type("نازنین");
//     cy.get('.q-input').eq(4).type("شادی")
//     cy.dataCy('gender').select("دختر")
//     cy.get('.q-input').eq(5).click()
//     cy.findByText('21').click()
//     cy.dataCy('account').select('ساعتی')
//     cy.dataCy('primary-btn').click()
//     cy.get('.q-btn').contains('ذخیره').click()
//   });

//   it('add new parent with more than one kids',()=>{
//     cy.get('.q-btn').contains('ثبت نام سرپرست').click()
//     cy.get('.q-input').eq(1).type('09010147474')
//     cy.get('.q-btn').contains('بررسی').click()

//     cy.wait('@checknumber').its('response.statusCode').should('eq',404)
//     cy.findAllByText('کاربر یافت نشد').should('exist');

//     cy.get('.q-input').eq(2).type('میلاد وایانی ')
//     cy.get('.q-btn').contains('افزودن فرزند').click()
//     cy.get('.q-input').eq(3).type("نازنین");
//     cy.get('.q-input').eq(4).type("وایانی")
//     cy.dataCy('gender').select("دختر")
//     cy.get('.q-input').eq(5).click()
//     cy.findByText('21').click()
//     cy.dataCy('account').select('ساعتی')
//     cy.dataCy('primary-btn').click();

//     cy.get('.q-btn').contains('افزودن فرزند').click()
//     cy.get('.q-input').eq(3).type("علی");
//     cy.get('.q-input').eq(4).type("وایانی")
//     cy.dataCy('gender').select("پسر")
//     cy.get('.q-input').eq(5).click()
//     cy.findByText('21').click()
//     cy.dataCy('account').select('ساعتی')
//     cy.dataCy('primary-btn').click();

//     cy.get('.q-btn').contains('افزودن فرزند').click()
//     cy.get('.q-input').eq(3).type("سحر");
//     cy.get('.q-input').eq(4).type("وایانی")
//     cy.dataCy('gender').select("دختر")
//     cy.get('.q-input').eq(5).click()
//     cy.findByText('21').click()
//     cy.dataCy('account').select('ساعتی')
//     cy.dataCy('primary-btn').click()
//     cy.get('.q-btn').contains('ذخیره').click()
//   })

// it('search on numbers', () => {
//     cy.get('.q-input').type('09185487545')
//     cy.findAllByText('هیچ موردی یافت نشد').should('exist')
//     });

// it('add kid to an existing parent',()=>{
//     cy.get('.q-input').type('09337117521')
//     cy.get('.q-btn').contains('ویرایش').click();
//     cy.get('.q-btn').contains('افزودن فرزند').click()
//     cy.get('.q-input').eq(3).type("شاهین");
//     cy.get('.q-input').eq(4).type("محمدی")
//     cy.dataCy('gender').select("پسر")
//     cy.get('.q-input').eq(5).click()
//     cy.findByText('22').click()
//     cy.dataCy('account').select('ساعتی')
//     cy.dataCy('primary-btn').click()
//     cy.get('.q-btn').contains('ذخیره').click()
// })

    })