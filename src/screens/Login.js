import React,{useState} from 'react'
import { Link,useNavigate } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
export default function Login(){

  
  const [credentials, setCredentials] = useState({email:"",password:""});

  let navigate=useNavigate()
    const handleSubmit= async(e)=>{
       e.preventDefault();
       const response= await fetch("https://flavor-go.onrender.com/api/loginuser",{
        method:"POST",
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({email:credentials.email,password:credentials.password})
       })
       const json=await response.json()
       console.log(json);

       if(!json.success){
       alert("Enter Valid Credentials")
       }
       if(json.success){
        //everytime when you are try to login the diff auth tok will be gen
        localStorage.setItem("userEmail",credentials.email)
        localStorage.setItem("authToken",json.authToken)
        console.log(localStorage.getItem("authToken"))
        navigate("/");
        }
          
    }
    const onChange=(event)=>{
      setCredentials({...credentials,[event.target.name]:event.target.value})
    }
  return(
    <div>
      <Navbar/>
           <div className='container'>
        <form onSubmit={handleSubmit}>
        <h1 style={{marginTop:"55px"}}>Login Form</h1>
          <div className='mb-3'>
            <label htmlFor='email' className='form-label'>
              Email address
            </label>
            <input type='email'  className='form-control' id='email' aria-describedby='emailHelp'  name='email' value={credentials.email} onChange={onChange} />
            {/* {errors.email && <span>{errors.email.message}</span>} */}
            <br />
            <div id='emailHelp' className='form-text'>
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className='mb-3'>
            <label htmlFor='password' className='form-label'>
              Password
            </label>
            <input type='password' className='form-control' id='password'  name='password' value={credentials.password} onChange={onChange} />
            {/* {errors.password && <span>{errors.password.message}</span>} */}
            <br />
          </div>

          <button type='submit'className='m-3 btn btn-success'>
            Submit
          </button>
          <Link to='/creatuser' className='m-3 btn btn-danger'>
           I'am a new  User
          </Link>
        </form>
      </div>
    </div>
  )
}







// import React, { useState, useEffect, useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as Yup from 'yup';
// import axios from 'axios';
// import $ from "jquery";

// const schema = Yup.object().shape({
//     name: Yup.string().required(),
//     email: Yup.string().email().required(),
//     address: Yup.string().required(),
//     password: Yup.string().required(),
//   });
// export default function Login(){
// //     const[user,setUsers]=useState([])
// //     const[email,setEmail]=useState("")
// //     const[pass,setPass]=useState("")
// //     console.log(user)
// //     const navigate=useNavigate()
// //     useEffect(()=>{
        
// //         async function fetchData() {
// //             try {
// //               const response = await axios.get("http://localhost:3000/getData");
// //               if (response.data.status === "ok") {
// //                 setUsers(response.data.data);
// //               }
// //             } catch (error) {
// //               console.error(error);
// //             }
// //           }
// //           fetchData()
// //     },[])
  
// //     function submit(event,res,req){
// //         event.preventDefault(event);
// //         const getnew=user.filter((e)=>e.email==email && e.password==pass)
// //         if(getnew.length==0){
// //             alert("enter valid information")
// //         }else{
// //             alert("you are logging")
// //              return res.json({success:true})
// //         }
// //  }
//     return(
//         <>
//           <div className='mb-3'>
//             <label htmlFor='email' className='form-label'>
//               Email address
//             </label>
//             <input type='email'  className='form-control' id='email' value={email} onChange={(e)=>setEmail(e.target.value)} aria-describedby='emailHelp' />
//            <br />
//            <div className='mb-3'>
//             <label htmlFor='password' className='form-label'>
//               Password
//             </label>
//             <input type='password'className='form-control' value={pass} onChange={(e)=>setPass(e.target.value)} />
//             </div>
//             <button type='submit'  className='m-3 btn btn-success'>
//             Submit
//           </button>
//           <Link to='/signup' className='m-3 btn btn-danger'>
//             I'am a new user
//           </Link>
//           {/* {user ?  `welcome  ${user.name} you are successfully loggin `:"" } */}
//             </div>
//        </>
//     )
// }