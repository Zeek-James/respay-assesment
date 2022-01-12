import { Badge, Box, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from "@mui/styles";
import NotificationsNoneSharpIcon from "@mui/icons-material/NotificationsNoneSharp";
import Avatar from "@mui/material/Avatar";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import MuiAppBar from "@mui/material/AppBar";
import { useSelector } from "react-redux";

const drawerWidth = 240;

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: 7,
    top: 7,
  },
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export const Navbar = ({ open, setOpen }) => {
  const { user } = useSelector((state) => state.authReducer);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  return (
    <div>
      <AppBar position="fixed" elevation={0} open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: "36px",
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            color="secondary"
            sx={{
              marginRight: "36px",
              ...(open && { display: "none" }),
            }}
            variant="h4"
          >
            Respay
          </Typography>
          <Box sx={{ flexGrow: 1 }} />

          <IconButton sx={{ mr: 5, color: "#4c9f43" }}>
            <StyledBadge color="warning" variant="dot">
              <NotificationsNoneSharpIcon />
            </StyledBadge>
          </IconButton>
          <Avatar alt="" src="" sx={{ width: 50, height: 50, mr: 3 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Box sx={{ mr: 1 }}>
              <Typography sx={{ color: "#000" }} variant="body2">
                {user
                  ? `
              ${user.firstname} ${user.lastname}
                `
                  : "Login"}
              </Typography>
              <Typography variant="caption">
                {user ? `${user.defaultRole}` : ""}
              </Typography>
            </Box>
            <IconButton sx={{ mr: 3 }}>
              {" "}
              <KeyboardArrowDownOutlinedIcon />{" "}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      ;
    </div>
  );
};
