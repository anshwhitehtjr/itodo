import React, { useContext, useEffect, useState } from 'react';
import appContext from './Context/appContext';

const TodoItem = (props) => {
    const context = useContext(appContext);
    const { deleteTodo } = context;
    const { todo, updateTodo } = props;

    const handleDelete = () => {
        deleteTodo(todo._id);
    };

    return (
        <div className="mb-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex items-center p-4 bg-white border-2 border-gray-200 rounded-lg shadow-sm dark:bg-gray-800">
                <div className="p-3 mr-4 rounded-full">
                    <div>
                        <div className="group cursor-pointer relative inline-block border-gray-400 w-10 text-center">
                            <i onClick={ handleDelete } className="far fa-times-square" style={ { padding: '10px 31px' } } />
                            <div className="opacity-0 bg-black text-white text-center text-xs rounded-lg py-3 absolute group-hover:opacity-100 bottom-full pointer-events-none" style={ { padding: '10px 20px' } } >
                                Delete
                                <svg className="absolute text-black h-2 w-full left-0 top-full" x="0px" y="0px" viewBox="0 0 255 255" xmlSpace="preserve">
                                    <polygon className="fill-current" points="0,0 127.5,127.5 255,0" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="group cursor-pointer relative inline-block border-gray-400 w-10 text-center">
                            <i className="far fa-pen-square" onClick={ () => updateTodo(todo) } style={ { padding: '10px 31px' } } />
                            <div className="opacity-0 bg-black text-white text-center text-xs rounded-lg py-3 absolute group-hover:opacity-100 bottom-full pointer-events-none" style={ { padding: '10px 20px' } } >
                                Update
                                <svg className="absolute text-black h-2 w-full left-0 top-full" x="0px" y="0px" viewBox="0 0 255 255" xmlSpace="preserve">
                                    <polygon className="fill-current" points="0,0 127.5,127.5 255,0" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <p className="mb-2 text-sm font-medium text-gray-900">{ props.title }</p>
                    <p className="text-sm font-normal text-gray-800">{ props.desc }</p>
                </div>
            </div>
        </div>
    );
};

export default TodoItem;
