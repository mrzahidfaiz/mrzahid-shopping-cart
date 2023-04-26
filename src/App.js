import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import routes from './routes';
import Layouts from './layouts/Layouts';


function App() {
  return (
    <BrowserRouter>
    <Layouts />
    <Routes>
     {
      routes.map((route, index)=>
        <Route path={route.path} element={<route.element />} key={index} />
      )
     }
    </Routes>
    </BrowserRouter>
  );
}

export default App;
