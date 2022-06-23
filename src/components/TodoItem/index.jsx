import React from 'react';

const TodoItem = ({children,onClickItem}) => {
    console.log(children)
    return (
        <div>
            <div onClick={onClickItem}>
             {children}
            </div>
        </div>
    );
};

export default TodoItem;