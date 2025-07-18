import AcceptTask from "./AcceptTask"
import CompleteTask from "./CompleteTask"
import FailedTask from "./FailedTask"
import NewTask from "./NewTask"

const TaskList = ({data}) => {
  return (
    <div  id='tasklist' className="h-[52%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap bg-[#1C1C1C] w-full py-5 mt-10">
       {data.tasks.map((elem ,idx)=>{
         if(elem.active){
            return <AcceptTask key={idx}  data={elem}/>
         }
         if(elem.newTasks){
            return <NewTask key={idx}  data={elem} />
         }
          if(elem.completed){
            return <CompleteTask key={idx}  data={elem}/>
         }
          if(elem.failed){
            return <FailedTask key={idx} data={elem}  />
         }
       })}
    
    </div>
  )
}

export default TaskList