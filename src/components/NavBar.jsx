import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, TextField, Badge, Box } from '@mui/material';
import { SortByAlpha, Home, Favorite } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

function NavBar({ onSearch, onSort, favoriteCount }) {
    const [search, setSearch] = useState('');
    const navigate = useNavigate();

    const handleSearchChange = (event) => {
        setSearch(event.target.value);
        if (onSearch) {
            onSearch(event.target.value);
        }
    };

    const handleGoHome = () => {
        navigate('/');
    };

    return (
        <AppBar position="fixed">
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="home" onClick={handleGoHome}>
                    <Home />
                </IconButton>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    Rick and Morty
                </Typography>
                <Box sx={{ flexGrow: 1 }} />
                <TextField
                    variant="outlined"
                    size="small"
                    value={search}
                    onChange={handleSearchChange}
                    sx={{ bgcolor: 'white', flexGrow: 2, borderRadius: 1 }}
                />
                <Box sx={{ flexGrow: 1 }} />
                <IconButton color="inherit" onClick={onSort}>
                    <SortByAlpha />
                </IconButton>
                <Badge badgeContent={favoriteCount} color="secondary" sx={{ ml: 2 }}>
                    <Favorite />
                </Badge>
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;
