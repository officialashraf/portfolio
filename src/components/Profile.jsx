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
            <FaGithub/>
            </div>
            <div className='hover:bg-blue-400 p-2 rounded-full bg-gray-600'>
            <FaLinkedin/>
            </div>
            <div className='hover:bg-blue-400 p-2 rounded-full bg-gray-600'>
            <FaFacebookSquare/>
            </div>
            <div className='hover:bg-blue-400 p-2 rounded-full bg-gray-600'>
            <BsInstagram/>

            </div>
            

        </div>
</div>
    </>
    
  )
}

export default Profile
