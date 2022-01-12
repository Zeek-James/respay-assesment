import MuiDrawer from "@mui/material/Drawer";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { styled } from "@mui/material/styles";
import DashboardIcon from "@mui/icons-material/Dashboard";
import DescriptionIcon from "@mui/icons-material/Description";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import OtherHousesIcon from "@mui/icons-material/OtherHouses";
import ApartmentIcon from "@mui/icons-material/Apartment";
import PeopleIcon from "@mui/icons-material/People";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import RoomPreferencesIcon from "@mui/icons-material/RoomPreferences";
import EngineeringIcon from "@mui/icons-material/Engineering";
import React from "react";
import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const AppDrawer = ({ history, open, getOpen, setOpen }) => {
  const itemsList = [
    {
      text: "Dashboard",
      // onClick: () => history.push("/dashboard"),
      icon: <DashboardIcon />,
    },
    {
      text: "Properties",
      // onClick: () => history.push("/properties"),
      icon: <ApartmentIcon />,
    },

    {
      text: "Application",
      icon: <DescriptionIcon />,
    },
    {
      text: "Rent & Leases",
      icon: <OtherHousesIcon />,
    },
    {
      text: "Invoice & Payments",
      icon: <ReceiptLongIcon />,
    },
    {
      text: "Maintenance",
      icon: <EngineeringIcon />,
    },
    {
      text: "Facility Management",
      icon: <RoomPreferencesIcon />,
    },
    {
      text: "Visitors",
      icon: <PeopleIcon />,
    },
  ];
  const itemsList2 = [
    {
      text: "Roles",
      icon: <PersonAddAltIcon />,
    },
    {
      text: "Settings",
      icon: <SettingsOutlinedIcon />,
    },
    {
      text: "Log out",
      icon: <LogoutOutlinedIcon />,
    },
  ];
  const handleDrawerClose = () => {
    setOpen(false);
    getOpen(open);
  };

  return (
    <Drawer variant="permanent" open={open}>
      <Box
        sx={{
          backgroundColor: "#4c9f43",
          color: "#fff",
        }}
      >
        <DrawerHeader>
          <Typography sx={{ textAlign: "start", ml: 4 }} variant="h5">
            Respay
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </DrawerHeader>
        <List sx={{ mb: 1, mt: -1 }}>
          {itemsList.map((item, index) => {
            return (
              <ListItem button key={index} onClick={item.onClick}>
                <ListItemIcon sx={{ color: "#fff" }}>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} sx={{ color: "#fff" }} />
              </ListItem>
            );
          })}
        </List>
        <List>
          {itemsList2.map((item, index) => {
            return (
              <ListItem button key={index} onClick={item.onClick}>
                <ListItemIcon sx={{ color: "#fff" }}>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} sx={{ color: "#fff" }} />
              </ListItem>
            );
          })}
        </List>
      </Box>
    </Drawer>
  );
};

export default AppDrawer;
