import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "./routes";
import Layouts from "./layouts/Layouts";
import CartProvider from "./contexts/CartProvider";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
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
