import { useContext } from 'react'
import { ProductsContext } from '../../Context/ProductsContext/ProductsProvider'

const useProducts = ()=>useContext(ProductsContext)[0];

export { useProducts };