import React, { useState } from 'react';

import { Link,useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../components/navbar/Navbar';
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as Yup from 'yup';
// const schema = Yup.object().shape({
//   name: Yup.string().required(),
//   email: Yup.string().email().required(),
//   address: Yup.string().required().min(4),
//   password: Yup.string().min(8).max(21).required(),
// });

export default function Signup() {
  // const {
  //   register,

  //   formState: { errors },
  // } = useForm({
  //   resolver: yupResolver(schema),
  // });
  const navigate=useNavigate()

  const [credentials, setCredentials] = useState({name:"",email:"",password:"",geolocation:""});
  // const onSubmit = async (formData) => {
  //   try {
  //     const res = await axios.post('http://localhost:3000/addUser', formData);
  //     if (res.data === 'fail') {
  //       alert('failed');
  //     } else {
  //       alert('Form is submitted succesfully');
  //       setData(res.data,);

  //       console.log(data);
  //     }
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };
    const handleSubmit= async(e)=>{
       e.preventDefault();
       const response= await fetch("https://mern-food-app-qgtw.onrender.com/api/creatuser",{
        method:"POST",
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({name:credentials.name,email:credentials.email,password:credentials.password,location:credentials.geolocation})
       })
       const json=await response.json()
       console.log(json);

       if(!json.success){
       alert("Enter Valid Credentials")
       }else{
          alert(`Hello ${credentials.name} you are Registered Successfully Now you are login`)
            toast("Hello you are Registered Successfully Now you are login", {
              position: toast.POSITION.TOP_CENTER
            });
           
            navigate("/login")
       }
       setCredentials("")
    }
    const onChange=(event)=>{
      setCredentials({...credentials,[event.target.name]:event.target.value})
    }

  return (
    <>
    
    <Navbar/>
      <div className='container'>
      <ToastContainer />
        <form onSubmit={handleSubmit} >
          
          <h1 style={{marginLeft:"px"}}>Signin</h1>
          <div className='mb-3'>
            <label htmlFor='name' className='form-label'>
              Name
            </label>
            <input type='text' className='form-control' name='name' value={credentials.name} onChange={onChange} />
            {/* {errors.name && <span>{errors.name.message}</span>} */}
            <br />
          </div>
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
          <div className='mb-3'>
            <label htmlFor='address' className='form-label'>
              Address
            </label>
            <input type='text' className='form-control' id='address'  name='geolocation' value={credentials.geolocation} onChange={onChange} />
            {/* {errors.address && <span>{errors.address.message}</span>} */}
            <br />
          </div>

          <button type='submit'className='m-3 btn btn-success'>
            Submit
          </button>
          <Link to='/login' className='m-3 btn btn-danger'>
            Already a User
          </Link>
        </form>
        </div>
      
      
    </>
  );
}

//{...register('address')}
