import {useState, useCallback, useEffect} from 'react'

const storageName = 'userData'


export const useAuth = () => {
    const [userId, setUserId] = useState(null)

    const login = useCallback((id, name) => {
        setUserId(id)
    
        localStorage.setItem(storageName, JSON.stringify({userId: id, name}))
    }, [])
    
    const logout = useCallback((id) => {
        setUserId(null)
        localStorage.removeItem(storageName)
    }, [])
    
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem(storageName))
    
        if (data && data.userId) {
            login(data.userId)
        }
    }, [login])
    return {userId, login, logout}
}
