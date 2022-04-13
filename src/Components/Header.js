import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
import {
    NavLink
} from "react-router-dom";
import { useProducts } from "../hooks/productsHooks/useProducts";

const Header = () => {

    const {cart, mesa} = useProducts();
    const productsQuantity = cart.length !== 0 ? cart.map(p => p.quantity)?.reduce((prev, current) => prev + current) : 0;

  return (
    <header style={{ width: '100%', height: '70px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <NavLink to={`/?mesa=${mesa}`}>
            <h2 style={{ fontFamily: "'Bebas Neue', cursive", fontSize: '30px', fontWeight: 'normal', display: 'inline-block', padding: '15px', color: '#000'}}>Burger Shop</h2>
          </NavLink>
          <NavLink to="/cart" style={{color: '#000', position: 'relative'}}>
            <FontAwesomeIcon icon={faCartShopping} size="2x" style={{ padding: '15px' }} />
            {
              cart.length !== 0 
              ?
                <div style={{
                fontFamily: "'Bebas Neue', cursive",
                position: 'absolute',
                left: '40px',
                top: '8px',
                color: '#fff', 
                background: '#000', 
                borderRadius: '50%', 
                fontSize: '16px', 
                height: '18px', 
                width: '18px', 
                textAlign: 'center'
                }}>{productsQuantity}</div>
              : ''
            }
          </NavLink>
    </header>
  )
}
export default Header