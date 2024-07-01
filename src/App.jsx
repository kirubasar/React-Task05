import { useState } from 'react'
import { createContext } from 'react'
import "./App.css"
import ProductItem from './product/ProductItem';
export const productContext = createContext();
const App = () => {
  
    const [product, setProduct] = useState([
        {
                "id": 1,
                "title": "iPhone 9",
                "description": "An apple mobile which is nothing like apple",
                "price": 549,
                "count":1
            }
        ])
return (
    <productContext.Provider value={{product,setProduct}}>
         <ProductItem/>
    </productContext.Provider>
    
  )
}

export default App;