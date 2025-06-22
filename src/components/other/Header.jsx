const Header = () => {
  return (
    <div className="flex bg-[#1C1C1C]  w-100 items-end justify-between ">
        <h1 className="text-2xl bg-[#1C1C1C] font-medium"> Hello <br /> <span className="text-3xl bg-[#1C1C1C] font-semibold ">Shrishti 👋</span> </h1>
        <button className="bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-medium">Log Out</button>
    </div>
  )
}

export default Header