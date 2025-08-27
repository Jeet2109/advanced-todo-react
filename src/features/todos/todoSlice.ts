import {
  createSlice,
  createAsyncThunk,
  type PayloadAction,
} from "@reduxjs/toolkit";
import type { Todo } from "./types";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const addTodoAsync = createAsyncThunk(
  "todos/addTodoAsync",
  async (text: string) => {
    await delay(500); // simulate network delay
    return text;
  }
);

export const toggleTodoAsync = createAsyncThunk(
  "todos/toggleTodoAsync",
  async (id: string) => {
    await delay(300);
    return id;
  }
);

interface TodosState {
  todos: Todo[];
  loading: boolean;
  error: string | null;
}

const initialState: TodosState = {
  todos: [],
  loading: false,
  error: null,
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    deleteTodo(state, action: PayloadAction<string>) {
      state.todos = state.todos.filter((t) => t.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addTodoAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addTodoAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.todos.push({
          id: crypto.randomUUID(),
          text: action.payload,
          completed: false,
        });
      })
      .addCase(addTodoAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Failed to add todo";
      })
      .addCase(toggleTodoAsync.fulfilled, (state, action) => {
        const todo = state.todos.find((t) => t.id === action.payload);
        if (todo) todo.completed = !todo.completed;
      });
  },
});

export const { deleteTodo } = todosSlice.actions;
export default todosSlice.reducer;
