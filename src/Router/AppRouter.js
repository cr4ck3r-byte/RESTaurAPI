import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Header from "../Components/Header";
import useNotification from '../hooks/NotificationHooks/useNotification'
import { Cart } from "../Pages/Cart";
import { Home } from "../Pages/Home";
import QrExample from "../Pages/QrExample";
import { Toaster} from "react-hot-toast";

const AppRouter = () => {
  
  useNotification();
  
    return (
      <BrowserRouter>
        <Header />  
        <Toaster
        toastOptions={{
          style: {
            fontFamily: 'Roboto',
          }, 
          duration: 2000
        }}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/qr-example" element={<QrExample/>} />  
      </Routes>
    </BrowserRouter>
      );
    }



export default AppRouter