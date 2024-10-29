import React from 'react'

const TaskList = () => {
  return (
    <div id='tasklist' className=' flex items-center justify-start gap-7 flex-nowrap h-[55%] py-5  overflow-x-auto w-full rounded-xl mt-10'>
        <div className='flex-shrink-0 h-full w-[300px] bg-red-400  p-3 rounded-xl'>
            <div className='flex items-center justify-between'>
                <h3 className='bg-red-600 px-3 py-1 rounded'>High</h3>
                <h4 className='text-sm'>30 October 2024</h4>
            </div>
            <h2 className='mt-5 text-xl font-semibold'>Make some TypeScript Notes</h2>
            <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis tenetur illum natus quis ad autem!</p>
        </div>
    </div>
  )
}

export default TaskList