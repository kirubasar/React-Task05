import  { useContext, useState } from 'react'
import { productContext } from '../App'

const ProductItem = () => {
  
    const{product, setProduct} = useContext(productContext)
    const[count, setCount] = useState(product[0].count)
   const increment=()=>{
    setCount(count + 1);
   }
   const decrement = () => {
    if (count > 1) {
      setCount(count - 1); 
    }
  };

   const removeProduct = () => {
    
    const updatedProducts = product.filter((p) => p.id !== product[0].id);
   setProduct(updatedProducts);
  };
  const totalPrice = product[0].price * count;
  return (
    <div className ="container">
        <div className="card mb-3">
    <div className="row g-0">
      <div className="col-md-4">
        <img src="https://specs-tech.com/wp-content/uploads/2020/01/iPhone-9-600x600.jpg" className="img-fluid rounded-start" alt="image"/>
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h5 className="card-title">{product[0].title}</h5>
          <p className="card-text">{product[0].description}</p>
          <p className="card-text"><small className="text-body-secondary">Price: ${product[0].price}</small></p>
          <p className="card-text"><bold> Quantity:</bold>
             <button className='qtyplus' onClick={increment}>+</button>
             {count}
             <button className='qtyminus' onClick={decrement}>-</button>
          </p>
          <button className="btn btn-primary" onClick={removeProduct}>Remove</button>
          </div>
          <ul className="list-group list-group-flush">
    <li className="list-group-item">SUBTOTAL: ${product[0].price} <br/>SHIPPING: free</li>
    <li className="list-group-item">TOTAL:${totalPrice}</li>
    </ul>
        </div>
    </div>
  </div>
  </div>
  )
}
export default ProductItem;