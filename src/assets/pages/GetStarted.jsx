import React from 'react'
import mujer from '../img/mujer.png'
import hombre from '../img/hombre.png'
import logo from '../img/logo.png'
import { Link } from 'react-router-dom'

const GetStarted = () => {
  return (
    <div className='fondoGetStarted bottom-0'>
        <div className='bolita'>
            <div className='p-20'>
            <img className='ml-11' src={logo} alt="" />
          </div>
          
          <div className='flex ml-20'>
            <img className='w-36' src={mujer} alt="" />
            <img className='w-36' src={hombre} alt="" />
          </div>

        <div>
        

        <div>
            <h2 className='mt-28 ml-2 text-center text-lg text-white'>Kangsayur is a solution for <strong>Grocery <br /> Shopping</strong> every you need</h2>
                <div>
                    <Link to={'/Home'} className='text-green-700 mb-28 font-bold btn btn-primary btn-sm ml-[10%] mt-20 h-14 rounded-xl bg-white w-[350px] border-lime-600 text-lg'>Get Started</Link>
                </div>
        </div>
        </div>
          
      </div> 
    </div>
  )
}

export default GetStarted