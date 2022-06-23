import React from 'react';
import TodoItem from './../TodoItem';

const TodoList = ({todos,selectedTodoIndex,setSelectedTodoIndex}) => {
    return (
        <div>
            {
                todos.map((todo,index)=>(
                    <TodoItem 
                    key={index}
                    onClickItem={()=>{setSelectedTodoIndex(index)}}
                    isSelected={index===selectedTodoIndex}
                    >
                        {todo.title}
                    </TodoItem>
                ))
            }
        </div>
    );
};

export default TodoList;