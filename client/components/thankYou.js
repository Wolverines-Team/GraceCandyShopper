import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchItems, newCart, getCartInfo, sendEmail } from '../store'

const ThankYou = props => {
  //   props.newCart(props.user.id)
  //   props.getCartInfo(props.user.id)
  // props.sendEmail(props.user.email)
  return (
    <div className='outline'>
      <div className='thankYou'>
        <img src='https://raw.githubusercontent.com/juneidea/Candy/master/ThankYou.png' />
        <h1>
          Thank you for your order{' '}
          {props.info.address ? props.info.address.firstName : ''}!
        </h1>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  items: state.cart,
  user: state.user,
  products: state.products.products,
  info: state.info
})

const mapDispatchToProps = dispatch => {
  return {
    getItems: cartId => dispatch(fetchItems(cartId)),
    newCart: userId => dispatch(newCart(userId)),
    getCartInfo: id => dispatch(getCartInfo(id)),
    sendEmail: email => dispatch(sendEmail(email))
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ThankYou)

// const nodemailer = require('nodemailer')

// // async..await is not allowed in global scope, must use a wrapper
// async function main () {
//   // Generate test SMTP service account from ethereal.email
//   // Only needed if you don't have a real mail account for testing
//   let account = await nodemailer.createTestAccount()

//   // create reusable transporter object using the default SMTP transport
//   let transporter = nodemailer.createTransport({
//     host: 'smtp.ethereal.email',
//     port: 587,
//     secure: false, // true for 465, false for other ports
//     auth: {
//       user: account.user, // generated ethereal user
//       pass: account.pass // generated ethereal password
//     }
//   })

//   // setup email data with unicode symbols
//   let mailOptions = {
//     from: '"Fred Foo 👻" <foo@example.com>', // sender address
//     to: 'bar@example.com, baz@example.com', // list of receivers
//     subject: 'Hello ✔', // Subject line
//     text: 'Hello world?', // plain text body
//     html: '<b>Hello world?</b>' // html body
//   }

//   // send mail with defined transport object
//   let info = await transporter.sendMail(mailOptions)

//   console.log('Message sent: %s', info.messageId)
//   // Preview only available when sending through an Ethereal account
//   console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info))

//   // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
//   // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
// }

// main().catch(console.error)
