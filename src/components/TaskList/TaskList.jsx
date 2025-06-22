const TaskList = () => {
  return (
    <div  id='tasklist' className="h-[52%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap bg-[#1C1C1C] w-full py-5 mt-10">
        <div className=" flex-shrink-0  h-full  w-[400px] p-5 bg-red-400 rounded-xl">
           <div className="flex  bg-red-400 justify-between items-center">
              <h3 className="bg-red-600  text-sm px-3 py-1 rounded">High</h3>
              <h4 className="bg-red-400 text-sm"> 22 June 2025</h4>
           </div>
           <h2 className="bg-red-400 mt-5 text-2xl font-semibold">Make ems project</h2>
           <p className="text-sm bg-red-400 mt-2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error, beatae tempora? Tenetur alias quaerat numquam.
           </p>
        </div>
        

        <div className=" flex-shrink-0  h-full  w-[400px] p-5 bg-blue-400 rounded-xl">
           <div className="flex  bg-blue-400 justify-between items-center">
              <h3 className="bg-blue-600  text-sm px-3 py-1 rounded">High</h3>
              <h4 className="bg-blue-400 text-sm"> 22 June 2025</h4>
           </div>
           <h2 className="bg-blue-400 mt-5 text-2xl font-semibold">Make ems project</h2>
           <p className="text-sm bg-blue-400 mt-2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error, beatae tempora? Tenetur alias quaerat numquam.
           </p>
        </div>
        
        <div className=" flex-shrink-0  h-full  w-[400px] p-5 bg-green-400 rounded-xl">
           <div className="flex  bg-green-400 justify-between items-center">
              <h3 className="bg-green-600  text-sm px-3 py-1 rounded">High</h3>
              <h4 className="bg-green-400 text-sm"> 22 June 2025</h4>
           </div>
           <h2 className="bg-green-400 mt-5 text-2xl font-semibold">Make ems project</h2>
           <p className="text-sm bg-green-400 mt-2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error, beatae tempora? Tenetur alias quaerat numquam.
           </p>
        </div>

        <div className=" flex-shrink-0  h-full  w-[400px] p-5 bg-yellow-400 rounded-xl">
           <div className="flex  bg-yellow-400 justify-between items-center">
              <h3 className="bg-yellow-600  text-sm px-3 py-1 rounded">High</h3>
              <h4 className="bg-yellow-400 text-sm"> 22 June 2025</h4>
           </div>
           <h2 className="bg-yellow-400 mt-5 text-2xl font-semibold">Make ems project</h2>
           <p className="text-sm bg-yellow-400 mt-2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error, beatae tempora? Tenetur alias quaerat numquam.
           </p>
        </div>
    </div>
  )
}

export default TaskList