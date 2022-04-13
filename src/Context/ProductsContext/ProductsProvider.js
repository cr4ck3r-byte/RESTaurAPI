import { createContext, useReducer} from 'react'
import { initialProductState, productReducer} from '../../reducers/productReducers';
const ProductsContext = createContext();

const ProductsProvider = ({children}) => {
    return <ProductsContext.Provider value={useReducer(productReducer, initialProductState)}>
        {children}
    </ProductsContext.Provider>
}

export { ProductsContext };
export default ProductsProvider;