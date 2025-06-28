// import { useState } from "react"
const Header = (props) => {
    // const [username, setusername] = useState('')
     
    // if(!data){
    //   setusername('Admin')
    // }else{
    //   setusername(data.firstName)
    // }

   const logOutUser = ()=>{
       localStorage.setItem('loggedInUser' , '')
       props.changeUser('')
      
   }

   

  return (
    <div className="flex   w-100 items-end justify-between ">
        <h1 className="text-2xl  font-medium"> Hello <br /> <span className="text-3xl  font-semibold ">userName 👋</span> </h1>
        <button 
        onClick={logOutUser}
        className="bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-medium">Log Out</button>
    </div>
  )
}

export default Header