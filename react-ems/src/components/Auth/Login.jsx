import React from 'react'

const Login = () => {
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 rounded-xl border-emerald-600 p-20'>
            <form action="" className='flex flex-col items-center justify-center '>
                <input className='border-2 border-emerald-600 outline-none bg-transparent rounded-full text-xl py-3 px-5 placeholder:text-gray-100' type="email" placeholder='Enter Your Email' />
                <input type="password" className='border-2 border-emerald-600 outline-none bg-transparent rounded-full text-xl py-3 px-5 mt-2 placeholder:text-gray-100' placeholder='Enter Your Password' />
                <button className='border-none text-white border-emerald-600 outline-none bg-emerald-600 rounded-full text-xl py-3 px-16 mt-5 placeholder:text-white'>Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login;