import React from "react";

const TaskNumber = ({ data }) => {
  return (
    <div className="flex screen mt-10 justify-between gap-5">
      <div className="rounded-xl px-10 py-12 w-[45%] bg-yellow-500">
        <h2 className="text-2xl font-semibold">{data.taskCounts.newTask}</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
      <div className="rounded-xl px-10 py-12 w-[45%] bg-emerald-500">
        <h2 className="text-2xl font-semibold">{data.taskCounts.completed}</h2>
        <h3 className="text-xl font-medium">Completed Task</h3>
      </div>
      <div className="rounded-xl px-10 py-12 w-[45%] bg-indigo-600">
        <h2 className="text-2xl font-semibold">{data.taskCounts.active}</h2>
        <h3 className="text-xl font-medium">Accepted Task</h3>
      </div>
      <div className="rounded-xl px-10 py-12 w-[45%] bg-red-500">
        <h2 className="text-2xl font-semibold">{data.taskCounts.failed}</h2>
        <h3 className="text-xl font-medium">Failed Task</h3>
      </div>
    </div>
  );
};

export default TaskNumber;

 