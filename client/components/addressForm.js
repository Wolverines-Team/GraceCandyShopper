import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import stateSelector from './stateSelector'
import { setAddress, addAddress } from '../store'

class AddressForm extends Component {
  constructor () {
    super()
    this.state = {
      street: '',
      firstName: '',
      lastName: '',
      city: '',
      state: 'Al',
      zip: '',
      save: false
    }
  }

  handleChange = evt => {
    if (evt.target.name) {
      this.setState({
        [evt.target.name]: evt.target.value
      })
    } else {
      this.setState({
        state: evt.target.value
      })
    }
  }

  toggle = () => {
    if (this.state.save === true) {
      this.setState({ save: false })
    } else {
      this.setState({ save: true })
    }
  }
  handleSelectChange = evt => {
    const [address] = this.props.info.addresses.addresses.filter(
      el => el.id === Number(evt.target.value)
    )

    const { street, firstName, lastName, city, state, zip } = address
    this.setState({ street, firstName, lastName, city, state, zip })
  }
  handleSubmit = evt => {
    evt.preventDefault()
    const { street, firstName, lastName, city, state, zip } = this.state
    if (
      street !== '' &&
      firstName !== '' &&
      lastName !== '' &&
      city !== '' &&
      state !== '' &&
      zip !== ''
    ) {
      this.props.addAddress(this.props.user.id, this.state)
      this.props.setAddress(this.state)
      let send = document.getElementsByClassName('checkout-send')
      let check = document.getElementsByClassName('check-address')
      send[0].className = 'checkout-send'
      check[0].className = 'check-address hide'
    }
  }

  render () {
    let addresses
    if (this.props.info.addresses) {
      addresses = this.props.info.addresses.addresses
    }
    const { street, firstName, lastName, city, zip, save } = this.state
    return (
      <div className='card-info'>
        <div className='card-row'>
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
        </div>

        <div>
          {addresses ? (
            <select onChange={this.handleSelectChange}>
              <option>Saved Addresses</option>
              {addresses.map(address => {
                return (
                  <option value={address.id} key={address.id}>
                    {address.street}
                  </option>
                )
              })}
            </select>
          ) : (
            <div />
          )}
        </div>

        <div className='card-row'>
          <div>
            <label htmlFor='street'>Street</label>
            <input
              name='street'
              type='text'
              value={street}
              onChange={this.handleChange}
              required
            />
          </div>
          {/* <input
          type='checkbox'
          name='save'
          value={save}
          onChange={this.toggle}
        />
        Save Address
        <br /> */}
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
        </div>

        <div className='card-row'>
          <div>
            <label htmlFor='state'>State</label>
            {stateSelector(this.handleChange)}
          </div>
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
        </div>

        <div>
          <button onClick={this.handleSubmit} className='check-address'>
            Check Address
          </button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user,
  info: state.info
})

const mapDispatch = dispatch => {
  return {
    addAddress: (userId, address) => {
      dispatch(addAddress(userId, address))
    },
    setAddress: address => {
      dispatch(setAddress(address))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatch
)(AddressForm)
