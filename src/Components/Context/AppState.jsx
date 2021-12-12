import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import appContext from './appContext';

const AppState = (props) => {
    const host = "http://localhost:5000";
    const todoInitial = [];
    const [todos, setTodo] = useState(todoInitial);
    const history = useHistory();

    // Get All Todos
    const getAllTodos = async () => {
        // API Call
        if (!localStorage.getItem('token'))
        {
            return alert('please Login To Continue');
        }
        else
        {
            const response = await fetch(`http://localhost:5000/api/todos/fetchalltodos`, {
                method: 'GET',
                headers: {
                    "auth-token": localStorage.getItem('token')
                }
            });
            const json = await response.json();
            setTodo(json);
            console.log(json);
        }
    };

    // Adding A Todo
    const addTodo = async (title, desc) => {
        // API Call
        const res = await fetch(`${ host }/api/todos/addTodo`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.getItem('token')
            },
            body: JSON.stringify({ title, desc })
        });
        const newTodo = await res.json();
        setTodo(todos.concat(newTodo));
    };

    // Deleting A Todo
    const deleteTodo = async id => {
        // API Call
        const res = await fetch(`${ host }/api/todos/deletetodo/${ id }`, {
            method: 'DELETE',
            headers: {
                'auth-token': localStorage.getItem('token')
            }
        });
        const json = await res.json();
        const newTodos = todos.filter(todo => { return todo._id !== id; });
        setTodo(newTodos);
    };

    // Updating A Todo
    const editTodo = async (id, title, desc) => {
        // API Call
        const res = await fetch(`${ host }/api/todos/updatetodo/${ id }`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.getItem('token')
            },
            body: JSON.stringify({ title, desc })
        });
        const json = await res.json();
        let newTodos = JSON.parse(JSON.stringify(todos));
        // Logic To Edit Stuff from client
        for (let index = 0; index < newTodos.length; index++)
        {
            const element = newTodos[index];
            newTodos[index].title = title;
            newTodos[index].desc = desc;
            break;
        }
        setTodo(newTodos);
    };

    return (
        <appContext.Provider value={ { getAllTodos, todos, addTodo, deleteTodo, editTodo } }>
            { props.children }
        </appContext.Provider>
    );
};

export default AppState;
