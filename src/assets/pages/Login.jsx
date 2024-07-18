import React, { useState } from 'react'
import hombre2 from '../img/hombre2.png'
import Vector from '../img/Vector.png'
import flechaIzq from '../img/flechaizq.png'
import { Link } from 'react-router-dom'
import {  createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase'



// FUNCION PARA GUARDAR INFORMACION DEL INPUT DE CORREO USANDO FIREBASE.COM
const Login = () => {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const registro = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
  }


  return (


    <div>

        <div className='bolita'>
          <div>
          <Link to={'/Home'}><img className='w-6 h-6 ml-2' src={flechaIzq} alt="" /></Link>
          </div>
          <div className='p-16'></div>
          <div className='relative'>
              <h1 className='text-4xl text-white font-bold mt-28 ml-4 absolute'>Login</h1>
            </div>
          <img className='ml-56 w-48 mt-[-60px]' src={hombre2} alt="" />
          </div>

          <div className='ml-6'>
            <h3>email</h3>
            <input onChange={(e)=> setEmail(e.target.value)} className="p-2 mt-2 h-12 rounded-xl bg-gray-100 w-96 text-sm" type="text" placeholder='yourmail@mail.com' />

            <h3 className='mt-6'>password</h3>

            <div className='flex relative'>
              <input onChange={(e)=> setPassword(e.target.value)} className='p-2 mt-2 h-12 rounded-xl bg-gray-100 w-96 text-sm' type="text" placeholder='your password'/>
              <img className='absolute ml-[340px] mt-4' src={Vector} alt="" />
            </div>

            <div className='flex'>
            <button className='text-green-700 text-xs mt-4' onClick={()=>registro(email, password)} ><strong>Register</strong></button>
            <h4 className='text-xs text-green-700 ml-60 mt-6'>Forgot Password</h4>
            </div>
          </div>

          <div>
          <Link to={'/Descuentos'} className='fondoGetStarted text-white font-bold btn btn-primary btn-sm ml-[6%] mt-6 h-14 rounded-lg bg-green-600 w-96 border-green-600'>Lets get started</Link>
          <h4 className='text-xs text-green-700 ml-32 mt-8'>Not have an account? <strong>Register</strong></h4>
          </div>

    </div>
  )
}

export default Login