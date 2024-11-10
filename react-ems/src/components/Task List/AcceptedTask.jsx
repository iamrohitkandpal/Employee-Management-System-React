import React from 'react'

const AcceptedTask = ({task}) => {
  return (
    <div className="flex-shrink-0 flex flex-col justify-between h-full w-[300px] bg-indigo-600 p-3 rounded-xl">
      <div>
        <div className="flex items-center justify-between">
          <h3 className="bg-red-600 px-3 py-1 rounded">High</h3>
          <h4 className="text-sm">30 October 2024</h4>
        </div>
        <h2 className="mt-5 text-xl font-semibold">Make some TypeScript Notes</h2>
        <p className="text-sm mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          tenetur illum natus quis ad autem!
        </p>
      </div>
      <div className='flex justify-between mt-5'>
        <button className='bg-green-500 py-1 px-2 rounded text-sm'>Completed</button>
        <button className='bg-red-500 py-1 px-2 rounded text-sm'>Failed</button>
      </div>
    </div>
  )
}

export default AcceptedTask;