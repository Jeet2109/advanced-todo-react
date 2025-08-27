import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './todoSlice';
import { TextField, Button, Box } from '@mui/material';

export default function AddTodoForm() {
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (text.trim() === '') return;
        dispatch(addTodo(text.trim()));
        setText('');
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', gap: 2, mb: 4 }}>
            <TextField
                label="Enter todo"
                variant="outlined"
                value={text}
                onChange={e => setText(e.target.value)}
                fullWidth
            />
            <Button type="submit" variant="contained" color="primary">
                Add
            </Button>
        </Box>
    );
}
