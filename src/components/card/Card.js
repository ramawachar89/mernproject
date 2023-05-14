import React,{useState,useRef, useEffect} from 'react'
import { useDispatchCart,useCart } from '../ContextReducer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Card(props){
   let priceRef=useRef()
    const dispatch = useDispatchCart();
    let data=useCart()
    let options=props.options;
    let priceOptions=Object.keys(options)
    let foodItem=props.foodItems
    const[qty,setQty]=useState(1)
    const[size,setSize]=useState("")
     const handleAddToCart= async ()=>{
       let food=[]
       for(const item of data){
         if(item.id===props.foodItem._id){
            food=item;
            toast("add cart Successfully")
            break;
         }
       }
       if(food !== []){
         if(food.size === size){
            await dispatch({type:"UPDATE",id:foodItem._id,price:finalPrice,qty:qty})
            toast("add cart Successfully")
            return 
         }else if(food.size!==size){
            await dispatch({type:"ADD",id:props.foodItem._id,name:props.foodItem.name,price:finalPrice,qty:qty,size:size})
            toast("add cart Successfully")
            return
         }
         return 
       }
        await dispatch({ type: "ADD", id: props.foodItem._id, name: props.foodItem.name, price: finalPrice, qty: qty, size: size })
         toast("add cart Successfully")
        console.log("Size different so simply ADD one more to the list")
       console.log(data)
        
     }
     let finalPrice = qty * parseInt(options[size]); 
     useEffect(()=>{
      setSize(priceRef.current.value)
     },[])
    return(
       <div>
         <ToastContainer/>
          <div><div className="card at-3 " style={{ width: "18rem",maxHeight:"360px" }}>
                <img src={props.foodItem.img} className="card-img-top" alt="..."  style={{height:"120px",objectFit:"fill"}}/>
                <div className="card-body">
                    <h5 className="card-title">{props.foodItem.name}</h5>
                    <p className="card-text">Some quick example text to build on the card title</p>
                     <div className='container w-100'></div>
                     <select className='m-2 h-100  bg-success' onChange={(e)=>setQty(e.target.value)}>
                        {Array.from(Array(6),(e,i)=>{
                            return(
                                <option key={i+1} value={i+1}>{i+1}</option>
                            )
                        })}
                     </select>
                     <select className='m-2 h-100 bg-success rounded' ref={priceRef} onChange={(e)=>setSize(e.target.value)}>
                  {priceOptions.map((data)=>{
                    return <option key={data} value={data}>{data}</option>
                  })}
                     </select>
                     <div className="d-inline h-100 fs-5">
                       {finalPrice}
                     </div>
                </div>
                <hr>
                </hr>
                <button className={'btn btn-success justify-center ms-2'} onClick={handleAddToCart}>Add To Cart</button>
            </div>
            </div>
       </div>
    )
}