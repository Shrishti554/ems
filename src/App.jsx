// import { useEffect } from "react";
import { useContext, useState } from "react";
import Login from "./components/Auth/Login"
// import { setLocalStorage} from "./utlis/localStorage"
import EmployeeDashBoard from "./components/Dashboard/EmployeeDashBoard"
import AdminDashboard from "./components/Dashboard/AdminDashboard"
import { AuthContext } from "./context/AuthProvider";
const App = () => {
  // useEffect(() => {
    // setLocalStorage()
 
   
  // }, )
  
  const [user, setUser] = useState(null)
  const [loggInUserData, setloggInUserData] = useState(null)
  
const authData=useContext(AuthContext)


// useEffect(() => {
// if(authData){
//    const loggedInUser= localStorage.getItem("loggedInUser")
//    if(loggedInUser){
//     setUser(loggedInUser.role)
//    }
// }
// }, [authData]);


const handleLogin =(email, password) =>{

  if(email=='admin@me.com' && password=='123'){
   setUser('admin')
   localStorage.setItem('loggedInuser' , JSON.stringify({role:'admin'}))
  }else if(authData  ){
    const employee =authData.employees.find((e)=> email ==e.email && e.password == password)
     if(employee){
       setUser('employee')
       setloggInUserData(employee)
      localStorage.setItem('loggedInuser' , JSON.stringify({role:'employee'}))
     }
  }
  else{
    alert("Invaild Credentials")
  }
}




return (
   
   <>
  {!user ?  <Login handleLogin={handleLogin} />: ''}
  {user == 'admin' ?  <AdminDashboard /> : <EmployeeDashBoard  data={loggInUserData}/>}
   
   </>
  )
}

export default App