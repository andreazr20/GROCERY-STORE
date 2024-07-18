import React from 'react'
import { Link } from 'react-router-dom'
import flechaIzq from '../img/flechaizq.png'
import hombre2 from '../img/hombre2.png'
import Vector from '../img/Vector.png'

const Register = () => {
  return (
    <div>
         <div>

<div>
  <div>
  <Link to={'/Home'}><img className='w-10 h-10 ml-2 border rounded-full bg-gray-300 p-2' src={flechaIzq} alt="" /></Link>
  </div>
  <div className='p-16'></div>
  <div className='relative mb-10'>
      <h1 className='text-4xl font-bold ml-16 absolute text-green-800'>Register</h1>
    </div>
  <img className='ml-60 w-28 mt-[-140px] mb-10' src={hombre2} alt="" />
  </div>

  <div className='ml-6'>
    <div className='flex'>
        <div className='mb-4 mt-4'>
            <h3>Nombre</h3>
            <input type="text" placeholder='tu nombre'className="p-2 mt-2 h-12 rounded-xl bg-gray-100 text-sm mr-10"/>
        </div>
        <div>
            <h3 className='mt-4'>Apellido</h3>
            <input type="text" placeholder='tu apellido'className="p-2 mt-2 h-12 rounded-xl bg-gray-100 text-sm"/>
        </div>
    </div>

    <div className='flex'>
        <div className='mb-4 mt-4'>
            <h3>Direccion</h3>
            <input type="text" placeholder='tu dirección'className="p-2 mt-2 h-12 rounded-xl bg-gray-100 text-sm mr-10"/>
        </div>
        <div>
            <h3 className='mt-4'>Teléfono</h3>
            <input type="number" placeholder='tu teléfono'className="p-2 mt-2 h-12 rounded-xl bg-gray-100 text-sm"/>
        </div>
    </div>


    <h3>Email</h3>
    <input onChange={(e)=> setEmail(e.target.value)} className="p-2 mt-2 h-12 rounded-xl bg-gray-100 w-96 text-sm" type="text" placeholder='yourmail@mail.com' />

    <h3 className='mt-6'>Set a password</h3>

    <div className='flex relative'>
      <input onChange={(e)=> setPassword(e.target.value)} className='p-2 mt-2 h-12 rounded-xl bg-gray-100 w-96 text-sm' type="text" placeholder='your password'/>
      <img className='absolute ml-[340px] mt-4' src={Vector} alt="" />
    </div>

    <div className='flex'>
    
    </div>
  </div>

  <div>
  <Link to={'/Descuentos'} className='fondoGetStarted text-white font-bold btn btn-primary btn-sm ml-[6%] mt-11 h-14 rounded-lg bg-green-600 w-96 border-green-600'>Estas registrado!</Link>

  </div>

</div>
    </div>
  )
}

export default Register