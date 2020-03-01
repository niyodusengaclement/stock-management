const initState = {
  products: [
    { id: 1, name: 'T-shirt', price: 3000, category: 'Clothes', date: '2020-01-15', addedBy: 'Clement'},
    { id: 2, name: 'Flat-Cape', price: 2000, category: 'Clothes', date: '2020-01-23', addedBy: 'Mistico'},
    { id: 3, name: 'TV', price: 40000, category: 'IT', date: '2020-02-03', addedBy: 'Mistico'},
    { id: 4, name: 'Radio', price: 14000, category: 'IT', date: '2019-02-13', addedBy: 'Clement'},
  ],
  error: '',
  message: ''
}

const productReducer = (state= initState, action) => {
  return state;
}
export default productReducer;
