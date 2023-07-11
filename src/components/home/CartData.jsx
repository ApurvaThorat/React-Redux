import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { remove } from '../store/CartSlice';



const CartData = () => {
  const dispatch = useDispatch();
  const CartData = useSelector((state) => state.cart)

  const handelRemove = (product) => {

    if (CartData.some(item => item.productId === product.productId)) {
        dispatch(remove(product.productId))
    }
    else {
        alert(`${product.productName} is not Added`)
    }
    
}
  return (
    <div>
      <h1>Cart Data
      <div style={{display:"flex", flexDirection:'row', height:"auto", width:"50%", alignItems:"center", gap:10, border:"1px solid "}}>
                <h6 style={{width:"40%", height:"100%", borderRight:"1px solid"}}>productName</h6>

                <button style={{ height: '20px', width: "30%" }}>Remove</button>

              </div>

        {
          CartData.map((item, index) => {
            return (
              <div style={{display:"flex", flexDirection:'row', height:"60%", width:"50%", alignItems:"center", gap:10, border:"1px solid "}}>
                <h6 style={{width:"40%", height:"100%", borderRight:"1px solid"}}>{item.productName}</h6>

                <button onClick={() => handelRemove(item)} style={{ height: '20px', width: "30%" }}>Remove</button>

              </div>
            )
          })

        }
      </h1>
    </div>
  )
}

export default CartData
