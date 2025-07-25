import { useState } from "react"
const Login = ({handleLogin}) => {

 

const [email, setEmail] = useState('')
const [password, setPassword] = useState('')


const submitHandler=(e)=>{
    e.preventDefault()
    handleLogin(email,password)
     setEmail('')
     setPassword('')

}

  return (
    <div className="flex  h-screen w-screen items-center justify-center">
      <div className="border-2 border-emerald-600  rounded-xl p-20">
        <form  
        onSubmit={(e)=>{
            submitHandler(e)
        }}
        className="flex flex-col items-center justify-center ">
            <input 
            value={email}
            onChange={(e)=>{
                setEmail(e.target.value)
            }}
            required className=" text-black  outline-none border-2 border-emerald-600 rounded-full text-xl placeholder:text-grey-400 py-2 px-4"  type="email"  placeholder="Enter your email"/>
            <input
             value={password}
            onChange={(e)=>{
                setPassword(e.target.value)
            }}
            required className=" text-black  outline-none border-2 border-emerald-600 rounded-full text-xl mt-3 placeholder:text-grey-400 py-2 px-4" type="password" placeholder="Enter your password" />
            <button className=" text-white  outline-none border-none bg-emerald-600 rounded-full text-xl mt-3 placeholder:text-white py-2 px-4">Log in</button>
        </form>
      </div>
    </div>
  )
}

export default Login