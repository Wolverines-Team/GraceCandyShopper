import React, { Component } from 'react'
import { CardElement, injectStripe } from 'react-stripe-elements'
import { connect } from 'react-redux'
import { makeOrder } from '../store/info'
import stateSelector from './stateSelector'
import { Link } from 'react-router-dom'

class CheckoutForm extends Component {
  constructor () {
    super()
    this.state = {
      street: '',
      firstName: '',
      lastName: '',
      city: '',
      state: '',
      zip: 0,
      isComplete: false
    }
  }

  async handleSubmit (evt) {
    console.log(this.props)
    evt.preventDefault()
    const { token } = await this.props.stripe.createToken({ name: 'purchase' })
    console.log('==TOKEN===> ', token)
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
        zip,
        isComplete
      } = this.state
      if (
        street !== '' ||
        firstName !== '' ||
        lastName !== '' ||
        city !== '' ||
        state !== '' ||
        zip !== 0
      ) {
        this.setState({ isComplete: true })
      }

      if (isComplete) {
        this.props.makeOrder({
          street,
          firstName,
          lastName,
          city,
          state,
          zip,
          token
        })
      }
    } else {
      this.setState({ isComplete: 'failed' })
    }
  }
  handleChange = evt => {
    if (evt.target.name) {
      this.setState({
        [evt.target.name]: [evt.target.value]
      })
    } else {
      this.setState({
        state: [evt.target.value]
      })
    }
  }

  render () {
    const {
      street,
      firstName,
      lastName,
      city,
      state,
      zip,
      isComplete
    } = this.state

    if (isComplete === 'failed') {
      return (
        <div>
          <h1>Purchase Failed</h1>
          <Link to='cart'>Back To Cart</Link>
        </div>
      )
    }
    return (
      <div className='checkout'>
        <form className='checkout-form'>
          <div>
            <label htmlFor='First Name'>
              <small>First Name</small>
            </label>
            <input
              name='firstName'
              type='text'
              value={firstName}
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor='Last Name'>
              <small>Last Name</small>
            </label>
            <input
              name='lastName'
              type='text'
              value={lastName}
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor='street'>Address</label>
            <input
              name='street'
              type='text'
              value={street}
              onChange={this.handleChange}
              required
            />
          </div>
          <input type='checkbox' name='saveAddress' value='true' /> Save Address
          <br />
          <div>
            <label htmlFor='city'>City</label>
            <input
              name='city'
              type='text'
              value={city}
              onChange={this.handleChange}
              required
            />
          </div>
          <div>{stateSelector(this.handleChange)}</div>
          <div>
            <label htmlFor='zip'>Zip</label>
            <input
              name='zip'
              type='number'
              value={zip}
              onChange={this.handleChange}
              required
            />
          </div>
          <div />
          <button onClick={evt => this.handleSubmit(evt)}>Send</button>
        </form>
        <div className='checkout'>
          <CardElement style={{ base: { fontSize: '18px' } }} />
        </div>

        {isComplete ? <div /> : <h1>Must Fill All Fields </h1>}
      </div>
    )
  }
}
const mapDispatch = dispatch => {
  return {
    makeOrder: order => {
      dispatch(makeOrder(order))
    }
  }
}

const stripeInjected = connect(
  null,
  mapDispatch
)(CheckoutForm)

export default injectStripe(stripeInjected)
