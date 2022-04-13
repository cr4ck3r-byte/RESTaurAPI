import { ProductCart } from '../Components/ProductCart'
import { useProducts } from '../hooks/productsHooks/useProducts'
import style from '../style/Cart.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons'
import { useNavigate, NavLink } from 'react-router-dom'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { useProductsDispatch } from '../hooks/productsHooks/useProductsDispatch'
import { socket } from '../sockets/cartSocket'
import useModal from '../hooks/ModalHooks/useModal'
import Modal from '../Components/Modal'
import {toast, Toaster} from 'react-hot-toast'
import { motion, AnimatePresence } from 'framer-motion'


export const Cart = () => {
  const nav = useNavigate();
  
  const { cart, note, mesa, clientName} = useProducts();
  const dispatch = useProductsDispatch();
  
  const total = cart.length > 1 ? cart?.map(p=>p.total)?.reduce((p,c)=>p+c) : cart.map(p=>p.total);
  
  const [orderModal, openModal, closeModal] = useModal();

  const handlerClientName = e => {
    dispatch({
      type: 'SET_CLIENT_NAME',
      payload: e.target.value
    })
  }

  const handleText = e => {
    dispatch({
      type: 'addNote',
      payload: e.target.value
    })
  }


  const handleOrder = () => {
    if (/^[a-zA-Z]{3,9}$/.test(clientName)) {
      socket.emit('send-order', { cart, note, mesa, clientName });
      dispatch({
        type: 'removeAll'
      })
      nav({ pathname: '/' })
    } else { 
      return toast.error('Nombre inválido, debe tener entre 3 y 9 letras')
    }
  }

  return (
    <div className={style.cart_container}>
      <Toaster
        toastOptions={{
          style: {
            fontFamily: 'Roboto',
          }, 
          duration: 2000
        }}
      />
      <Modal isModalOpen={orderModal} openModal={openModal} closeModal={closeModal}>
        <input type="text" className={style.cart_pedido_input_name} placeholder="Ingrese su nombre" onChange={handlerClientName} defaultValue={clientName} />
        <textarea type="text" className={style.cart_pedido_input} onChange={handleText} maxLength="200" placeholder='Esta es una nota para dar indicaciones de su orden. Ejemplo: Una de las dos hamburguesas sin salsa'/>
        <span className={style.cart_total}>total: {total}gs</span>
        <button className={style.cart_pedido_button} onClick={handleOrder}>Pedir</button>
      </Modal>
      <AnimatePresence>
        {cart.map(product => {
          return <ProductCart name={product.name} price={product.price} key={product.id} quantity={product.quantity} id={product.id} url={product.image} />
        })}
      </AnimatePresence>

        {
          cart?.length >= 1 
          ? <>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={style.cart_total}
              >total: {total}gs</motion.span>
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={style.cart_button}
                onClick={() => openModal()}
              >Pedir
              </motion.button>
            </>
          : <>
              <FontAwesomeIcon icon={faCircleXmark} size='3x' className={style.cart_icon_empty}/>
              <span className={style.cart_message}>No Hay ningún producto en la orden</span>
              <NavLink to={`/?mesa=${mesa}`} className={style.cart_link_go}>
                <FontAwesomeIcon icon={faArrowLeft} size='1x' className={style.cart_icon_go}/>
                Ir a menú
              </NavLink>
            </>
        }
        
    </div>
  )
}
