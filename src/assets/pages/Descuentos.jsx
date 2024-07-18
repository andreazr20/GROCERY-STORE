import React from 'react'
import lupa from '../img/lupa.png'
import logo from '../img/logo.png'
import sobre from '../img/sobre.png'
import campana from '../img/campana.png'
import location from '../img/location.png'
import flechaabajo from '../img/flechaabajo.png'
import verdurapromo1 from '../img/verdurapromo1.png'
import bolita2 from '../img/bolita-amarilla.png'
import verdura1 from '../img/verdura1.png'
import verdura2 from '../img/verdura2.png'
import verdura3 from '../img/verdura3.png'
import verdura4 from '../img/verdura4.png'
import verdura5 from '../img/verdura5.png'
import fondoverdura from '../img/fondoverdura.png'
import linea from '../img/linea.png'
import home from '../img/home.png'
import like from '../img/like.png'
import carrito from '../img/carrito.png'
import usuario from '../img/usuario.png'
import flechaderecha from '../img/flechaderecha.png'
import verdura99 from '../img/verdura99.png'
import verdura100 from '../img/verdura100.png'
import verdura101 from '../img/verdura101.png'
import { Link } from 'react-router-dom'



const Descuentos = () => {

    return (
        <div>
            <div className='bolita'>
                <div className='p-14'>
                    <img className='ml-24 w-36' src={logo} alt="" />

                    <div className='flex mt-3 ml-[-25px]'>

                        <div className='flex relative'>
                            <img className='absolute mt-[10px] ml-2' src={lupa} alt="" />
                            <input className='w-[310px] ml h-10 rounded-lg text-sm' type="text" placeholder='         Search for fruits, vegetables, groce...' />
                        </div>


                        <img className='w-6 h-6 mt-2 ml-4' src={sobre} alt="" />
                        <img className='w-6 h-6 mt-2 mr-[-35px] ml-3' src={campana} alt="" />
                    </div>
                </div>

                <div className='flex mt-[-30px] w-[95%] ml-3'>
                    <img className='w-4 h-5 mr-2 ml-3' src={location} alt="" />
                    <h3 className='text-white text-sm' >Sent to <strong>Pamulang Barat Residence No.5, RT 05/ ...</strong></h3>
                    <img className='w-4 h-5' src={flechaabajo} alt="" />
                </div>



                {/* CAROUSEL DESCUENTOS */}
                <div>

                    <div id="carouselExampleCaptions" className="carousel slide mt-9 w-96 ml-6 rounded-3xl carousel2">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner rounded-3xl">
                            <div className="carousel-item active relative">
                                <img className='absolute w-[50%] ml-52' src={bolita2} alt="" />
                                <img src={verdurapromo1} className='d-block w-56 ml-40 relative' alt="" />
                                <div className="carousel-caption ml-[-40px] w-40">

                                    <div className='relative text-yellow-300'>
                                        <h3 className='mt-[71px] absolute ml-[46px]'>Discount</h3>
                                        <h1 className='text-[60px] absolute mt-[1px] ml-[16px]'>25%</h1>
                                    </div>

                                    <h1 className='text-[60px]'>25%</h1>
                                    <h3>Discount</h3>
                                    <h5 className='text-[14px] mb-2'>All vegetables and fruits.</h5>
                                    <button className='boton-amarillo text-black text-[12px] w-24 h-5 p-1 rounded-2xl'>See Datail</button>
                                </div>
                            </div>
                            <div className="carousel-item relative">
                                <img className='absolute w-[50%] ml-52' src={bolita2} alt="" />
                                <img src={verdurapromo1} className='d-block w-56 ml-40 relative' alt="" />
                                <div className="carousel-caption ml-[-40px] w-40">

                                    <div className='relative text-yellow-300'>
                                        <h3 className='mt-[71px] absolute ml-[46px]'>Discount</h3>
                                        <h1 className='text-[60px] absolute mt-[1px] ml-[16px]'>25%</h1>
                                    </div>

                                    <h1 className='text-[60px]'>25%</h1>
                                    <h3>Discount</h3>
                                    <h5 className='text-[14px] mb-2'>All vegetables and fruits.</h5>
                                    <button className='boton-amarillo text-black text-[12px] w-24 h-5 p-1 rounded-2xl'>See Datail</button>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>


                </div>
            </div>



                {/* CATEGORIA DE ALIMENTOS EN LA APP */}
                <div className='flex gap-7 mt-20 ml-5 w-16 h-16'>
                
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
                    <Link to={'/Verduras'} className='ml-[-3%]'>Vegetables</Link>
                    <Link to={'/Frutas'}>Fruits</Link>
                    <Link to={'/Meat'} className='text-center'>Meat <br /> and Eggs</Link>
                    <Link to={'/Drinks'} className='ml-2'>Drinks</Link>
                    <Link to={'/Bake'} className='text-center'>Baker</Link>
                </div>

                <div>
                   <img className='h-[1.5px] mt-9 w-[430px]' src={linea.png} alt="" /> 
                </div>

                {/* NAVBAR PARTE BAJA DE LA APP */}
                <div className='flex fixed justify-center bottom-0 w-screen gap-20 border border-gray-400 rounded-xl h-16 p-3'>
                    <img src={home} alt="" />
                    <img src={like} alt="" />
                    <img src={carrito} alt="" />
                    <img src={usuario} alt="" />
                </div>


                {/* SPECIAL DEAL DIV */}
                <div>
                    <div className='flex mt-3'>
                        <h2 className='text-[140%] mr-20 ml-11'><strong>Special deal</strong></h2>
                        <div className='flex w-[40%]'>
                            <Link to={'/Verduras'} className='text-green-700 ml-14'>See more</Link>
                            <img src={flechaderecha} alt="" />
                        </div>
                    </div>

                    <div className='flex mt-3 gap-6 ml-5'>
                        <img className='w-40' src={verdura100} alt="" />
                        <img className='w-40' src={verdura99} alt="" />
                        <img className='w-16' src={verdura101} alt="" />
                    </div>
                </div>
        </div>
    )
}

export default Descuentos