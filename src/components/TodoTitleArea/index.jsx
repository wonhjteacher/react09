import React from 'react';
import TodoAddBtn from './../TodoAddBtn';
import TodoList from './../TodoList';
import './index.css'
const TodoTitleArea= ({todos,setSelectedTodoIndex,selectedTodoIndex,addTodo}) => {
    return (
        <div className='TodoTitleArea'>
            <h1>Planner</h1>
            <TodoList 
             todos={todos} 
             setSelectedTodoIndex={setSelectedTodoIndex}
             selectedTodoIndex={selectedTodoIndex}
             />
            <TodoAddBtn 
            onClick={addTodo} 
            />
        </div>
    );
};

export default TodoTitleArea;