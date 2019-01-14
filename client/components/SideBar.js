import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchProductsByCategory } from '../store/products';

const SideBar = props => {
  function sortCandy(stock, type) {
    let ans = [];
    for (let i = 0; i < stock.length; i++) {
      for (let j = 0; j < stock[i].categories.length; j++) {
        if (stock[i].categories[j].id === type) {
          stock[i].categories.map(c => {
            if (c.id !== type) ans.push(`${c.category_name}_${c.id}`);
          });
        }
      }
    }
    let ans2 = [];
    for (let i = 0; i < ans.length; i++) {
      ans2.map(a => {
        if (a[0] === ans[i]) a.push(ans[i]);
      });
      if (ans2.filter(a => a[0] === ans[i])[0] === undefined) ans2.push([ans[i]]);
    }
    return ans2;
  }

  const fetchThisCategory = (id, main) => {
    props.fetchProductsByCategory(id, main);
  };

  return (
    <div className="side-outline">
      <div>
        <Link to="/categories/1">
          <strong onClick={() => fetchThisCategory(1, 1)}>CANDY</strong>
        </Link>
      </div>
      <hr />
      <ul>
        {props.products[0] &&
          sortCandy(props.products, 1).map(tag => {
            return (
              <Link key={tag[0]} to={`/categories/${tag[0].split('_')[1]}`}>
                <li onClick={() => fetchThisCategory(tag[0].split('_')[1], 1)}>
                  {tag[0].split('_')[0].toUpperCase()}
                  {tag.length > 1 ? ` (${tag.length})` : ''}
                </li>
              </Link>
            );
          })}
      </ul>
      <div>
        <Link to="/categories/2">
          <strong onClick={() => fetchThisCategory(2, 2)}>GUMMY</strong>
        </Link>
      </div>
      <hr />
      <ul>
        {props.products[0] &&
          sortCandy(props.products, 2).map(tag => {
            return (
              <Link key={tag[0]} to={`/categories/${tag[0].split('_')[1]}`}>
                <li onClick={() => fetchThisCategory(tag[0].split('_')[1], 2)}>
                  {tag[0].split('_')[0].toUpperCase()}
                  {tag.length > 1 ? ` (${tag.length})` : ''}
                </li>
              </Link>
            );
          })}
      </ul>
      <div>
        <Link to="/categories/3">
          <strong onClick={() => fetchThisCategory(3, 3)}>CHOCOLATE</strong>
        </Link>
      </div>
      <hr />
      <ul>
        {props.products[0] &&
          sortCandy(props.products, 3).map(tag => {
            return (
              <Link key={tag[0]} to={`/categories/${tag[0].split('_')[1]}`}>
                <li onClick={() => fetchThisCategory(tag[0].split('_')[1], 3)}>
                  {tag[0].split('_')[0].toUpperCase()}
                  {tag.length > 1 ? ` (${tag.length})` : ''}
                </li>
              </Link>
            );
          })}
      </ul>
      <div>
        <Link to="/categories/4">
          <strong onClick={() => fetchThisCategory(4, 4)}>COLLECTON</strong>
        </Link>
      </div>
      <hr />
      <ul>
        {props.products[0] &&
          sortCandy(props.products, 4).map(tag => {
            return (
              <Link key={tag[0]} to={`/categories/${tag[0].split('_')[1]}`}>
                <li onClick={() => fetchThisCategory(tag[0].split('_')[1], 4)}>
                  {tag[0].split('_')[0].toUpperCase()}
                  {tag.length > 1 ? ` (${tag.length})` : ''}
                </li>
              </Link>
            );
          })}
      </ul>
    </div>
  );
};

const mapStateToProps = state => ({ products: state.products.products });

const mapDispatchToProps = dispatch => {
  return {
    fetchProductsByCategory: (id, main) => {
      dispatch(fetchProductsByCategory(id, main));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
