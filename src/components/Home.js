import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/main.scss';
import { connect } from 'react-redux';

class Home extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name: '',
       price: '',
       category: '',
       date: '',
    }
  }
  
  handleInputChanges = (evt) => {    
    const { name, value } = evt.target
    this.setState({
      [name]: value
    })
    console.log(this.state);
    
  }
  formHandler = (evt) => {
    this.setState({
      name: '',
      price: '',
      category: '',
      addedBy: '',
      date: '',
    })
    const manager = localStorage.getItem('user');
    const newPro = this.state;    
    newPro.addedBy = manager,
    newPro.id = Math.random();
    this.props.products.products = [...this.props.products.products, newPro]
    evt.preventDefault();
  }
  handleDelete = (id) => {
    const newList = this.props.products.products.filter(product => product.id !== id);
    this.props.products.products = [...newList];
    this.setState({
      products: newList
    })    
  }
  handleLogout = () => {
    localStorage.removeItem('user')
    return this.props.history.push('/login');
  }
  render () {
    const manager = localStorage.getItem('user')
    // if(!manager) { this.props.history.push('/login')};
    const { products } = this.props.products  
    const list = products.length ? (products.map(product => {
      return (<div className="displayAsTable" key={product.id}>
                <ul>
                  <li key="111">{product.name}</li>
                  <li key="112">{product.price}</li>
                  <li key="113">{product.category}</li>
                  <li key="114">{product.date}</li>
                  <li key="115">{product.addedBy}</li>
                  <li><span onClick={() => this.handleDelete(product.id)} className="deleteBtn">Delete</span></li>
                </ul>
              </div>
            
      )
    })) : ( <h4> No products in the store </h4> );
    return (
      <div>
        <div className="container">
          <header>
            <h2 className="logo"><Link to='' >Stock Management System</Link></h2>
            <nav>
              <ul className="menuLink">
                <li><Link to="" onClick={this.handleLogout} >Logout</Link></li>
              </ul>
            </nav>
          </header>
          <div className="formShape">
            <div className="formSideInfo">
              <h2>Stored Products (You are logged in as {manager})</h2>
              <div className="displayAsTable liHeader">
              <ul>
                  <li>Product</li>
                  <li>Price(Frw)</li>
                  <li>Category</li>
                  <li>Date</li>
                  <li>Added By</li>
                  <li>Action</li>
               </ul>
              </div>
              {list}
              </div>
            <div className="addProductForm"></div>
            <form action="" onSubmit={this.formHandler}>  
            <h5>{this.props.error}</h5> 
            <h2>Product Information</h2>            
              <label htmlFor="name">Product Name</label>
              <input type="text" required onChange={this.handleInputChanges} value={this.state.name} name="name" id="name"/>
              <label htmlFor="price">Product Price</label>
              <input type="number" required onChange={this.handleInputChanges} value={this.state.price} name="price" id="price"/>
              <label htmlFor="category">Product Category</label>
              <input type="text" required onChange={this.handleInputChanges} value={this.state.category} name="category" id="category"/>
              <label htmlFor="date">Date</label>
              <input type="date" required onChange={this.handleInputChanges} value={this.state.date} autoComplete="off" name="date" id="date"/>
              <button type="submit" >Add Product</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    products: state.products,
    users: state.user
  }
}

export default connect(mapStateToProps)(Home);