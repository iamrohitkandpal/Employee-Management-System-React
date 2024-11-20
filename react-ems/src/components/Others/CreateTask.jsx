import React, { useState } from 'react'

const CreateTask = () => {

  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescripition, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [firstName, setFirstName] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    console.log("Task Completed");
  }

  return (
    <div className="p-5 bg-[#1c1c1c] mt-7 rounded-lg">
        <form onSubmit={(e)=>{
          submitHandler(e);
        }} className="flex w-full flex-wrap items-start justify-between">
          <div className="w-1/2">
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
              <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-4/5 py-1 px-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4" placeholder="Make a UI Design" />
            </div>
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
              <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-4/5 py-1 px-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4" type="date" />
            </div>
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Assign To</h3>
              <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-4/5 py-1 px-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4" type="text" placeholder="Employee Name" />
            </div>
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Piority</h3>
              <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-4/5 py-1 px-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected>Choose Priority</option>
                <option value="Low">Low</option>
                <option value="Mid">Medium</option>
                <option value="High">High</option>
                <option value="Urgent">Urgent</option>
              </select>
            </div>
            {/* <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Piority</h3>
              <input className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4" type="dropdown" placeholder="Design, Dev, etc" />
            </div> */}
          </div>

          <div className="w-2/5 flex flex-col items-start">
            <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
            <textarea name="" className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400" cols="30" rows="10"></textarea>
            <button className="transition-all duration-700 font-bold ease-in-out bg-sky-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full">Create Task</button>
          </div>
        </form>
      </div>
  )
}

export default CreateTask