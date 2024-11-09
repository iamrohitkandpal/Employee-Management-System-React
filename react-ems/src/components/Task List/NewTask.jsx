import React from "react";

const NewTask = () => {
  return (
    <div className="flex-shrink-0 h-full w-[300px] bg-red-400  p-3 rounded-xl">
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
  );
};

export default NewTask;
