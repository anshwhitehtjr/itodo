import React from 'react';

const Contact = () => {
    return (
        <>
            <div className="w-full">
                <div className="bg-gradient-to-b from-blue-800 to-blue-600 h-96"></div>
                <div className="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8 mb-12">
                    <div className="bg-white w-full shadow rounded p-8 sm:p-12 -mt-72">
                        <p className="text-3xl font-bold leading-7 text-center">Contact me</p>
                        <form action="" method="post">
                            <div className="md:flex items-center mt-8">
                                <div className="w-full flex flex-col">
                                    <label className="font-semibold leading-none">Email</label>
                                    <input type="email" className="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200" />
                                </div>
                            </div>
                            <div>
                                <div className="w-full flex flex-col mt-8">
                                    <label className="font-semibold leading-none">Message</label>
                                    <textarea type="text" className="h-40 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200"></textarea>
                                </div>
                            </div>
                            <div className="flex items-center justify-center w-full">
                                <button className="mt-9 font-semibold leading-none text-white py-4 px-10 bg-blue-700 rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none">
                                    Send message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
