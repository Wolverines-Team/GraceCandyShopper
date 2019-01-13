import React, { Component } from 'react';
import { CardElement, injectStripe } from 'react-stripe-elements';

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  async submit(ev) {
    let { token } = await this.props.stripe.createToken({ name: 'Name' });
    let response = await fetch('/charge', {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain' },
      body: token.id
    });

    if (response.ok) console.log('Purchase Complete!');
  }

  render() {
    return (
      <div className="checkout">
        <form className="sign-in" onSubmit={handleSubmit} name={name}>
          <div>
            <label htmlFor="address">Email</label>
            <input name="address" type="text" />
          </div>
          <div>
            <label htmlFor="First Name">
              <small>First Name</small>
            </label>
            <input name="First Name" type="text" />
          </div>

          <div>
            <label htmlFor="Last Name">
              <small>Last Name</small>
            </label>
            <input name="Last Name" type="text" />
          </div>
          <CardElement />
          <div>
            <button type="submit">Checkout </button>
          </div>
        </form>

        <button onClick={this.submit}>Send</button>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
const mapLogin = state => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.user.error
  };
};

const mapSignup = state => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.user.error
  };
};

const mapDispatch = dispatch => {
  return {
    handleSubmit(evt) {
      evt.preventDefault();
      const address = evt.target.address.value;
      const firstName = evt.target.firstName.value;
      const firstName = evt.target.firstName.value;
      dispatch(checkout(address, password, formName));
    }
  };
};
