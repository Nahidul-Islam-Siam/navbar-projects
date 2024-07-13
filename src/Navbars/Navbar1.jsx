import { useState } from 'react';

const Navbar1 = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Service", href: "#" },
    { name: "About", href: "#" },
    { name: "Contact", href: "#" },
    { name: "Blog's", href: "#" },
  ];

  return (
    <nav className="p-5 bg-white shadow md:flex md:items-center md:justify-between">
      <div className="flex justify-between items-center">
        <span className="text-2xl font-[Poppins] cursor-pointer">
          <img className="h-4 inline" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNhoXisDruJMDAq3Ltd-wuaMW2lGxck9wAKw&s" alt="" />
          tailwind
        </span>
        <span
          className="text-3xl cursor-pointer mx-2 md:hidden block"
          onClick={toggleMenu}
        >
          <ion-icon name={menuOpen ? "close" : "menu"}></ion-icon>
        </span>
      </div>
      <ul className={`md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 ${menuOpen ? 'opacity-100 top-[80px]' : 'opacity-0 top-[-400px]'} transition-all ease-in duration-500`}>
        {navLinks.map((link, index) => (
          <li key={index} className="mx-4 my-6 md:my-0">
            <a href={link.href} className="text-xl hover:text-cyan-500 duration-500" onClick={closeMenu}>
              {link.name}
            </a>
          </li>
        ))}
        <button className="bg-cyan-400 text-white font-[Poppins] duration-500 px-6 py-2 mx-4 hover:bg-cyan-500 rounded" onClick={closeMenu}>
          Get Started
        </button>
      </ul>
    </nav>
  );
};

export default Navbar1;
