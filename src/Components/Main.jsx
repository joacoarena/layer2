import React from 'react'
 import fondo from '../assets/background-layer2.jpg'
 import logo from '../assets/logo.png'
const Main = () => {
  return (
    <main className="bg-cover bg-center  relative" style={{ backgroundImage: `url(${fondo})`}}>
    {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}
    {/* Contenido de tu página */}
    <div className="absolute inset-0 flex mt-28 ml-5 h-5/6" >
      <div className="text-white ">
        <img src={logo} alt=""  className='h-40  ml-16'/>
        <h2 className='mt-12 ml-32 text-3xl'>Comunidad dedicada al estudio de soluciones de escalabilidad en Ethereum</h2>
        <button class="bg-gray-800 hover:bg-gray-400 text-white font-bold p-3 px-8 text-center
        rounded mt-16 ml-32 h-16 ">
       <span>Mas informacion </span>
    </button>
      </div>
    </div>
  </main>
);

}

export default Main