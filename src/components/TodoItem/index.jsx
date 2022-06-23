import React from 'react';
import './index.css';

const TodoItem = ({children,onClickItem,isSelected}) => {
    console.log(children)
    return (
        <div onClick={onClickItem} className={isSelected ? 'TodoItem active' : 'TodoItem' }> 
             {children}
             <button className='TodoItem__deleteBtn'>Del</button>
        </div>
    );
};

export default TodoItem;