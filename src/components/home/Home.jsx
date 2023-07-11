import produce from 'immer';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { add, remove } from '../store/CartSlice';

const Home = () => {
    const dispatch = useDispatch();
    const CartData = useSelector((state) => state.cart)



    const storeData = [
        {
            productId: 1,
            productName: 'Fan'
        },
        {
            productId: 2,
            productName: 'Cooler'
        },
        {
            productId: 3,
            productName: 'AC'
        },
        {
            productId: 4,
            productName: 'TV'
        },
        {
            productId: 5,
            productName: 'Mobile'
        }
    ]

    const HandleAdd = (product) => {
        dispatch(add(product))
    }

    const handelRemove = (product) => {

        if (CartData.some(item => item.productId === product.productId)) {
            dispatch(remove(product.productId))
        }
        else {
            alert(`${product.productName} is not Added`)
        }
        console.log('====================================');
        console.log("product", product.productName);
        console.log('====================================');
    }

    
    return (
        <div style={{ backgroundColor: "pink", height: '100%', width: '50%', display: 'flex', alignItems: "center", justifyContent: "center", margin: "0 auto", flexDirection: 'column', marginTop:'10%',  border:"1px solid " }}>
           
           <div style={{width:'50%' , height:'50%' , display:'flex', backgroundColor:'plum', flexDirection:'row', alignItems:"center", justifyContent:"center"}}><NavLink style={{textDecoration:"none"}} to='/homedata'>Cart Items :&nbsp; {CartData.length}</NavLink></div>
            {
                storeData.map((item, index) => {

                    return (
                        <div style={{ display: 'flex', flexDirection: "row", gap: 10, alignItems: "center", border: '1px solid black', width: '100%', justifyContent: 'center' }}>
                            <h2 style={{ margin: '2%', width: "30%" }}>{item.productName}</h2>
                            <button onClick={() => HandleAdd(item)} style={{ height: '20px', width: "30%" }}>ADD</button>
                            <button onClick={() => handelRemove(item)} style={{ height: '20px', width: "30%" }}>Remove</button>
                        </div>
                    )
                })
            }

            {/* <div>Added{item.productName}</div> <div>Removed{item.productName}</div>/ */}

        </div>
    )
}

export default Home
