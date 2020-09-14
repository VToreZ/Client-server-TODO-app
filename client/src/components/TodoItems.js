import { authContext } from '../context/authContext'
import React, { useContext, useEffect, useState, useCallback } from 'react'
import { useHttp } from '../hooks/http.hook'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'

export const TodoItems = (props) => {
    const {request} = useHttp()
    const auth = useContext(authContext)
    
    const fetchTodos = useCallback(async () => {
        const todos = await request('api/todos', 'POST', {userId: auth.userId})
        props.setTodoList(todos.todos)
    }, [auth.userId, request]) 
    
    const deleteTodo = async (event) => { 
        console.log(event.targe);
        const todos = await request('api/todos/delete', 'POST', {userId: auth.userId, id: event.currentTarget.dataset.id})
        console.log(todos.todos);
        props.setTodoList(todos.todos)
    }


    useEffect(() => {
        fetchTodos()
    }, [fetchTodos])
    
    if (!props.todoList.length) {
        return (
            <div class="row">
                <div className="col s12">
                    <div className="card-panel teal">
                        <span className="white-text">
                            Заданий пока нету, вы можете добавить их выше!
                        </span>
                    </div>
                </div>
            </div>
        )
    }


return (


    props.todoList.length && <div className='collection'>
        {
            props.todoList.map(
                (todo) => {
                    return (
                    <a key={todo.id} className='collection-item row'>
                        <span>
                            {todo.title}
                        </span>
                        <FontAwesomeIcon onClick={deleteTodo} data-id={todo.id} icon='times' size="lg" className='secondary-content' />
                    </a>
                    )
                }
            )
        }
        
    </div>
     
    
)
    // return(
    //     <div>aaa</div>
    // )
}