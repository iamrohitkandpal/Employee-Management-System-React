import React from 'react'
import AcceptedTask from './AcceptedTask'
import NewTask from './NewTask'
import CompletedTask from './CompletedTask';
import FailedTask from './FailedTask';

const TaskList = ({data}) => {
  return (
    <div id='tasklist' className=' flex items-center justify-start gap-7 flex-nowrap h-[55%] py-5  overflow-x-auto w-full rounded-xl mt-10'>
        {data.tasks.map((task) => {
          if(task.active && !task.newTask){
            return <AcceptedTask data={task}/>
          }
          if(task.newTask){
            return <NewTask data={task}/>
          }
          if(task.completed){
            return <CompletedTask data={task}/>
          }
          if(task.failed){
            return <FailedTask data={task}/>
          }
        })}
    </div>
  )
}

export default TaskList