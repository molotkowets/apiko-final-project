import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Layout from './components/Layout';
import Authorization from './containers/authorization/Authorization';
import Registration from './containers/registration/Registration';
import Login from './containers/login/Login';
import Settings from './pages/settings/Settings';
import EditAccount from './components/edit-account/EditAccount';
import Error from './pages/error/Error';
import OrdersHistory from './components/orders-history/OrdersHistory';
import Cart from './pages/cart/Cart';
import Product from './containers/product-card/Product';
import { useState } from 'react';
import Favorites from './components/favorites/Favorites';


function App() {
  const location = useLocation();
  const background = location.state && location.state.background;
  const onAuth = JSON.parse(localStorage.getItem("onAuth"))?.token
  // const [idProduct, setIdProduct] = useState('')
  // console.log(idProduct)
  return (
    <>
      <Routes location={background || location}>
        <Route path='/' element={<Layout/>}>
           <Route index element={<Home/>}/>
           <Route path='cart' element={<Cart/>}/>
           <Route path='product/:id' element={<Product/>}/>
           {onAuth && (
            <Route path='/' element={<Settings/>}>
              <Route path='edit-account' element={<EditAccount/>} />
              <Route path='order-history' element={<OrdersHistory/>} />
              <Route path='favorites' element={<Favorites/>} />
            </Route>)}
           <Route path='*' element={<Error/>}/>
        </Route>
      </Routes>

      {background && (
        <Routes>
          <Route path='/auth' element={<Authorization/>}>
            <Route path='registration' element={<Registration/>}/>
            <Route path='login' element={<Login/>}/>
          </Route>
        </Routes>
      )}
    </>
  );
}

export default App;
