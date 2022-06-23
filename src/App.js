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
  const [selectedTodoIndex,setSelectedTodoIndex] = useState(0)
  return (
    <div className="App">
      <TodoTitleArea 
      todos={todos} 
      />
      <TodoContainer 
      todo={todos[selectedTodoIndex]} 
      setTodos={setTodos} 
      />
    </div>
  );
}

export default App;
