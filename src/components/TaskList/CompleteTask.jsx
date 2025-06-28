const CompleteTask = ({data}) => {
  return (
     <div className=" flex-shrink-0  h-full  w-[400px] p-5 bg-green-400 rounded-xl">
           <div className="flex  bg-green-400 justify-between items-center">
              <h3 className="bg-green-600  text-sm px-3 py-1 rounded">{data.category}</h3>
              <h4 className="bg-green-400 text-sm">{data.date}</h4>
           </div>
           <h2 className="bg-green-400 mt-5 text-2xl font-semibold">{data.title}</h2>
           <p className="text-sm bg-green-400 mt-2">
           {data.description} </p>
           <div className="mt-2">
            <button className="px-5  bg-green-700">Completed</button>

           </div>
        </div>
  )
}

export default CompleteTask