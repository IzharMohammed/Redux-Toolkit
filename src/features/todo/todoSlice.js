import { createSlice, nanoid } from "@reduxjs/toolkit";
/*
In slice there are three things 
1 --> name 
2 --> initialState
3 --> reducers --> (state,action)

We have to export 3 times to todoSlice 
*/

const initialState = {
    todos: [{ id: 1, text: "Hello Redux" }]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => { 
            state.todos = state.todos.filter((todo)=>todo.id!==action.payload)
        },
        EditTodo: (state, action) => {
            const{id , text} = action.payload;
            console.log(id , text);
 //      let editTodo= state.todos.filter((todo)=>todo.id === id )
           const editTodo = state.todos.find((todo) => todo.id === id);
           console.log(editTodo);
           console.log(editTodo.text);

           if(editTodo) editTodo.text=text
         }
    }
})

export const {addTodo,removeTodo,EditTodo} = todoSlice.actions

export default todoSlice.reducer