import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { addTodoAsync } from './todoSlice';
import { TextField, Button, Box, CircularProgress } from '@mui/material';
import type { RootState } from '../../app/store';
import { useAppDispatch } from '../../app/hooks';

export default function AddTodoForm() {
    const [text, setText] = useState('');
    const dispatch = useAppDispatch();
    const loading = useSelector((state: RootState) => state.todos.loading);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (text.trim() === '') return;
        dispatch(addTodoAsync(text.trim()));
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
                disabled={loading}
            />
            <Button type="submit" variant="contained" color="primary" disabled={loading}>
                {loading ? <CircularProgress size={24} /> : 'Add'}
            </Button>
        </Box>
    );
}
