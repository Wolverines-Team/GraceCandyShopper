import React from 'react';
import { connect } from 'react-redux';
import CardView from './CardView';
import SideBar from './SideBar';

const AllProducts = props => {
  let products = props.products;
  return (
    <div className="outline">
      <SideBar />
      <div className="card-outline">
        {products.length ? (
          products.map(product => {
            return (
              <div key={product.id}>
                <CardView product={product} history={props.history} />
              </div>
            );
          })
        ) : (
          <h1>No products!</h1>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({ products: state.products });

export default connect(mapStateToProps)(AllProducts);
