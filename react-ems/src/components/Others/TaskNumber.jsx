import React from 'react'

const TaskNumber = () => {
  return (
    <div className='flex screen mt-10 justify-between gap-5'>
        <div className='rounded-xl px-10 py-12 w-[45%] bg-red-500'>
            <h2 className='text-2xl font-semibold'>0</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className='rounded-xl px-10 py-12 w-[45%] bg-emerald-500'>
            <h2 className='text-2xl font-semibold'>0</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className='rounded-xl px-10 py-12 w-[45%] bg-cyan-500'>
            <h2 className='text-2xl font-semibold'>0</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className='rounded-xl px-10 py-12 w-[45%] bg-violet-500'>
            <h2 className='text-2xl font-semibold'>0</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
    </div>
  ) 
}

export default TaskNumber