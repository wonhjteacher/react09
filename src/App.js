import './App.css';
import { useState } from 'react';
import TodoContainer from './components/TodoContainer'
import TodoTitleArea from './components/TodoTitleArea'

function App() {
  const [todos,setTodos] = useState([
    {
      title:'아침5기상' , 
      content:'오늘은 아침 일찍 일어나서 정신이 맑을 때 새벽 공부를 해야지',
    },
    {
      title:'점심 1시' , 
      content:'점심은 만칼로리 섭취',
    }
   ])
  const [selectedTodoIndex,setSelectedTodoIndex] = useState(0);
   
  const setTodo = (newTodo) => { //새로적은 값으로 todos 를 교체 
    const newTodos  = [...todos]; // todos가 훼손되지 않도록 복사 새로운 newTodos 배열이 생긴것  
    newTodos[selectedTodoIndex] = newTodo  ;
    setTodos(newTodos);  
  }
  return (
    <div className="App">
      <TodoTitleArea 
      todos={todos} 
      setSelectedTodoIndex={setSelectedTodoIndex}
      selectedTodoIndex={selectedTodoIndex} 
      />
      <TodoContainer 
      todo={todos[selectedTodoIndex]} 
      setTodo={setTodo} 
      />
    </div>
  );
}

export default App;
