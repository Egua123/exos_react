import React from 'react'
import { useId } from 'react';
import { useState} from 'react'

function Todo() {
    const [todos, setTodos] = useState([])
    const [inputValue, setInputValue] = useState('')
    const uniqueId = useId();
    const handleSubmit = () => {
        setTodos(
            todos.concat ({

                text: inputValue,
                id: uniqueId
            })
        )
        
    }
    function removeTodo(id) {
        setTodos(todos.filter((todo) => todo.id !== id));
    }

  return (
    <div>
        < input 
        type = "text" 
        value = {inputValue} 
        placeholder='new input'
        onChange={(e) => setInputValue(e.target.value)} 
        />
        <button onClick={handleSubmit}>Add Todo</button>
        <ul>
            {todos.map((todo, id) => (
                <li key={todo.id}>
                    <span>{todo.text}</span>
                    <button onClick={() => removeTodo( todo.id)}>Delete</button>
                    </li>
            ))}
        </ul>
    </div>
  )
}

export default Todo
