const {actions} = require('./actions')

const initialProductState = {
    products: [
        
    ],
    cart: [
        
    ],
    note: '',
    mesa: '',
    clientName: '',
}

const productReducer = (state, action) => {
    const {type} = action;
    const payload = action.payload;
    if(actions[type] === undefined){
        return state
    }
    return actions[type]({state, payload})
}

module.exports = { productReducer,  initialProductState};