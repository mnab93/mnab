import { slowCypressDown } from 'cypress-slow-down'

slowCypressDown(100)

describe('LOGIN', () => {
  const username = 'milad'
  const incorrectPassword = '11111111'
  const correctPassword = '12345678'

  beforeEach(() => {
    cy.visit('/')
    cy.intercept('POST', '/api/auth/login').as('login')
  })

  it('should display error on incorrect login', () => {
    cy.get('.q-btn').contains('ورود').click()
    cy.findByText('لطفا این فیلد را تکمیل نمایید')
    cy.get('.q-input').eq(0).type(username)
    cy.get('.q-input').eq(1).type(incorrectPassword)
    cy.get('.q-btn').contains('ورود').click()

    cy.wait('@login').its('response.statusCode').should('eq', 401)
    cy.findByText('نام کاربری و یا رمز عبور اشتباه می باشد.')
  })

  it('should login with correct credentials', () => {
    cy.get('.q-input').eq(0).type(username)
    cy.get('.q-input').eq(1).type(correctPassword + '{enter}')

    cy.wait('@login').its('response.statusCode').should('eq', 200)

    cy.testRoute('/dashboard')
  })
})

// describe('FORGOT PASSWORD', () => {
//   beforeEach(() => {
//     cy.visit('/')
//   })

//   it('OTP', () => {
//     cy.intercept('POST', '/api/auth/send').as('otp')

//     cy.findByText('فراموشی رمز عبور').click()

//     cy.get('.q-input').type('09909999999{enter}')
//     cy.findAllByText('کاربری با این شماره موبایل یافت نشد.')
//     cy.wait('@otp').its('response.statusCode').should('eq', 404)

//     cy.get('.q-input').clear().type('09906406944')

//     cy.get('.q-btn').contains('ارسال').click()

//     cy.request({
//       method: 'POST',
//       url: '/api/auth/login',
//       form: true,
//       body: {
//         username: 'root',
//         password: '12345678'
//       }
//     }).then((loginRes) => {
//       cy.request({
//         method: 'POST',
//         url: '/api/auth/rt',
//         form: true,
//         body: {
//           mobile_number: '09906406944'
//         },
//         headers: {
//           accept: 'application/json',
//           authorization: `Bearer ${loginRes.body.access_token}`
//         }
//       }).then((otpRes) => {
//         cy.get('input').type(`${otpRes.body}{enter}`)
//       })
//     })

//     cy.findByText('تغییر رمز عبور').eq(0).click()
//   })
//})
