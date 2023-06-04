import { useTheme, Box, Drawer, Typography, IconButton } from '@mui/material';
import React from 'react';

import FlexBetween from './FlexBetween';
import { ChevronLeft } from '@mui/icons-material';

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
        <Box width="100%">
          <Box m="1.5rem 2rem 2rem 3rem">
            <FlexBetween>
              <Box>
                <Typography variant="h4" fontWeight="bold">
                  Ecommerce
                </Typography>
              </Box>
              <Box>
                {!isNonMobile && (
                  <IconButton>
                    <ChevronLeft />
                  </IconButton>
                )}
              </Box>
            </FlexBetween>
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Sidebar;
