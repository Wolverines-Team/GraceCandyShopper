
      <div className='dropdown2'>
        <button className='dropbtn2'>STORE LOCATION</button>
        <div className='dropdown-content2'>
          <a href='#'>New York</a>
          <a href='#'>Chicago</a>
          <a href='#'>Miami</a>
          <a href='#'>Los Angeles</a>
        </div>
      </div>
      <div className='dropdown3'>
        <button className='dropbtn3'>ABOUT US</button>
        <div className='dropdown-content3'>
          <a href='#'>About Us</a>
          <a href='#'>Events</a>
          <a href='#'>Inspiration</a>
        </div>
      </div>
      <div className='dropdown4'>
        <button className='dropbtn4'>SIGN UP | LOGIN</button>
      </div>
      <div className='dropdown5'>
        <button className='dropbtn5'>SHOPPING BAG</button>
        <div className='bag'>
          <img src='./images/shoppingBag.png' id='bag' />

        </div>
      </div>
    </div>
  </div>

);


/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  };
};

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout());
    }
  };
};

export default connect(mapState, mapDispatch)(Navbar);

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
};
