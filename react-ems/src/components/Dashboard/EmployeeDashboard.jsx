import React from 'react'
import Header from './../Others/Header';
import TaskNumber from './../Others/TaskNumber';
import TaskList from './../Task List/TaskList';

const EmployeeDashboard = () => {
  return (
    <>
        <div className='p-10 bg-[#1C1C1C] h-screen'>
            <Header />
            <TaskNumber />
            <TaskList />
        </div>
    </>
  )
}

export default EmployeeDashboard