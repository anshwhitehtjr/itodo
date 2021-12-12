import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

const Signup = () => {
    const [credentials, setCredentials] = useState({ name: "", email: "", password: "" });
    let history = useHistory();
    const { name, email, password } = credentials;

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/createuser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, password })
        });
        const json = await response.json();
        
        if (json)
        {
            console.log(json);
            history.push('/login');
        }
        // alert('User Created Successfully!')
    };

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    return (
        <>
            <div className="w-full">
                <div className="w-full">
                    <div className="bg-gradient-to-b from-blue-800 to-blue-600 h-96"></div>
                    <div className="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8 mb-12">
                        <div className="bg-white w-full shadow rounded p-8 sm:p-12 -mt-72">
                            <p className="text-3xl font-bold leading-7 text-center">Sign Up</p>
                            <p className="mt-4 text-1xl font-normal leading-7 text-center">Enter your credentials to get account</p>
                            <form onSubmit={ handleSubmit }>
                                <div className="flex flex-col gap-4 px-0 py-4">
                                    <div>
                                        <label className="text-gray-700">Name</label>
                                        <div className="font-medium text-1xl text-gray-600 absolute p-2.5 px-3 w-11">
                                            <i className="fad fa-file-signature"></i>
                                        </div>
                                        <input
                                            className="py-2 pl-10 border border-gray-200 w-full"
                                            placeholder="Your Name"
                                            type="text"
                                            name='name'
                                            value={ credentials.name }
                                            onChange={ onChange }
                                        />
                                    </div>
                                    <div>
                                        <label className="text-gray-700">Email address</label>
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            className="font-medium text-2xl text-gray-600 absolute p-2.5 px-3 w-11" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                        </svg>
                                        <input
                                            className="py-2 pl-10 border border-gray-200 w-full"
                                            placeholder="Email address"
                                            type="email"
                                            name='email'
                                            value={ credentials.email }
                                            onChange={ onChange }
                                        />
                                    </div>
                                    <div>
                                        <label className="text-gray-700">Password</label>
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            className="font-medium text-2xl text-gray-600 absolute p-2.5 px-3 w-11" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                        </svg>
                                        <input
                                            className="py-2 pl-10 border border-gray-200 w-full"
                                            placeholder="Password"
                                            type="password"
                                            name='password'
                                            value={ credentials.password }
                                            onChange={ onChange } />
                                    </div>
                                    <div className="w-full flex flex-row gap-2">
                                        <button className="border border-blue-500 hover:bg-blue-500 hover:text-white duration-100 ease-in-out w-6/12 text-blue-500 p-0 flex flex-row justify-center items-center gap-1"
                                            type="submit">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                                            </svg> Sign Up
                                        </button>
                                        <Link to='/login' className="border border-blue-500 hover:bg-blue-500 hover:text-white duration-100 ease-in-out w-6/12 text-blue-500 p-2 flex flex-row justify-center items-center gap-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                            </svg> Login
                                        </Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Signup;
