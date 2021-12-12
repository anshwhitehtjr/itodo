import React from 'react';

const About = () => {
    return (
        <>
            <div className="w-full">
                <div className="bg-gradient-to-b from-blue-800 to-blue-600 h-96">
                    <section className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12'>
                        <div className="bg-white rounded-lg p-6">
                            <div className="flex items-center space-x-6 mb-4">
                                <img className="h-28 w-28 object-cover object-center rounded-full"
                                    src={ `https://avatars.githubusercontent.com/u/69585432?s=40&v=4` } alt="photo" />
                                <div>
                                    <p className="text-xl text-gray-700 font-normal mb-1">DarkLordDev</p>
                                    <p className="text-base text-blue-600 font-normal">Web Developer</p>
                                </div>
                            </div>
                            <div>
                                <p className="text-gray-400 leading-loose font-normal text-base">Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="w-full">
                    <div className="container mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
                            <div className="max-h-96 md:h-screen">
                                <img className="w-screen h-screen object-cover object-top" src="https://images.pexels.com/photos/270373/pexels-photo-270373.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                            </div>
                            <div className="flex bg-gray-100 p-10">
                                <div className="mb-auto mt-auto max-w-lg">
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
