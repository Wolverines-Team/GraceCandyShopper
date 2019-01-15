import React, { Component } from 'react'
import { connect } from 'react-redux'
import CheckoutForm from './checkoutForm'
import { Elements, StripeProvider } from 'react-stripe-elements'

class Checkout extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className='outline'>
        <div className='checkout-main'>
          <StripeProvider apiKey='pk_test_TYooMQauvdEDq54NiTphI7jx'>
            <div className='example'>
              <Elements>
                <CheckoutForm />
              </Elements>
            </div>
          </StripeProvider>
        </div>
      </div>
    )
  }
}
// const connectedForm = connect()(CheckoutForm)
export default Checkout

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */

// const mapDispatch = dispatch => {
//   return {
//     handleSubmit (evt) {
//       evt.preventDefault()
//       const address = evt.target.address.value
//       const firstName = evt.target.firstName.value
//       const lastName = evt.target.lastName.value
//       dispatch(checkout(address, firstName, lastName))
//     }
//   }
// }
