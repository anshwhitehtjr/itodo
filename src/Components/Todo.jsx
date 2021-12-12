import React, { useContext, useEffect, useState } from 'react';
import AddTodo from './AddTodo';
import appContext from './Context/appContext';
import TodoItem from './TodoItem';
import { useHistory } from 'react-router-dom';

const Todo = () => {
    const context = useContext(appContext);
    const { getAllTodos, todos, editTodo } = context;
    let history = useHistory();

    useEffect(() => {
        if (localStorage.getItem('token'))
        {
            getAllTodos();
        }
        else
        {
            history.push('/login');
            alert('Please Login to Continue');
        }
        // eslint-disable-next-line
    }, []);
    const [show, setshow] = useState(false);
    const [todo, setTodo] = useState({
        id: "",
        etitle: "",
        edesc: ""
    });

    const updateTodo = currentTodo => {
        setshow(true);
        setTodo({
            id: currentTodo._id,
            etitle: currentTodo.title,
            edesc: currentTodo.desc
        });
    };

    const handleClick = e => {
        e.preventDefault();
        editTodo(todo.id, todo.etitle, todo.edesc);
        setshow(false);
    };

    const onChange = e => {
        setTodo({ ...todo, [e.target.name]: e.target.value });
    };

    return (
        <>
            <div className="w-full">
                <div className="w-full">
                    <div className="bg-gradient-to-b from-blue-800 to-blue-600 h-96" />
                    <div className="max-w-5xl mx-auto my-10 px-6 sm:px-6 lg:px-8 mb-12">
                        <AddTodo />
                        {
                            show
                                ?
                                <>
                                    <div className="main-modal fixed w-full h-100 inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster"
                                        style={ { background: 'rgba(0, 0, 0, .7)' } }>
                                        <div
                                            className="border border-teal-500 shadow-lg modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
                                            <div className="modal-content py-4 text-left px-6">
                                                {/* <!--Title--> */ }
                                                <div className="flex justify-between items-center pb-3">
                                                    <p className="text-2xl font-bold">Edit This Todo</p>
                                                    <div className="modal-close cursor-pointer z-50">
                                                        <svg className="fill-current text-black" onClick={ () => setshow(false) } xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                                                            viewBox="0 0 18 18">
                                                            <path
                                                                d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z">
                                                            </path>
                                                        </svg>
                                                    </div>
                                                </div>
                                                {/* <!--Body--> */ }
                                                <div className="my-5">
                                                    <form>
                                                        <div className="md:flex items-center mt-8">
                                                            <div className="w-full flex flex-col">
                                                                <label className="font-semibold leading-none">Title</label>
                                                                <input name='etitle' onChange={ onChange } value={ todo.etitle } type="text" className="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200" />
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="w-full flex flex-col mt-8">
                                                                <label className="font-semibold leading-none">Description</label>
                                                                <textarea name='edesc' onChange={ onChange } value={ todo.edesc } type="text" className="h-40 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200"></textarea>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-center justify-center w-full">
                                                            <button
                                                                onClick={ handleClick }
                                                                className="mt-9 mx-5 font-semibold leading-none text-white py-4 px-10 bg-blue-700 rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none">
                                                                Save Changes
                                                            </button>
                                                            <button
                                                                onClick={ () => setshow(false) }
                                                                className="mt-9 mx-5 font-semibold leading-none text-white py-4 px-10 bg-blue-700 rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none">
                                                                Cancel
                                                            </button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                                : null
                        }

                        <p className="text-3xl font-bold leading-7 mt-10 text-center">Your Todos</p>
                        <section className="gap-6 container px-6 py-4 mx-auto">
                            {
                                todos.length > 0
                                    ? todos.map(e => {
                                        return <TodoItem key={ e._id } title={ e.title } desc={ e.desc } todo={ e } updateTodo={ updateTodo } />;
                                    })
                                    : <p className="mt-4 text-1xl font-normal leading-7 text-center">You Don't Have Any Notes Yet</p>
                            }
                        </section>
                    </div>
                </div>
            </div >
        </>
    );
};

export default Todo;
