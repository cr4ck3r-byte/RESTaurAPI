import {useEffect} from 'react'
import { useLocation } from 'react-router-dom';
import { useProducts } from './productsHooks/useProducts';
import { useProductsDispatch } from './productsHooks/useProductsDispatch';
import { config } from '../config/config'

const useQrIsScanned = () => {
    const { mesa } = useProducts();
    const nOfTable = useLocation().search.slice(6, 7);
    const dispatch = useProductsDispatch();
    return (
    useEffect(() => {
        if (nOfTable.length > 0) {
            dispatch({
                type: "addTableNumber",
                payload: nOfTable
            })            
        } else {
            if (mesa.length > 0) {
                return
            }
            window.location.href = config.URI+'qr-example'
        };
    },[nOfTable, dispatch, mesa])

  )
}
export default useQrIsScanned