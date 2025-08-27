import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../app/store';
import { toggleTodoAsync, deleteTodo } from './todoSlice';
import { List, ListItem, Checkbox, IconButton, ListItemText, ListItemSecondaryAction } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import type { Todo } from './types';
import { useAppDispatch } from '../../app/hooks';

const TodoItem = React.memo(({ todo }: { todo: Todo }) => {
    const dispatch = useAppDispatch();

    const handleToggle = useCallback(() => {
        dispatch(toggleTodoAsync(todo.id));
    }, [dispatch, todo.id]);

    const handleDelete = useCallback(() => {
        dispatch(deleteTodo(todo.id));
    }, [dispatch, todo.id]);

    return (
        <ListItem disablePadding>
            <Checkbox
                edge="start"
                checked={todo.completed}
                tabIndex={-1}
                disableRipple
                onChange={handleToggle}
            />
            <ListItemText
                primary={todo.text}
                sx={{
                    textDecoration: todo.completed ? 'line-through' : 'none',
                    color: todo.completed ? 'text.secondary' : 'text.primary',
                }}
            />
            <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete" onClick={handleDelete}>
                    <DeleteIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    );
});

export default React.memo(function TodoList() {
    const todos = useSelector((state: RootState) => state.todos.todos);

    if (todos.length === 0) return <p>No todos yet</p>;

    return (
        <List>
            {todos.map(todo => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </List>
    );
});
