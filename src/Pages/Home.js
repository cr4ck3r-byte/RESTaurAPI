import React from 'react'
import { Product } from '../Components/Product'
import style from '../style/Home.module.css'
import { useProducts } from '../hooks/productsHooks/useProducts'
import { socket } from '../sockets/cartSocket'
import useQrIsScanned from '../hooks/useQrIsScanned'
import useFindProducts from '../hooks/productsHooks/useFindProducts'
import { useEffect } from 'react'

export const Home = () => {
  useFindProducts();
  
  //Page data
  const { products } = useProducts();
  useEffect(() => {
    socket?.on("connect", () => {
    });
  }, [])
  
  useQrIsScanned()
  return (
      <main className={style.main}>
        {products.map(product => {
          return <Product key={product.id} name={product.name} price={product.price} id={product.id} image={product?.image?.url}/>  
        })}
      </main>
  )
}