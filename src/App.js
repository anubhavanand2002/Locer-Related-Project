import './App.css';
import Home from './Pages/Home/Home.js';
import Orders from './Pages/Orders/Orders';
import Products from './Pages/Products/Products';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Delievery from './Pages/Delievery/Delievery';
import Navbar from './Components/Navbar/Navbar';
function App() {
  return (
   <div>
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/orders" element={<Orders/>}/>
            <Route path="/products" element={<Products/>}/>
            <Route path="/Delievery" element={<Delievery/>}/>
         </Routes>
      </BrowserRouter>
   </div>
  );
}

export default App;
