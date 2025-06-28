import { useEffect } from "react";
import { useContext, useState } from "react";
import Login from "./components/Auth/Login"
import { setLocalStorage} from "./utlis/localStorage"
import EmployeeDashBoard from "./components/Dashboard/EmployeeDashBoard"
import AdminDashboard from "./components/Dashboard/AdminDashboard"
import { AuthContext } from "./context/AuthProvider";
const App = () => {

  const [user, setUser] = useState(null)
  const [loggInUserData, setloggInUserData] = useState(null)
   const [userData,SetUserData] = useContext(AuthContext)



useEffect(()=>{
    const loggedInUser = localStorage.getItem('loggedInUser')
    
    if(loggedInUser){
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUserData(userData.data)
    }

  },[])


const handleLogin =(email, password) =>{

  if(email=='admin@me.com' && password=='123'){
   setUser('admin')
   localStorage.setItem('loggedInUser' , JSON.stringify({role:'admin'}))
  }else if(authData && authData.employees ){
    const employee =authData.employees.find((e)=> email ==e.email && e.password == password)
     if(employee){
       setUser('employee')
       setloggInUserData(employee)
      localStorage.setItem('loggedInuser' , JSON.stringify({role:'employee' , data:employee}))
     }
  }
  else{
    alert("Invaild Credentials")
  }
}; 

return (
   
   <>
  {!user ?  <Login handleLogin={ handleLogin } />: ''}
  {user == 'admin' ?  <AdminDashboard changeUser={setUser} /> : (user == 'employee' ?  <EmployeeDashBoard changeUser={setUser} data={loggInUserData}/> : null)}
   
   </>
  )
};
export default App
