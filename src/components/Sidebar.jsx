import React from "react";
import {
  Drawer,
  Box,
  Toolbar,
  List,
  ListItem,
  ListItemButton,
  ListItemText
} from "@mui/material";

const drawerWidth=280;

function Sidebar() {
    return(
        <Drawer
        variant="permanent"
        sx={{
            width:drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper":{
                width:drawerWidth,
                boxSizing: "border-box",
            }
        }}>
            <Toolbar />
            <Box sx={{overflow:"auto"}}>
                <List>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemText primary="NewChat" />
                        </ListItemButton>

                    </ListItem>
                </List>
            </Box>
        </Drawer>
    );
}
export default Sidebar;