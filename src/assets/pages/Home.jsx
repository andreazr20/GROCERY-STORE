import React from 'react'
import logo from '../img/logo.png'
import gente from '../img/gente.png'
import linea from '../img/linea.png'
import fb from '../img/facebooklogo.png'
import google from '../img/googlelogo.png'
import { Link } from 'react-router-dom'
import flechaIzq from '../img/flechaizq.png'


const Home = () => {
  return (
    <div id='pantallaHome' className='visible screen'>

      <div className='bolita'>
        <Link to={'/'}><img className='w-6 h-6 ml-2' src={flechaIzq} alt="" /></Link>
          <div className='p-20'>
          <img className='ml-11' src={logo} alt="" />
          </div>
          
          <div>
            <img className='ml-12 w-[80%]' src={gente} alt="" />
          </div>
      </div>


      <div className='boton-home'>
        <Link to={'/Login'} className='text-white font-semibold boton btn btn-primary btn-sm ml-[15%] mt-20 h-12 rounded-lg w-[300px] border-lime-600'>Log in</Link>
        <Link to={'/Register'} className=" font-semibold border-lime-600 border-2 btn btn-primary btn-sm ml-[15%] bg-white mt-4 h-12 rounded-lg w-[300px] boton1 text-lime-800">Register</Link>
        <div className='flex mt-10'>
          <img className='ml-16 w-20 h-0.5 mt-2' src={linea.png} alt="" />
          <h3 className='ml-6'>Or login with</h3>
          <img className='w-20 h-0.5 ml-6 mt-2
          ' src={linea.png} alt="" />
      </div>

              <div className='flex relative'>
              <img className='absolute ml-24 mt-8 w-5' src={google} alt="" />
                <button type="button" className="text-lime-800 h-9 font-semibold btn btn-primary border-lime-600 border-1 btn-sm ml-[15%] mt-4 rounded-xl border bg-white w-[300px]">Google</button>
              </div>

              <div className='flex relative'>
              <img className='absolute ml-24 mt-9' src={fb} alt="" />
                <button type="button" className="text-white font-semibold btn btn-primary btn-sm ml-[14%] mt-6 bg-blue-600 h-10 rounded-xl border-2 w-[308px]">Facebook</button> 
              </div>

      </div>
      
    </div>

  )
}

export default Home