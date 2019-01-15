import React, { Component } from 'react'
import { CardElement, injectStripe } from 'react-stripe-elements'
import { connect } from 'react-redux'
import { makeOrder, fetchAddresses } from '../store/info'
import { Link } from 'react-router-dom'
import AddressForm from './addressForm'
import history from '../history'

class CheckoutForm extends Component {
  constructor () {
    super()
    this.state = {
      address: {},
      isComplete: false,
      failed: false
    }
  }
  componentDidMount () {
    this.props.fetchAddresses(this.props.user.id)
  }

  async handleSubmit (evt) {
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

      if (
        street !== '' &&
        firstName !== '' &&
        lastName !== '' &&
        city !== '' &&
        state !== '' &&
        zip !== ''
      ) {
        this.setState({ isComplete: true })
      } else {
        this.setState({ isComplete: false })
      }
      if (this.state.isComplete) {
        this.props.makeOrder(this.props.info.id, {
          street,
          firstName,
          lastName,
          city,
          state,
          zip,
          userId: this.props.user.id
        })

        this.props.history.push('/completed')
      } else {
        this.setState({ isComplete: false })
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

    return (
      <div className='spacer'>
        <div>
          <CardElement style={{ base: { fontSize: '18px' } }} />
        </div>
        <form className='checkout-form'>
          <AddressForm />
          <button onClick={evt => this.handleSubmit(evt)}>Send</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  info: state.info,
  user: state.user,
  history: history
})
const mapDispatch = dispatch => {
  return {
    makeOrder: (id, address) => {
      dispatch(makeOrder(id, address))
    },
    fetchAddresses: userId => dispatch(fetchAddresses(userId))
  }
}

const injected = injectStripe(CheckoutForm)

export default connect(
  mapStateToProps,
  mapDispatch
)(injected)
