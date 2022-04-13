import { useEffect, useRef } from 'react'
import { socket } from '../../sockets/cartSocket';
import { useProductsDispatch } from '../productsHooks/useProductsDispatch';
import { toast } from 'react-hot-toast';
const useNotification = () => {
  let socketPayload = useRef({}); 
  const dispatch = useProductsDispatch();
  
    useEffect(() => {
      let isMounted = true;
      if (isMounted) { 
        //Espesific Notification 
        socket?.on("received-notify", s => {
          dispatch({
            type: 'removeAll'
          })
          socketPayload.current = s.payload;
          toast.success(s.payload.text);
        });

        //General Notifications
        socket?.on("notify", s => {
          socketPayload.current = s.payload;
          toast.info(s.payload.text);
        });
      }
      return () => {
        isMounted = false;
      }
    },[dispatch])
    
    return [socketPayload.current]
}

export default useNotification