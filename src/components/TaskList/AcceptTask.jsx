const AcceptTask = ({data}) => {
   console.log(data)
  return (
       <div className=" flex-shrink-0  h-full  w-[400px] p-5 bg-red-400 rounded-xl">
           <div className="flex  bg-red-400 justify-between items-center">
              <h3 className="bg-red-600  text-sm px-3 py-1 rounded">{data.category}</h3>
              <h4 className="bg-red-400 text-sm">  {data.date}</h4>
           </div>
           <h2 className="bg-red-400 mt-5 text-2xl font-semibold">{data.title}</h2>
           <p className="text-sm bg-red-400 mt-2">
            {data.description} </p>
           <div className="flex justify-between mt-4">
              <button className="bg-green-500 py-1 px-2 text-sm">Mark as Completed</button>
              <button className="bg-red-500 py-1 px-2 text-sm">Mark as Failed</button>
           </div>

        </div>
        
  )
}
export default AcceptTask