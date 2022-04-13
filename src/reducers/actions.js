
const actions = { // Este es el Action
    // show: (state) => {  //Estos son los tipos de actions TYPES
    //     const products = state.state.products;
    //     return {
    //         ...state.state,
    //         active: products.find(product => product.id === state.payload.id)
    //     }
    // },
    addToCart: (state) => {
        const cart = state.state.cart;
        const newProduct = state.payload;
        const cartContainProduct = cart.find(product => product.id === newProduct.id);

        return cartContainProduct
          ? {
              ...state.state,
              cart: cart.map((product) =>
                product.id === newProduct.id
                  ? { ...product, quantity: product.quantity + 1, total: (product.quantity + 1)*product.price }
                  : product
              ),
            }
          : {
              ...state.state,
              cart: [...cart, {...newProduct, quantity: 1, total: newProduct.price}],
            };
    },
    removeAll: (state) => {
        return {
            ...state.state,
            cart: [],
            note: ''
        }
    },
    removeOne: state => {
        const cart = state.state.cart;
        const quantity = cart.find(product => product.id === state.payload).quantity;
        
        return quantity > 1
        ?   {
            ...state.state,
            cart: cart.map((product) => product.id === state.payload
                ? { ...product, quantity: product.quantity - 1, total: (product.quantity - 1)*product.price}
                : product
            )
            }
        :   {
            ...state.state, 
            cart: cart.filter(product => product.id !== state.payload)
            }
        
    },
    
    addNote: state => {
      const newNote = state.payload;
      return {
        ...state.state,
        note: newNote
      }
    },
    
  SET_CLIENT_NAME: state => {
    const newClientName = state.payload;
    return {
      ...state.state,
      clientName: newClientName
    }
  },
        
    addTableNumber: state => {
      const numberTable = state.payload;
      return {...state.state, mesa: numberTable}
    },
    
  get: (state) => {

      return {
        ...state.state,
        products: state.payload
      }
    }
    
    // addProduct: (state) => {
    //     return {
    //         ...state.state,
    //         products: state.state.products.concat({title: state.payload, id: state.state.products.length + 1})
    //     }
    // }


};

module.exports = { actions };