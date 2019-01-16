var nodemailer = require('nodemailer')

// create reusable transporter object using the default SMTP transport

// setup e-mail data with unicode symbols
var mailOptions = {
  from: '"Wolverine Candy Shop" <wolverines@gmail.com>', // sender address
  to: user.email,
  subject: 'THnak You For Your Order! ✔',
  text: 'Your order is on its way !'
}

// send mail with defined transport object
