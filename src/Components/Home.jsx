import React, { useContext } from 'react';
import AddTodo from './AddTodo';
import appContext from './Context/appContext';
import Todo from './Todo';

const Home = () => {
    const context = useContext(appContext);
    // const {todos ,get}

    return (
        <>
            <Todo />
        </>
    );
};

export default Home;
