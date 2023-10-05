import React from 'react'
import fondo from '../assets/background-layer2.jpg'
import Carrousel from './Carrousel'
const Hacemos = () => {
  return (
    <main className="bg-cover bg-center h-screen relative" style={{ backgroundImage: `url(${fondo})`}}>
    <div className="absolute inset-0 bg-black opacity-50"></div>
    <div className="absolute inset-0 flex mt-28 ml-5" >
      <div className="text-white ">
      <h1 className='text-5xl font-bold  mt-4 ml-32 mb-6'>Nosotros</h1>
        <p className=" text-3xl italic font-normal leading-34 tracking-tighter text-left mt-4 ml-32">Estudiamos y documentamos sobre el aspecto técnico de las soluciones de escalabilidad sobre Ethereum  </p>
      </div>

    </div>
    <Carrousel/>
  </main>
  )
}

export default Hacemos