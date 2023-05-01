import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import routes from './routes';
import Layouts from './layouts/Layouts';
import CartProvider from './contexts/CartProvider';

function App() {
  return (
    <BrowserRouter>
    <Layouts >
      <CartProvider>
    <Routes>
     {
      routes.map((route, index)=>
        <Route path={route.path} element={<route.element />} key={index} />
      )
     }
    </Routes>
    </CartProvider>
    </Layouts>
    </BrowserRouter>
  );
}

export default App;
