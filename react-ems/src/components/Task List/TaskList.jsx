import React from 'react'

const TaskList = ({data}) => {
  return (
    <div id='tasklist' className=' flex items-center justify-start gap-7 flex-nowrap h-[55%] py-5  overflow-x-auto w-full rounded-xl mt-10'>
        {data.tasks.map(elem) => {
          if(elem.active){
            
          }
        }}
    </div>
  )
}

export default TaskList