import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../../app/store';
import { toggleTodo, deleteTodo } from './todoSlice';
import { List, ListItem, ListItemText, Checkbox, IconButton, ListItemSecondaryAction } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export default function TodoList() {
    const todos = useSelector((state: RootState) => state.todos.todos);
    const dispatch = useDispatch();

    if (todos.length === 0) {
        return <p>No todos yet</p>;
    }

    return (
        <List>
            {todos.map(todo => (
                <ListItem key={todo.id} disablePadding>
                    <Checkbox
                        edge="start"
                        checked={todo.completed}
                        tabIndex={-1}
                        disableRipple
                        onChange={() => dispatch(toggleTodo(todo.id))}
                    />
                    <ListItemText
                        primary={todo.text}
                        sx={{ textDecoration: todo.completed ? 'line-through' : 'none', color: todo.completed ? 'text.secondary' : 'text.primary' }}
                    />
                    <ListItemSecondaryAction>
                        <IconButton edge="end" aria-label="delete" onClick={() => dispatch(deleteTodo(todo.id))}>
                            <DeleteIcon />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
            ))}
        </List>
    );
}
