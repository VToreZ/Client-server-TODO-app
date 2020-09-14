import {createContext} from 'react'

const noop = () => {

}

export const authContext = createContext({
    userId: null,
    login: noop,
    logout: noop,
    isAuthenticated: false
})