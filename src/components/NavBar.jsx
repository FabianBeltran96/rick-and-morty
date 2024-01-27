
import { Typography, AppBar, Box, Toolbar, IconButton } from '@mui/material';
import { Menu } from '@mui/icons-material';

import { useNavigate } from 'react-router-dom';


export default function NavBar() {
    return (
        <Box sx={{ flexGrow: 1 }} >
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 2 }}
                    >
                        <Menu />
                    </IconButton>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}

                    >
                        MUI
                    </Typography>

                </Toolbar>
            </AppBar>
        </Box>
    )
}