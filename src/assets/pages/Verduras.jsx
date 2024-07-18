import React from 'react'
import flecha from '../img/chevron-left.png'
import lupa from '../img/lupa.png'
import settings from '../img/settings.png'
import carro from '../img/carro.png'
import verdura1 from '../img/verdura1.png'
import verdura2 from '../img/verdura2.png'
import verdura3 from '../img/verdura3.png'
import verdura4 from '../img/verdura4.png'
import verdura5 from '../img/verdura5.png'
import fondoverdura from '../img/fondoverdura.png'
import linea from '../img/linea.png'
import zanahoria from '../img/Rectangle 74.png'
import mas from '../img/mas.png'
import like from '../img/like.png'
import pimenton from '../img/pimenton.png'
import cebolla from '../img/cebolla.png'
import papa from '../img/papa.png'
import { Link } from 'react-router-dom'




const Verduras = () => {
  return (
    <div>
        {/* BUSCADOR */}
        <div>
            <div className='flex mt-8'>
                <Link to={'/Descuentos'}><img className='w-6 h-6 mt-6 ml-2' src={flecha} alt="" /></Link>
        

                        <div className='flex relative p-3'>
                            <img className='absolute mt-[10px] ml-2 bg-gray-200' src={lupa} alt="" />
                            <input className='w-[310px] mb-1 h-10 rounded-lg text-sm bg-gray-200' type="text" placeholder='         Search for fruits, vegetables, groce...' />
                            <img className='h-5 mt-2 ml-[280px] w-5 absolute bg-gray-200' src={settings} alt="" />
                        </div>

                        <img className='w-8 h-8 mt-[18px] mr-[-35px] ml-3' src={carro} alt="" />
                    </div>
        </div>


        {/* CAROUSEL DE OPCIONES, FRUTAS, VERDURAS, LECHE, ETC */}
        <div>
                    <div className='flex gap-7 mt-4 ml-5 w-16 h-16'>
                        <img src={verdura1} alt="" />
                        <img src={verdura2} alt="" />
                        <img src={verdura3} alt="" />
                        <div className='mr-14'>
                            <img className='absolute w-12 h-12 mt-2 ml-1' src={verdura4} alt="" />
                            <img className='absolute w-16 h-16' src={fondoverdura} alt="" />
                        </div>
                        <img src={verdura5} alt="" />
                    </div>

                    <div className='flex ml-8 mt-1 gap-10 text-[13px]'>
                        <h3 className='ml-[-2%]'>Vegetable</h3>
                        <Link to={'/Frutas'}>Fruits</Link>
                        <Link to={'/Meat'} className='text-center ml-3'>Meat <br /> and Eggs</Link>
                        <Link to={'/Drinks'}>Drinks</Link>
                        <Link to={'/Bake'} className='text-center'>Baker</Link>
                    </div>

                    <div>
                        <img className='h-[1.5px] mt-6 w-[430px]' src={linea.png} alt="" /> 
                    </div>
        </div>

        {/* TARJETA DE VERDURAS */}
        <div className='flex'>
            <div className='cartas mt-10 ml-10 rounded-lg'>
                <div className='relative'> 
                    <img className='absolute' src={zanahoria} alt="" />
                    <img className='absolute ml-28 bg-gray-700 border-gray-700 rounded-md mt-2 mr-1' src={like} alt="" />
                </div>
                <div className='relative'>
                <h3 className='absolute mt-36 ml-2'><strong>Fresh Carrot</strong></h3>
                    <div className='flex'>
                        <h3 className='absolute mt-44 text-green-700 ml-2'><strong>Rp 18,000</strong></h3>
                        <h5 className='absolute mt-[178px] ml-[89px] text-gray-400 text-xs '>/kg</h5>
                    </div>
                <h5 className='line-through absolute mt-[200px] text-[12px] text-gray-400 ml-2'>Rp 21,000</h5>
                <img className='absolute mt-[220px] ml-28' src={mas} alt="" />
                </div>
            </div>


            <div className='cartas mt-10 ml-10 rounded-lg'>
                <div className='relative'> 
                    <img className='absolute' src={pimenton} alt="" />
                    <img className='absolute ml-28 bg-gray-700 border-gray-700 rounded-md mt-2 mr-1' src={like} alt="" />
                </div>
                <div className='relative'>
                <h3 className='absolute mt-36 ml-2'><strong>Fresh Red Chilli</strong></h3>
                    <div className='flex'>
                        <h3 className='absolute mt-44 text-green-700 ml-2'><strong>Rp 12,000</strong></h3>
                        <h5 className='absolute mt-[178px] ml-[89px] text-gray-400 text-xs '>/kg</h5>
                    </div>
                <h5 className='line-through absolute mt-[200px] text-[12px] text-gray-400 ml-2'>Rp 14,000</h5>
                <img className='absolute mt-[220px] ml-28' src={mas} alt="" />
                </div>
            </div>
        </div>

        <div className='flex'>
            <div className='cartas mt-10 ml-10 rounded-lg'>
                <div className='relative'> 
                    <img className='absolute' src={cebolla} alt="" />
                    <img className='absolute ml-28 bg-gray-700 border-gray-700 rounded-md mt-2 mr-1' src={like} alt="" />
                </div>
                <div className='relative'>
                <h3 className='absolute mt-36 ml-2'><strong>Fresh Onion</strong></h3>
                    <div className='flex'>
                        <h3 className='absolute mt-44 text-green-700 ml-2'><strong>Rp 21,000</strong></h3>
                        <h5 className='absolute mt-[178px] ml-[89px] text-gray-400 text-xs '>/kg</h5>
                    </div>
                <h5 className='line-through absolute mt-[200px] text-[12px] text-gray-400 ml-2'>Rp 23,000</h5>
                <img className='absolute mt-[220px] ml-28' src={mas} alt="" />
                </div>
            </div>


            <div className='cartas mt-10 ml-10 rounded-lg'>
                <div className='relative'> 
                    <img className='absolute' src={papa} alt="" />
                    <img className='absolute ml-28 bg-gray-700 border-gray-700 rounded-md mt-2 mr-1' src={like} alt="" />
                </div>
                <div className='relative'>
                <h3 className='absolute mt-36 ml-2'><strong>Fresh Potato</strong></h3>
                    <div className='flex'>
                        <h3 className='absolute mt-44 text-green-700 ml-2'><strong>Rp 10,000</strong></h3>
                        <h5 className='absolute mt-[178px] ml-[89px] text-gray-400 text-xs '>/kg</h5>
                    </div>
                <h5 className='line-through absolute mt-[200px] text-[12px] text-gray-400 ml-2'>Rp 12,000</h5>
                <img className='absolute mt-[220px] ml-28' src={mas} alt="" />
                </div>
            </div>
        </div>


        
    </div>
  )
}

export default Verduras