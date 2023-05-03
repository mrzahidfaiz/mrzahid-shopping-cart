import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "./routes";
import Layouts from "./layouts/Layouts";
import CartProvider from "./contexts/CartProvider";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <ToastContainer />
        <Layouts>
          <Routes>
            {routes.map((route, index) => (
              <Route
                path={route.path}
                element={<route.element />}
                key={index}
              />
            ))}
          </Routes>
        </Layouts>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
