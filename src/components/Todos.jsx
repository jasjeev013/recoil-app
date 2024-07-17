import React, { useState } from 'react'
import { useRecoilState } from 'recoil'
import { todoState } from '../state/atoms/TodoState';
import Todo from './Todo';

const Todos = () => {

    const [todos,setTodos] = useRecoilState(todoState);
    const [inputText,setInputText] = useState('');

    const addTodo = () => {
        setTodos((prevTodos) => [...prevTodos, {id:Math.random(),text:inputText}])
        setInputText('')
    }

    const clearTodos = () =>{
        setTodos([]);
    }

  return (
    <div>
      <main>
      
        <input type="text" value={inputText} onInput={(e) => setInputText(e.target.value)}  id="todoInput" />
        <button onClick={addTodo}>Add Todos</button>
        <button onClick={clearTodos}>Clear Todos</button>
        {console.log(todos)}
        {
            todos.length!==0 && todos.map(todo => (
                <Todo key={todo.id} id ={todo.id} text = {todo.text}/>
            ))
        }
      </main>
    </div>
  )
}

export default Todos
