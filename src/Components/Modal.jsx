import React, { useContext, useState } from "react";
import appContext from "./Context/appContext";

export default function Modal (props) {
    const [showModal, setShowModal] = React.useState(false);
    const context = useContext(appContext);
    const { todo, editTodo } = context;
    const [etodo, setETodo] = useState({ id: "", etitle: "", edesc: "" });
    // let id = todo.map(e => { return e._id; });
    // let title = todo.map(e => { return e.title; });
    // let desc = todo.map(e => { return e.desc; });

    const updateTodo = (e) => {
        setShowModal(true);
        setETodo({ id: e.id, etitle: e.title, edesc: e.desc });
    };

    const handleClick = e => {
        e.preventDefault();
        editTodo(etodo.id, etodo.etitle, etodo.edesc);
        setShowModal(false);
    };

    const onChange = (e) => {
        setETodo({ ...etodo, [e.target.name]: e.target.value });
    };

    return (
        <>
            <button onClick={ () => updateTodo(props.todo) }>
                <i className="far fa-pen-square" style={ { padding: '10px 31px' } }></i>
            </button>
            {
                showModal ? (
                    <>
                        <div
                            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                        >
                            <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                {/*content*/ }
                                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                    {/*header*/ }
                                    <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                        <p className="text-3xl font-bold leading-7 text-center">Edit This Todo</p>
                                        <button
                                            className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                            onClick={ () => setShowModal(false) }
                                        >
                                        </button>
                                    </div>
                                    {/*body*/ }
                                    <div className="relative p-6 flex-auto">
                                        <form action="">
                                            <div className="md:flex items-center mt-8">
                                                <div className="w-full flex flex-col">
                                                    <label className="font-semibold leading-none">Title</label>
                                                    <input type="text" name='etitle' onChange={ onChange } value={ etodo.etitle } className="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="w-full flex flex-col mt-8">
                                                    <label className="font-semibold leading-none">Description</label>
                                                    <textarea type="text" name='edesc' onChange={ onChange } value={ etodo.edesc } className="h-40 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200"></textarea>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-center w-full">
                                                <button className="mt-9 font-semibold leading-none text-white py-4 px-10 bg-blue-700 rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none" onClick={ handleClick }>
                                                    Save Changes
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                    {/*footer*/ }
                                    <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                        <button
                                            className="mt-9 mx-40 font-semibold leading-none text-white py-4 px-10 bg-blue-700 rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none"
                                            type="button"
                                            onClick={ () => setShowModal(false) }
                                        >
                                            Close
                                        </button>
                                        {/* <button
                                        className="mt-9 mx-5 font-semibold leading-none text-white py-4 px-10 bg-blue-700 rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none"
                                        type="button"
                                        onClick={ () => setShowModal(false) }
                                    >
                                        Save Changes
                                    </button> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    </>
                ) : null }
        </>
    );
}