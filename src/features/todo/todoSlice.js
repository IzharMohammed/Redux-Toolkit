import { createSlice, nanoid } from "@reduxjs/toolkit";

/*
1) Configure store
2) add slices
In slice, there are three things:
1 --> name
2 --> initialState
3 --> reducers --> (state, action)
We have to export 3 times to todoSlice
*/

// Initial state for the todo slice
const initialState = {
    todos: [{ id: 1, text: "Hello Redux" }]
}

// Create a todo slice using createSlice from Redux Toolkit
export const todoSlice = createSlice({
    name: 'todo', // Name of the slice
    initialState, // Initial state defined above
    reducers: {
        // Reducer function to add a new todo
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(), // Generate a unique ID using nanoid
                text: action.payload // Extract text from action payload
            }
            state.todos.push(todo); // Add the new todo to the todos array in state
        },
        // Reducer function to remove a todo by ID
        removeTodo: (state, action) => { 
            // Filter out the todo with the specified ID from todos array
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
        // Reducer function to edit a todo by ID
        editTodo: (state, action) => {
            const { id, text } = action.payload; // Extract ID and new text from action payload
            const editTodo = state.todos.find((todo) => todo.id === id); // Find the todo to edit
            if (editTodo) editTodo.text = text; // Update the text if todo is found
        }
    }
});

// Extract and export action creators from todoSlice
export const { addTodo, removeTodo, editTodo } = todoSlice.actions;

// Export the reducer function generated by createSlice
export default todoSlice.reducer;
