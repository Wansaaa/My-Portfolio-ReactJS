import { useEffect, useState } from 'react';

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    const newTheme = theme == 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.classList.toggle('light', newTheme == 'light');
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setActive(true);
      } else {
        setActive(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header>
      <div className="navbar py-7 flex items-center justify-between">
        <div className="logo">
          <h1 className="text-3xl font-bold bg-white text-black light:bg-black light:text-white p-1 md:bg-transparent md:text-white light:md:bg-transparent light:md:text-black">Portfolio</h1>
        </div>
        <ul
          className={`menu flex items-center sm:gap-10 gap-4 md:static fixed left-1/2 -translate-x-1/2 md:translate-0 md:opacity-100 bg-white/30 light:bg-black/30 light:md:bg-transparent  backdrop-blur-md p-4 rounded-br-2xl rounded-bl-2xl md:bg-transparent transition-all md:transition-none  z-40 ${active ? 'top-0 opacity-100' : '-top-10 opacity-0'}`}
        >
          <li>
            <a href="#home" className="sm:text-lg text-base font-medium">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="sm:text-lg text-base font-medium">
              About{' '}
            </a>
          </li>
          <li>
            <a href="#project" className="sm:text-lg text-base font-medium">
              Project
            </a>
          </li>
          <li>
            <a href="#contact" className="sm:text-lg text-base font-medium">
              Contact
            </a>
          </li>
        </ul>
        <button className="text-2xl ml-4 cursor-pointer" onClick={toggleTheme}>
          {theme == 'light' ? <i className="ri-sun-line"></i> : <i className="ri-moon-line"></i>}
        </button>
      </div>
      {/* <div className={theme == 'dark' ? 'bg-white w-80 h-80' : 'bg-dark w-80 h-80'}>
        <h1 className="text-black light:text-white">Hello World</h1>
      </div> */}
    </header>
  );
};

export default Navbar;
