import React from 'react';
import TodoAddBtn from './../TodoAddBtn';
import TodoList from './../TodoList';

const TodoTitleArea= ({todos}) => {
    return (
        <div className='TodoTitleArea'>
            <h1>Planner</h1>
            <TodoList todos={todos}  />
            <TodoAddBtn />
        </div>
    );
};

export default TodoTitleArea;