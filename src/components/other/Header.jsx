const Header = ({data}) => {

  console.loh(data)
  return (
    <div className="flex   w-100 items-end justify-between ">
        <h1 className="text-2xl  font-medium"> Hello <br /> <span className="text-3xl  font-semibold ">Shrishti 👋</span> </h1>
        <button className="bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-medium">Log Out</button>
    </div>
  )
}

export default Header