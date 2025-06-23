// import { useEffect } from "react";
import { useState } from "react";
import Login from "./components/Auth/Login"
// import { setLocalStorage} from "./utlis/localStorage"
import EmployeeDashBoard from "./components/Dashboard/EmployeeDashBoard"
import AdminDashboard from "./components/Dashboard/AdminDashboard"
const App = () => {
  // useEffect(() => {
    // setLocalStorage()
 
   
  // }, )
  
  const [user, setUser] = useState(null)

const handleLogin =(email, password) =>{
  if(email=='admin@me.com' && password=='123'){
   setUser('admin')
   console.log(user)
  }else if(email=='user@me.com' && password=='123'){
     setUser('employee')
     console.log(user)
  }
  else{
    alert("Invaild Credentials")
  }
}


return (
   
   <>
  {!user ?  <Login handleLogin={handleLogin} />: ''}
  {user == 'admin' ?  <AdminDashboard /> : <EmployeeDashBoard />}
   
   </>
  )
}

export default App