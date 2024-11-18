import React from "react";

const TaskNumber = ({ data }) => {
  return (
    <div className="flex screen mt-10 justify-between gap-5">
      <div className="rounded-xl px-10 py-12 pb-10 border-b-8 border-yellow-500 w-[45%] bg-zinc-700">
        <h2 className="text-2xl font-semibold">{data.taskCounts.newTask}</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
      <div className="rounded-xl px-10 py-12 pb-10 border-b-8 border-emerald-500 w-[45%] bg-zinc-700">
        <h2 className="text-2xl font-semibold">{data.taskCounts.completed}</h2>
        <h3 className="text-xl font-medium">Completed Task</h3>
      </div>
      <div className="rounded-xl px-10 py-12 pb-10 border-b-8 border-sky-500 w-[45%] bg-zinc-700">
        <h2 className="text-2xl font-semibold">{data.taskCounts.active}</h2>
        <h3 className="text-xl font-medium">Accepted Task</h3>
      </div>
      <div className="rounded-xl px-10 py-12 pb-10 border-b-8 border-red-500 w-[45%] bg-zinc-700">
        <h2 className="text-2xl font-semibold">{data.taskCounts.failed}</h2>
        <h3 className="text-xl font-medium">Failed Task</h3>
      </div>
    </div>
  );
};

export default TaskNumber;

 