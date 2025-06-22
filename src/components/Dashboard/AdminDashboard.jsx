import Header from "../other/Header"

const AdminDashboard = () => {
  return (
  <div className=" bg-[#1C1C1C] h-screen w-full p-10">
    <Header />

    <div className=" bg-[#1C1C1C]">
        <form className=" flex w-full flex-wrap bg-red-300 items-start justify-between" >
            <div className="w-1/2">
                  <div>
                       <h3>Task Title</h3>
                        <input  type="text"  placeholder="Make a UI design"/>
                  </div>
           
                <div>
                       <h3>Date</h3>
                       <input type="date" />
                 </div>

                 <div>
                     <h3>Assign to</h3>
                     <input type="text"  placeholder="Employee Name"/>
                 </div>

                <div>
                     <h3>Category</h3>
                     <input type="text" placeholder="Design , Dev etc" />
                </div>

            </div>

           <div className="w-1/2">
                 <h3 >Description</h3>
                 <textarea name="" id="">  </textarea>
           </div>

            <button>Create Task</button>

        </form>
    </div>
  </div>
    
  )
}

export default AdminDashboard