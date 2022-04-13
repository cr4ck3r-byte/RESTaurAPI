import { findProducts } from "../../utils/productsFetch";
import { useProductsDispatch } from "./useProductsDispatch";

const { useEffect } = require("react");


export default function useFindProducts(){
    const dispatch = useProductsDispatch();
    return useEffect(() => {
        let isMounted = true;
        async function findP() {
            const res = await findProducts();
            if (isMounted) {
                dispatch({type:'get', payload: res?.data?.resultado})
            }
        }
        findP();
        
        return ()=>{isMounted = false}
    },[dispatch]);
}