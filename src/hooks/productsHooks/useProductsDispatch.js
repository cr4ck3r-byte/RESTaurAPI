import { useContext } from 'react'
import { ProductsContext } from '../../Context/ProductsContext/ProductsProvider'

const useProductsDispatch = () => useContext(ProductsContext)[1];

export { useProductsDispatch };