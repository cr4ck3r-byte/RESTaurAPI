import React from 'react'
import style from './ProductCart.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleMinus} from '@fortawesome/free-solid-svg-icons'
import { useProductsDispatch } from '../hooks/productsHooks/useProductsDispatch';
import {motion} from 'framer-motion'
// import imgHamburguesaTemp from '../assets/hamburguesa-2028707.jpg' 

export const ProductCart = ({name, price, quantity, id, url}) => {
  
  const dispatch = useProductsDispatch();
  
  const productVariants = {
    visible: i => ({
      opacity: 1,
      y: -10,
      transition: {
        duration: 0.5,
        delay: i * 0.2,
      }
    }), 
    hidden: {
      opacity: 0,
      y: '-100'
    }, 
    exit: {
      opacity: 0,
      scale: 0.5,
    }
  }

  return (
      <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      custom={id}
      variants={productVariants}
      className={style.product_cart_container}
      >
        <img src={url} alt="hamburgesa"  className={style.product_cart_img}/>
        <FontAwesomeIcon icon={faCircleMinus} size="2x" className={style.product_cart_btn_delete} onClick={() => {
          dispatch({
            type: 'removeOne',
            payload: id
          })
        }}/>
            <span className={style.product_cart_name}>{name}</span>
            <span className={style.product_cart_price}>{price} gs</span>
            <span className={style.product_cart_quantity}>Cantidad: {quantity}</span>
      </motion.div>
  )
}
