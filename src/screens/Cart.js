import React from 'react'
import { useDispatchCart,useCart } from '../components/ContextReducer';
import { FiTrash2 } from "react-icons/fi";
export default function Cart(){
    let data = useCart();
    let dispatch = useDispatchCart();
    if (data.length === 0) {
      return (
        <div>
          <div className='m-5 w-100 text-center text-white bg-red fs-3'>The Cart is Empty!</div>
        </div>
      )
    }
    // const handleRemove = (index)=>{
    //   console.log(index)
    //   dispatch({type:"REMOVE",index:index})
    // }
    const handleCheckout=async()=>{
        let userEmail=localStorage.getItem("userEmail");
        let response=await fetch("https://mern-food-app-qgtw.onrender.com/api/orderData",{
            method:"POST",
            headers:{
                'content-Type':'application/json'
            },
            body:JSON.stringify({
               order_data:data,
               email:userEmail,
               order_date:new Date().toDateString() 
            })
        })
        console.log("order response",response)
        if(response.status===200){
            dispatch({type:"DROP"})
        }
    }
  
    let totalPrice = data.reduce((total, food) => total + food.price, 0)
 return(
    <div>

      {/* {console.log(data)} */}
      <div className='container m-auto mt-5 table-responsive  table-responsive-sm table-responsive-md' >
        <table className='table table-hover '>
          <thead className=' text-success fs-4'>
            <tr>
              <th scope='col' >#</th>
              <th scope='col' >Name</th>
              <th scope='col' >Quantity</th>
              <th scope='col' >Option</th>
              <th scope='col' >Amount</th>
              <th scope='col' ></th>
            </tr>
          </thead>
          <tbody>
            {data.map((food, index) => (
              <tr>
                
                <th className='text-white' scope='row' >{index + 1}</th>
                <td className='text-white'>{food.name}</td>
                <td className='text-white'>{food.qty}</td>
                <td className='text-white'>{food.size}</td>
                <td className='text-white'>{food.price}</td>
              
                <td className='text-white' ><button type="button" className="btn p-0"><FiTrash2 style={{color:"white"}} onClick={() => { dispatch({ type: "REMOVE", index: index }) }} /></button> </td></tr>
            ))}
          </tbody>
        </table>
        <div><h1 className='fs-2 text-white' >Total Price: {totalPrice}/-</h1></div>
        <div>
          <button className='btn bg-success mt-5 ' onClick={handleCheckout} > Check Out </button>
        </div>
      </div>



    </div>
 )
}