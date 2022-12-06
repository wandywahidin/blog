import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='flex items-center justify-center h-[100vh] bg-lightGreen flex-col'>
        <h1 className='font-bold text-white text-4xl my-4'>Login</h1>
        <form className='flex flex-col px-8 py-10 bg-white gap-5 w-[30%] rounded-xl shadow-lg'>
            <input required className=' focus:outline-lightGreen p-3 border-b border-gray-400' type="text" placeholder='username' />
            <input required className=' focus:outline-lightGreen p-3 border-b border-gray-400' type="password" placeholder='password'/>
            <button className='p-3 bg-yellowGood cursor-pointer text-white rounded-xl text-xl'>Login</button>
            <p className="text-red-500 text-sm text-center">error</p>
            <span className='text-sm text-center'>Don't you have an account? <Link to='/register' className=' text-lightGreen'>Register</Link></span>
        </form>
    </div>
  )
}

export default Login