const TaskListNumber = ({data}) => {
  return (
    <div className="flex bg-[#1C1C1C] mt-10 justify-between gap-2 screen ">

        <div className=" w-[45%] rounded-xl  py-6 px-9 bg-red-400 ">
            <h2 className=" text-2xl bg-red-400 font-semibold">{data.taskNumbers.newTask}</h2>
            <h3 className="text-xl bg-red-400 font-medium">New Task</h3>
        </div>
         <div className="w-[45%] rounded-xl  py-6 px-9 bg-blue-400 ">
            <h2 className=" text-2xl bg-blue-400 font-semibold">{data.taskNumbers.completed}</h2>
            <h3 className="text-xl bg-blue-400 font-medium">Completed Task</h3>
        </div>
         <div className=" w-[45%] rounded-xl  py-6 px-9 bg-green-400 ">
            <h2 className=" text-2xl bg-green-400 font-semibold">{data.taskNumbers.active}</h2>
            <h3 className="text-xl bg-green-400 font-medium">Accepted Task</h3>
        </div>
         <div className=" w-[45%] rounded-xl  py-6 px-9 bg-yellow-400 ">
            <h2 className=" text-2xl bg-yellow-400 font-semibold">{data.taskNumbers.failed}</h2>
            <h3 className="text-xl bg-yellow-400 font-medium">Failed Task</h3>
        </div>
       
    </div>
  )
}

export default TaskListNumber