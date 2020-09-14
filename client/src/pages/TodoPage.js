import React, { useContext, useEffect, useState, useCallback } from 'react'
import { TodoItems } from '../components/TodoItems'
import { TodoInput } from '../components/TodoInput'
import { authContext } from '../context/authContext'
import { useHttp } from '../hooks/http.hook'


export const TodoPage = () => {    

//     const {request} = useHttp()
//     const auth = useContext(authContext)
    const [todoList, setTodoList] = useState([])
    
//     const fetchTodos = useCallback(async () => {
//         const todos = await request('api/todos', 'POST', {userId: auth.userId})
//         setTodoList(todos)
//         console.log(todos);
//     }, [auth.userId, request]) 

//     const handle = () => {
//         console.log(todoList);
//     }

//     useEffect(() => {
//         fetchTodos()
//         console.log(todoList);
//     }, [fetchTodos])
    
    

    return (
        <div className="row">
            <div className="col s6 offset-s3">
                <h1>TodoPage</h1>
            </div>

            <div className="col s6 offset-s3">
                <TodoInput todoList={todoList} setTodoList={setTodoList} />
            </div>

            {/* <div className="divider"></div> */}

            <div className="col s8 offset-s2">
                <TodoItems todoList={todoList} setTodoList={setTodoList} />
            </div>

        </div>
    )
}