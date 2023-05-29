import { useTheme, Box, Drawer } from '@mui/material';
import React from 'react';

const Sidebar = ({
  user,
  drawerWidth,
  isSidebarOpen,
  setIsSidebarOpen,
  isNonMobile,
}) => {
  const theme = useTheme();
  console.log('drawerWidth: ', drawerWidth);
  return (
    <Box component="nav">
      <Drawer
        open={isSidebarOpen}
        variant="persistent"
        anchor="left"
        sx={{
          width: drawerWidth,
          '& .MuiDrawer-paper': {
            color: theme.palette.secondary[200],
            backgroundColor: theme.palette.background.alt,
            boxSixing: 'border-box',
            borderWidth: isNonMobile ? 0 : '2px',
            width: drawerWidth,
          },
        }}
      >
        Holis
      </Drawer>
    </Box>
  );
};

export default Sidebar;
