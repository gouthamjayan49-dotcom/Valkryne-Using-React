import React from "react";
import { AppBar, Toolbar, Typography, IconButton, Avatar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Topbar = () => {
    return (
        <AppBar
            position="fixed"
            sx={{
                ml: '240px',
                width: 'calc(100% - 240px)',
                backgroundColor: 'rgba(15, 23, 42, 0.8)',
                backdropFilter: 'blur(12px)',
                borderBottom: '1px solid',
                borderColor: 'divider',
                boxShadow: 'none',
            }}
        >
            <Toolbar>
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography
                    variant="h6"
                    component="div"
                    color="inherit"
                    sx={{ flexGrow: 1 }}
                >
                    Valkryne
                </Typography>
                <Avatar alt="Admin" src="" />
            </Toolbar>
        </AppBar>
    );
};

export default Topbar;
