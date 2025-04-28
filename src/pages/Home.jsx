import React from 'react'
import mypic from '../assets/img/pic.jpg'

const Home = ({setOpen, open}) => {
  return (
    <>
    <section id='home' className='min-h-screen text-black flex flex-col md:flex-row justify-between items-center px-4 py-8' style={{backgroundColor:"#040B14" }}>
        <button onClick={()=>setOpen(!open)}  className=" top-4 fixed left-4 z-50  hover:bg-gray-900 text-white px-2 py-1 rounded">
            ☰
            </button>
      <div className=' flex flex-col items-center justify-center w-full text-white'>
        <p className='text-4xl font-bold animate-pulse transition-all duration-500 hover:scale-150 hover:animate-pulse'> Nafeesh Kurreshi</p>
        
        <p className='text-2xl mt-8  transition-all duration-500 hover:scale-150 hover:animate-bounce '> I am FullStack-Developer</p>
      </div>
      <div className=' w-full flex justify-center items-center '>
      <img src={mypic} alt='my-pic' className='h-100 w-100 shadow-xl/50  shadow-white rounded-full border-4 border-[#E1E1E2] object-fill max-w-sm mx-auto '/>
      </div>
      
    </section>
    </> 
  )
}

export default Home
