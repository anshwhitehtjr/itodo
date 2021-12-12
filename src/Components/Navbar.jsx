import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';

const Navbar = () => {
    let location = useLocation();
    let history = useHistory();

    const handleLogout = () => {
        localStorage.removeItem('token');
        history.push('/login');
    };

    return (
        <header className="lg:px-16 px-6 flex flex-wrap items-center lg:py-0 py-2">
            <div className="flex-1 flex justify-between items-center">
                <Link to="/">
                    <img id='navimg' src="./favicon.ico" alt="" />
                </Link>
            </div>
            <label htmlFor="menu-toggle" className="pointer-cursor lg:hidden block"><svg className="fill-current text-gray-900" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><title>menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path></svg></label>
            <input className="hidden" type="checkbox" id="menu-toggle" />

            <div className="hidden lg:flex lg:items-center lg:w-auto w-full" id="menu">
                <nav>
                    <ul className="lg:flex items-center justify-between text-base text-gray-700 pt-4 lg:pt-0">
                        <li>
                            {
                                location.pathname === '/'
                                    ? <Link className="lg:p-4 py-3 px-0 block border-b-2 border-transparent border-blue-400" to="/">Home</Link>
                                    : <Link className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-blue-400" to="/">Home</Link>
                            }
                        </li>
                        <li>
                            {
                                location.pathname === '/contact'
                                    ? <Link className="lg:p-4 py-3 px-0 block border-b-2 border-transparent border-blue-400" to="/contact">Contact</Link>
                                    : <Link className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-blue-400" to="/contact">Contact</Link>
                            }
                        </li>
                        <li>
                            {
                                location.pathname === '/about'
                                    ? <Link className="lg:p-4 py-3 px-0 block border-b-2 border-transparent border-blue-400" to="/about">About</Link>
                                    : <Link className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-blue-400" to="/about">About</Link>
                            }
                        </li>
                        {
                            localStorage.getItem('token') === null
                                ? <>
                                    <li>
                                        <Link role="button" to='/login' className="bg-blue-500 text-white px-6 py-2 rounded font-medium mx-3 hover:bg-blue-600 transition duration-200 each-in-out">Login</Link>
                                    </li>
                                    <li>
                                        <Link role="button" to='/signup' className="bg-blue-500 text-white px-6 py-2 rounded font-medium mx-3 hover:bg-blue-600 transition duration-200 each-in-out">Signup</Link>
                                    </li>
                                </>
                                : <button className='bg-blue-500 text-white px-6 py-2 rounded font-medium mx-3 hover:bg-blue-600 transition duration-200 each-in-out' onClick={ handleLogout } >Logout</button>
                        }
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
