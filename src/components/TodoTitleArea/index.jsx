import React from 'react';
import TodoAddBtn from './../TodoAddBtn';
import TodoList from './../TodoList';

const TodoTitleArea= ({todos,setSelectedTodoIndex,selectedTodoIndex}) => {
    return (
        <div className='TodoTitleArea'>
            <h1>Planner</h1>
            <TodoList 
             todos={todos} 
             setSelectedTodoIndex={setSelectedTodoIndex}
             selectedTodoIndex={selectedTodoIndex}
             />
            <TodoAddBtn />
        </div>
    );
};

export default TodoTitleArea;