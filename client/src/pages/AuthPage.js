import React, {useState, useContext} from 'react'
import { useHttp } from '../hooks/http.hook'
import { authContext } from '../context/authContext'

export const AuthPage = () => {
    const auth = useContext(authContext)
    const {loading, error, request} = useHttp()
    const [form, setForm] = useState({
        name: ''
    })

    const changeHandler = event => {
        setForm({ ...form, name: event.target.value})
    }

    const registerHandler = async () => {
        try {
            const data = await request('/api/login', 'POST', {...form})
            auth.login(data.userId, data.name)
            console.log('data', data);
        } catch {
            
        }
    }

    return (
        <div className="row">
            <div className="col s6 offset-s3">
                <h1>AuthPage</h1>
                
                <div className="card blue darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">Авторизация</span>
                        <div>
                        
                            <div className="input-field">
                                <input 
                                onChange={changeHandler}
                                placeholder="Введите Логин" 
                                id="userName" 
                                type="text"
                                name="name"
                                className="white-text"
                                />
                                <label htmlFor="first_name">First Name</label>
                            </div>

                        </div>
                    </div>
                    <div className="card-action">
                        <button className="btn yellow darken-4" onClick={registerHandler} disabled={loading}>Войти</button>
                    </div>
                </div>
                    
            </div>
        </div>
    )
}