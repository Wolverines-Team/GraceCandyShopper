import React, { Component } from 'react'
import { CardElement, injectStripe } from 'react-stripe-elements'
import { connect } from 'react-redux'
import { makeOrder } from '../store/info'
import stateSelector from './stateSelector'
import { Link } from 'react-router-dom'
import AddressForm from './addressForm'

class CheckoutForm extends Component {
  constructor () {
    super()
    this.state = {
      address: {},
      isComplete: false,
      failed: false
    }
  }

  async handleSubmit (evt) {
    console.log(this.props)
    evt.preventDefault()
    const { token } = await this.props.stripe.createToken({ name: 'purchase' })
    let response = await fetch('/charge', {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain' },
      body: token.id
    })

    if (response.ok) {
      const {
        street,
        firstName,
        lastName,
        city,
        state,
        zip
      } = this.props.info.address
      console.log(street, firstName, lastName, city, state, zip)

      if ((street, firstName, lastName, city, state, zip)) {
        this.props.makeOrder(this.props.info.id, {
          street,
          firstName,
          lastName,
          city,
          state,
          zip,
          userId: this.props.user.id
        })
      } else {
        this.setState({ isComplete: 'failed' })
      }
    }
  }

  render () {
    const { isComplete } = this.state

    if (isComplete === 'failed') {
      return (
        <div>
          <h1>Purchase Failed</h1>
          <Link to='cart'>Back To Cart</Link>
        </div>
      )
    }
    const addresses = this.props.addresses
    return (
      <div className='spacer'>
        <div>
          <CardElement style={{ base: { fontSize: '18px' } }} />
        </div>
        <form className='checkout-form'>
          {addresses ? (
            <div>
              {addresses.map(address => {
                return (
                  <input
                    key={address.id}
                    type='radio'
                    name='address'
                    value={address}
                  >
                    {address.street}
                  </input>
                )
              })}
            </div>
          ) : (
            <div />
          )}
          <AddressForm handleSubmit />
          <button onClick={evt => this.handleSubmit(evt)}>Send</button>
        </form>

        {isComplete ? <div /> : <h1>Must Fill All Fields </h1>}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  info: state.info,
  user: state.user
})
const mapDispatch = dispatch => {
  return {
    makeOrder: (id, address) => {
      dispatch(makeOrder(id, address))
    }
  }
}

const stripeInjected = connect(
  mapStateToProps,
  mapDispatch
)(CheckoutForm)

export default injectStripe(stripeInjected)
