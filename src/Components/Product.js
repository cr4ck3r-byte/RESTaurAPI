import React from 'react'
import { useProductsDispatch } from '../hooks/productsHooks/useProductsDispatch';
import style from './Product.module.css'
import {motion} from 'framer-motion'

export const Product = (props) => {

  const dispatch = useProductsDispatch();

  const productVariants = {
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: i * 0.2,
      }
    }), 
    hidden: {
      opacity: 0,
      y: '-150'
    }
  }

  return (
    <motion.div
      onTap={()=>dispatch({type: "addToCart", payload: props})}
      whileTap={{ scale: 0.8 }}
      initial="hidden"
      animate="visible"
      custom={props.id}
      variants={productVariants}
      className={style.product_container}>
      <div className={style.product_over_img}></div>
      <img className={style.product_img} src={props.image} alt={props.name} />
      <span className={style.product_name}>{props.name}</span>
      <span className={style.product_price}>{props.price}gs</span>
    </motion.div>
  );
}
