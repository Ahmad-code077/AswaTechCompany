import { FaBarsStaggered } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import CtaButton from './CtaButton';
import { navLinks } from '../../data';
import { TiArrowSortedDown } from 'react-icons/ti';

const Navbar = () => {
  return (
    <header className='  w-full py-2  bg-gradient-to-r from-primary to-highlight shadow-md'>
      <nav className='container mx-auto px-4 py-2 flex items-center justify-between'>
        {/* Logo */}
        <div className='text-white font-bold text-xl'>Your Logo</div>

        {/* Navbar Links (visible on large screens) */}
        <ul className='hidden lg:flex space-x-6 text-white text-xl'>
          {navLinks.map((link, index) => (
            <li key={index} className='relative group'>
              <Link
                to={link.path}
                className='flex items-center px-4 py-2 hover:text-opacity-75 transition duration-300'
              >
                {link.name}
                {link.subLinks && (
                  <span className='ml-2'>
                    <TiArrowSortedDown />{' '}
                  </span>
                )}
              </Link>

              {/* Render sub-links if they exist */}
              {link.subLinks && (
                <ul
                  className='absolute left-0 bg-cardBackground p-4 rounded-md shadow-lg mt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                       transform scale-y-0 group-hover:scale-y-100 origin-top transition-all duration-500 ease-in-out'
                >
                  {link.subLinks.map((subLink, subIndex) => (
                    <li
                      key={subIndex}
                      className='block px-4 py-2 hover:bg-gray-100'
                    >
                      <Link to={subLink.path} className='text-gray-700'>
                        {subLink.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* CTA Button (Hidden on smaller screens) */}
        <div className='hidden lg:flex'>
          <CtaButton />
        </div>

        {/* Mobile Menu Icon (Visible on smaller screens) */}
        <FaBarsStaggered className='lg:hidden text-white text-2xl cursor-pointer' />
      </nav>
    </header>
  );
};

export default Navbar;
