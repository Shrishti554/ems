import Header from "../other/Header"
import TaskListNumber from "../other/TaskListNumber"
import TaskList from "../TaskList/TaskList"

const EmployeeDashBoard = (props) => {
 
  return (
    <div className="p-10 bg-[#1C1C1C] h-screen">
       <Header changeUser={props.chnageUser} data ={props.data}/>
       <TaskListNumber  data ={props.data}/>
       <TaskList data ={props.data} />
    </div>
  )
}




export default EmployeeDashBoard