import React from 'react'
import fondo from '../assets/background-layer2.jpg'
import Formcodigo from './Formcodigo'

const Form = () => {
  return <>
     <main className="bg-cover bg-center relative" style={{ backgroundImage: `url(${fondo})`}}>
     <div className="absolute inset-0 bg-slate-900 opacity-20"></div>
   <div className='flex justify-center  items-center  h-5/6'>
<Formcodigo/>
</div>
  </main>
  </>
}

export default Form