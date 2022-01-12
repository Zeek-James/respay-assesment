import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect } from "react";
import { styled } from "@mui/material/styles";
import { Box, createTheme, ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Properties from "./components/Properties";
import { Residential } from "./components/Residential";
import { Navbar } from "./components/Navbar";
import AppDrawer from "./components/AppDrawer";
import { grey } from "@mui/material/colors";
import { login } from "./action/authAction";
import { getProperties } from "./action/propertiesAction";
import { useDispatch } from "react-redux";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

export default function App() {
  const dispatch = useDispatch();
  const theme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      secondary: {
        main: "#4c9f43",
      },
    },
  });

  useEffect(() => {
    dispatch(login());
    dispatch(getProperties());
  }, [dispatch]);

  const [open, setOpen] = React.useState(false);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <Navbar open={open} setOpen={setOpen} />
          <AppDrawer open={open} setOpen={setOpen} />
          <Box
            component="main"
            sx={{ flexGrow: 1, p: 3, backgroundColor: grey[200] }}
          >
            <DrawerHeader />
            <Routes>
              <Route path="/" exact element={<Properties />}></Route>
              <Route path="/residential" element={<Residential />}></Route>
            </Routes>
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  );
}
