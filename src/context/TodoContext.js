import {createContext, useContext} from 'react'

export const TodoContext = 
// context
createContext({
    todos: [
        {
            id: 1,
            todo: "To do message",
            completed: false,
        }
    ],
    // functionality
    addTodo: (todo) => {},
    updatedTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})

export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider