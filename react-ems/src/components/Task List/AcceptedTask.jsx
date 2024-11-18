import React from 'react'

const AcceptedTask = ({data}) => {
  let color;
  if(data.priority === "Urgent"){
    color = 'bg-red-700'
  } else if(data.priority === "High"){
    color = 'bg-red-500'
  } else if(data.priority === "Mid"){
    color = 'bg-yellow-600'
  } else {
    color = 'bg-emerald-600'
  }
  
  return (
    <div className="flex-shrink-0 flex flex-col justify-between h-full w-[300px] bg-zinc-700 p-3 border-b-8 border-sky-500 rounded-xl">
      <div>
        <div className="flex items-center justify-between">
        <h3 className={`${color} px-3 py-1 rounded`}>{data.priority}</h3>
          <h4 className="text-sm">{data.taskDate}</h4>
        </div>
        <h2 className="mt-5 text-xl font-semibold">{data.taskTitle}</h2>
        <p className="text-sm mt-2">
        {data.taskDescription}
        </p>
      </div>
      <div className='flex justify-between mt-5'>
        <button className='bg-green-600 py-1 px-2 rounded text-sm'>Completed</button>
        <button className='bg-red-500 py-1 px-2 rounded text-sm'>Failed</button>
      </div>
    </div>
  )
}

export default AcceptedTask;