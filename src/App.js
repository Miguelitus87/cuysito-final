
import './App.css';
import { NavBar } from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { Cart } from './components/Cart';
import { CartContext } from './context/CartContext';

function App() {    
  
  
  return (
    <>
    <CartContext.Provider>
      <BrowserRouter>

        <NavBar/>

        <Routes>
          <Route path='/' element={<ItemListContainer/>} />
          <Route path='/categoria/:idCategoria' element={<ItemListContainer/>} />
          
          <Route path='/item/:id' element={<ItemDetailContainer/>} />    
          
            <Route path='/cart/' element={<Cart/>} /> 
          
        </Routes>
      </BrowserRouter>
    </CartContext.Provider>   
    </>
  );
}

export default App; 

