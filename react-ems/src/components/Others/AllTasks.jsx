import React, { useContext } from "react";
import { AuthContext } from "./../../context/AuthProvider";

const AllTasks = () => {
  const authData = useContext(AuthContext);
  console.log(authData);
  
  return (
    <div className="bg-[#1c1c1c] p-6 rounded-lg mt-5">
      <div className="bg-zinc-700 rounded-md py-2 px-4 flex justify-between items-center">
        <h2 className="text-lg font-medium w-1/5">Employee Name</h2>
        <h3 className="text-lg font-medium w-1/5">New Task</h3>
        <h3 className="text-lg font-medium w-1/5">Accepted Task</h3>
        <h3 className="text-lg font-medium w-1/5">Completed Task</h3>
        <h3 className="text-lg font-medium w-1/5">Failed Task</h3>
      </div>

      <div className="overflow-auto">
          {authData[0].employees.map(function (elem, index) {
            return (
              <div key={index} className="bg-zinc-600 rounded-md mt-4 py-2 px-4 flex justify-between items-center">
                <h2 className="text-lg font-medium w-1/5">{elem.firstName}</h2>
                <h3 className="text-lg font-medium w-1/5">{elem.taskCounts.newTask}</h3>
                <h5 className="text-lg font-medium w-1/5">{elem.taskCounts.active}</h5>
                <h5 className="text-lg font-medium w-1/5">{elem.taskCounts.completed}</h5>
                <h5 className="text-lg font-medium w-1/5">{elem.taskCounts.failed}</h5>
              </div> 
            );
          })}
      </div>
    </div>
  );
};

export default AllTasks;
