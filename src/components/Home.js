import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div>
        <form>
          <input type="text" name="name" placeholder="Product Name" />
          <input type="text" name="category" placeholder="Product Category" />
          <input type="number" name="price" placeholder="Product Price"/>
        </form>
      </div>
    )
  }
}

export default Home;
