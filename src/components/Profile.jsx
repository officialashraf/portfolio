import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import myimage from '../assets/img/pic.jpg'

const Profile = () => {
  return (
    <>
<div className='text-center justify-items-center'>
    <div className='mb-3'>
    <img src={myimage} alt='Portfolio' className='w-25 h-25 rounded-full border-gray-600 border-6' />
    </div>

        <h1 className='text-2xl font-bold'>Nafeesh Kurreshi</h1>
        <div className='flex gap-4 m-3 text-center justify-center cursor-pointer'>
            <div className='hover:bg-blue-400 p-2 rounded-full bg-gray-600'>
              <a href='https://github.com/nafeesh473' target='_blank' >
            <FaGithub/>
              </a>
            </div>
            <div className='hover:bg-blue-400 p-2 rounded-full bg-gray-600'>
              <a href='https://www.linkedin.com/in/nafeesh-kurreshi-a7a202250/' target='_blank' rel="noopener noreferrer">
            <FaLinkedin/>
              </a>
            </div>
            <div className='hover:bg-blue-400 p-2 rounded-full bg-gray-600'>
              <a href='https://www.facebook.com/NafeeshKurreshi/' target='_blank'>
            <FaFacebookSquare/>
              </a>
            </div>
            <div className='hover:bg-blue-400 p-2 rounded-full bg-gray-600'>
              <a href='https://www.instagram.com/mr_nafeesh_kurreshi_' target='_blank'>
            <BsInstagram/>
              </a>

            </div>
            

        </div>
</div>
    </>
    
  )
}

export default Profile
