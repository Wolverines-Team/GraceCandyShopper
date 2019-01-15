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

  handleSubmit = evt => {
    evt.preventDefault()
    if (this.state.save) {
      console.log(this.state, this.props.user.id)
      this.props.addAddress(this.props.user.id, this.state)
    }
    this.props.setAddress(this.state)
  }

  render () {
    const { street, firstName, lastName, city, zip, save } = this.state
    return (
      <div>
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
        <input
          type='checkbox'
          name='save'
          value={save}
          onChange={this.toggle}
        />
        Save Address
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
        <button onClick={this.handleSubmit}>Check Address</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user
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
