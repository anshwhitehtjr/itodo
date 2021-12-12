import React, { useContext, useState } from 'react';
import appContext from './Context/appContext';

const AddTodo = () => {
    const context = useContext(appContext);
    const { addTodo } = context;
    const [todo, setTodo] = useState({ title: '', desc: '' });

    const handleClick = e => {
        e.preventDefault();
        addTodo(todo.title, todo.desc);
        setTodo({ title: '', desc: '' });
    };

    const onChange = e => {
        setTodo({ ...todo, [e.target.name]: e.target.value });
    };

    return (
        <div className="bg-white w-full shadow rounded p-8 sm:p-12 -mt-72">
            <p className="text-3xl font-bold leading-7 text-center">Add A Todo</p>
            <form>
                <div className="md:flex items-center mt-8">
                    <div className="w-full flex flex-col">
                        <label className="font-semibold leading-none">Title</label>
                        <input name='title' onChange={ onChange } value={ todo.title } type="text" className="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200" />
                    </div>
                </div>
                <div>
                    <div className="w-full flex flex-col mt-8">
                        <label className="font-semibold leading-none">Description</label>
                        <textarea name='desc' onChange={ onChange } value={ todo.desc } type="text" className="h-40 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200"></textarea>
                    </div>
                </div>
                <div className="flex items-center justify-center w-full">
                    <button onClick={ handleClick } className="mt-9 font-semibold leading-none text-white py-4 px-10 bg-blue-700 rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none">
                        Add Todo
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddTodo;
