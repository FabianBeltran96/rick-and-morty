import React, { useState } from 'react';
import { Typography, AppBar, Box, Toolbar, IconButton, TextField } from '@mui/material';
import { Menu, SortByAlpha } from '@mui/icons-material';

function NavBar({ onSearch, onSort }) {
    const [search, setSearch] = useState('');

    const handleSearchChange = (event) => {
        setSearch(event.target.value);
        if (onSearch) {
            onSearch(event.target.value);
        }
    };

    return (
        <AppBar position="fixed">
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                    <Menu />
                </IconButton>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    Rick and Morty
                </Typography>
                <IconButton color="inherit" onClick={onSort}>
                    <SortByAlpha />
                </IconButton>
                <TextField
                    variant="outlined"
                    size="small"
                    value={search}
                    onChange={handleSearchChange}
                    sx={{ bgcolor: 'white', borderRadius: 1 }}
                />

            </Toolbar>
        </AppBar>
    )
}

export default NavBar;