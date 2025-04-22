import Logo from './assets/Logo.svg';

export default function NavBar() {
  const scrollToSection = (event, id) => {
    event.preventDefault();

    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black text-white py-0.1 shadow-md">
      <div className="flex flex-row items-center justify-between max-w-7xl px-8 mx-auto h-20">

        <div className="flex items-center space-x-4">
          <img src={Logo} alt="Logo" className="w-20 h-auto object-contain" />
          <a
            href="#home"
            onClick={(e) => scrollToSection(e, 'home')}
            className='text-white hover:text-color_logo1 transition cursor-pointer text-2xl font-bold'
          >
            Network Laboratory
          </a>
        </div>

        <ul className="flex space-x-6">
          <li className="text-lg font-medium">
            <a
              href="#SBD"
              onClick={(e) => scrollToSection(e, 'SBD')}
              className='text-white hover:text-color_sbd1 transition cursor-pointer'
            >
              SBD
            </a>
          </li>
          <li className="text-lg font-medium">
            <a
              href="#DMJ"
              onClick={(e) => scrollToSection(e, 'DMJ')}
              className='text-white hover:text-color_dmj1 transition cursor-pointer'
            >
              DMJ
            </a>
          </li>
          <li className="text-lg font-medium">
            <a
              href="#OS"
              onClick={(e) => scrollToSection(e, 'OS')}
              className='text-white hover:text-color_so1 transition cursor-pointer'
            >
              OS
            </a>
          </li>
        </ul>

      </div>
    </nav>
  );
}
