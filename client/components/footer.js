import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Footer } from 'react-materialize'

// Ozlem`s Note: npm install react-materialize added

class CandyFooter extends Component {
  render () {
    return (
      <div className='footer'>
        <Footer
          copyrights=' &copy; 2019 GraceCandyShopper , Team Wolverines'
          links={
            <div>
              <Link to='/About_Us'>ABOUT US</Link>

              <Link to='/Store_Location'>STORE LOCATION</Link>

              <Link to='/Shipping_Info'>HELP</Link>

              <Link to='/Contact_Us'>CONTACT US</Link>
            </div>
          }
        />
      </div>
    )
  }
}
export default CandyFooter
