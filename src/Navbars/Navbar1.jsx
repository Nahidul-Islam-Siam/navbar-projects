

const Navbar1 = () => {
    return (
     
           <nav className="p-5 bg-white shadow md:flex md:items-center md:justify-between">
        <div>
            <span className="text-2xl font-[Poppins] cursor-pointer">
                <img className="h-4 inline " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNhoXisDruJMDAq3Ltd-wuaMW2lGxck9wAKw&s" alt="" />

tailwind
            </span>
        </div>
        <ul className="md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500">
            <li className="mx-4 my-6 md:my-0">
                <a href="#" className="text-xl hover:text-cyan-500 duration-500">Home</a>
            </li>
            <li className="mx-4 my-6 md:my-0">
                <a href="#" className="text-xl hover:text-cyan-500 duration-500">Service</a>
            </li>
            <li className="mx-4 my-6 md:my-0">
                <a href="#" className="text-xl hover:text-cyan-500 duration-500">About</a>
            </li>
            <li className="mx-4 my-6 md:my-0">
                <a href="#" className="text-xl hover:text-cyan-500 duration-500">Contact</a>
            </li>
            <li className="mx-4 my-6 md:my-0">
                <a href="#" className="text-xl hover:text-cyan-500 duration-500">Blog&lsquo;s</a>
            </li>
            <button className="bg-cyan-400 text-white font-[Poppins] duration-500 px-6 py-2 mx-4 hover:bg-cyan-500 rounded">
                Get Started
            </button>
        </ul>
           </nav>
  
    );
};

export default Navbar1;