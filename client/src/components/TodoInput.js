import React, { useState, useContext } from 'react'
import { useHttp } from '../hooks/http.hook'
import { authContext } from '../context/authContext'
// import { useTodo } from '../hooks/todos.hook'

export const TodoInput = (props) => {
    const { request } = useHttp()
    const [todoTitle, setTodoTitle] = useState('')
    const { userId } = useContext(authContext)


    const handleChange = (event) => {
        setTodoTitle(event.target.value)
    }

    const handleEnter = async (event) => {
        

        if (event.key == 'Enter') {
            const data = await request('/api/todos/add', 'POST', {title: todoTitle, userId})
            console.log(data.message)
            setTodoTitle('')
            props.setTodoList([...props.todoList, {id: data.todoItem.id, title: data.todoItem.title, active: false}])
        }
    }

    return (
        
        <div className="input-field col s6">
          <input id="last_name" type="text" className="validate" value={todoTitle} onChange={handleChange} onKeyPress={handleEnter}/>
          <label htmlFor="last_name">Add todo</label>
        </div>
    )
}