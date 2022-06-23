import React from 'react';
import './index.css'
const TodoContainer = ({todo,setTodo}) => {
    return (
        <div className='TodoContainer'>
           <div>
                <input type="text" 
                className='TodoContainer__title' 
                value={todo.title}  
                onChange={(e)=>{
                    setTodo({
                        ...todo,
                        title: e.target.value,
                    })
                }}
                />
           </div>
           <div>
                <textarea 
                className='TodoContainer__body' 
                value={todo.content}
                onChange={(e)=>{
                    setTodo({
                        ...todo,
                        content:e.target.value,
                    })
                }}>
                </textarea>
           </div>
        </div>
    );
};

export default TodoContainer;