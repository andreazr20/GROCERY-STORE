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
import coca from '../img/coca.png'
import leche from '../img/leche.png'
import spark from '../img/spark.png'
import lata from '../img/lata.png'
import like from '../img/like.png'
import mas from '../img/mas.png'
import { Link } from 'react-router-dom'

const Drinks = () => {
  return (
    <div>

        {/* BARRA BUSCADOR */}
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
        <div className='flex gap-7 mt-8 ml-5 w-16 h-16'>
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
                <Link to={'/Verduras'}>Vegetables</Link>
                        <Link to={'/Frutas'}>Fruits</Link>
                        <Link to={'/Meat'} className='text-center'>Meat <br /> and Eggs</Link>
                        <Link to={'/Bake'} className='text-center'>Baker</Link>
                        <h3>Drinks</h3>
                </div>

                <div>
                   <img className='h-[1.5px] mt-9 w-[430px]' src={linea.png} alt="" /> 
                </div>


                <div className='flex'>
            <div className='cartas mt-10 ml-10 rounded-lg'>
                <div className='relative'> 
                    <img className='absolute h-32 ml-10' src={coca} alt="" />
                    <img className='absolute h-6 w-6 ml-32 bg-gray-700 border-gray-700 rounded-md mt-1' src={like} alt="" />
                </div>
                <div className='relative'>
                <h3 className='absolute mt-36 ml-2'><strong>Coca-cola</strong></h3>
                    <div className='flex'>
                        <h3 className='absolute mt-44 text-green-700 ml-2'><strong>Rp 15,000</strong></h3>
                        <h5 className='absolute mt-[178px] ml-[89px] text-gray-400 text-xs '>/kg</h5>
                    </div>
                <h5 className='line-through absolute mt-[200px] text-[12px] text-gray-400 ml-2'>Rp 20,000</h5>
                <img className='absolute mt-[218px] ml-[120px]' src={mas} alt="" />
                </div>
            </div>


            <div className='cartas mt-10 ml-10 rounded-lg'>
                <div className='relative'> 
                    <img className='absolute h-32 w-44' src={leche} alt="" />
                    <img className='absolute ml-32 bg-gray-700 border-gray-700 rounded-md mt-2 mr-1 h-6 w-6' src={like} alt="" />
                </div>
                <div className='relative'>
                <h3 className='absolute mt-36 ml-2'><strong>Fresh Milk</strong></h3>
                    <div className='flex'>
                        <h3 className='absolute mt-44 text-green-700 ml-2'><strong>Rp 6,000</strong></h3>
                        <h5 className='absolute mt-[178px] ml-[89px] text-gray-400 text-xs '>/kg</h5>
                    </div>
                <h5 className='line-through absolute mt-[200px] text-[12px] text-gray-400 ml-2'>Rp 8,000</h5>
                <img className='absolute mt-[218px] ml-[120px]' src={mas} alt="" />
                </div>
            </div>
        </div>

        <div className='flex'>
            <div className='cartas mt-10 ml-10 rounded-lg'>
                <div className='relative'> 
                    <img className='absolute h-32 ml-4' src={lata} alt="" />
                    <img className='absolute ml-32 bg-gray-700 border-gray-700 rounded-md mt-2' src={like} alt="" />
                </div>
                <div className='relative'>
                <h3 className='absolute mt-36 ml-2'><strong>Fresh Soda</strong></h3>
                    <div className='flex'>
                        <h3 className='absolute mt-44 text-green-700 ml-2'><strong>Rp 18,000</strong></h3>
                        <h5 className='absolute mt-[178px] ml-[89px] text-gray-400 text-xs '>/kg</h5>
                    </div>
                <h5 className='line-through absolute mt-[200px] text-[12px] text-gray-400 ml-2'>Rp 21,000</h5>
                <img className='absolute mt-[218px] ml-[120px]' src={mas} alt="" />
                </div>
            </div>


            <div className='cartas mt-10 ml-10 rounded-lg'>
                <div className='relative'> 
                    <img className='absolute h-32 w-24 ml-8' src={spark} alt="" />
                    <img className='absolute ml-32 bg-gray-700 border-gray-700 rounded-md mt-2 mr-1' src={like} alt="" />
                </div>
                <div className='relative'>
                <h3 className='absolute mt-36 ml-2'><strong>Sparkling Water</strong></h3>
                    <div className='flex'>
                        <h3 className='absolute mt-44 text-green-700 ml-2'><strong>Rp 15,000</strong></h3>
                        <h5 className='absolute mt-[178px] ml-[89px] text-gray-400 text-xs '>/kg</h5>
                    </div>
                <h5 className='line-through absolute mt-[200px] text-[12px] text-gray-400 ml-2'>Rp 14,000</h5>
                <img className='absolute mt-[218px] ml-[120px]' src={mas} alt="" />
                </div>
            </div>
        </div>

    </div>
  )
}

export default Drinks