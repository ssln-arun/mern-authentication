// import { Navbar, Nav, Container, NavDropdown, Badge } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useLogoutMutation } from '../slices/usersApiSlice';
import { logout } from '../slices/authSlice';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { userInfo } = useSelector((state) => state.auth);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };


  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate('/login');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <header className='bg-gray-700 text-white'>
      <nav className='container mx-auto flex justify-between items-center p-4'>
        <Link to='/' className='text-xl font-bold'>
          MERN Authentication
        </Link>
        <div>
          {userInfo ? (
            <div className='relative inline-block'>
              <button
                onClick={toggleDropdown}
                className="flex items-end focus:outline-none font-medium"
              >
                {userInfo.name}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className={`ml-1 w-4 h-4 transition-transform duration-200 ${
                    dropdownOpen ? 'rotate-180' : ''
                  }`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </button>
              {dropdownOpen && (
                <div className='absolute right-0 bg-white text-black mt-2 rounded shadow z-10'>
                  <Link
                    to='/profile'
                    onClick={closeDropdown}
                    className='block px-4 py-2 hover:bg-gray-200'
                  >
                    Profile
                  </Link>
                  <button
                    onClick={() => {
                      logoutHandler();
                      closeDropdown();
                    }}
                    className='block w-full text-left px-4 py-2 hover:bg-gray-200'
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className='flex gap-4'>
              <Link to='/login' className='flex items-center gap-1'>
                Sign In
              </Link>
              <Link to='/register' className='flex items-center gap-1'>
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
