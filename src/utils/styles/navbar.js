import { makeStyles } from "@mui/styles";

const bgColor = "#4c9f43";
const drawerWidth = 240;

const styles = makeStyles(() => ({
  root: {
    display: "flex",
  },
  grow: {
    flexGrow: 1,
  },
  customColor: {},
  appBar: {
    // minHeight: navHeight,
    backgroundColor: "#111",
    // zIndex: theme.zIndex.drawer + 1,
    // transition: theme.transitions.create(["width", "margin"], {
    //   easing: theme.transitions.easing.sharp,
    //   duration: theme.transitions.duration.leavingScreen,
    // }),
  },
  appBarShift: {
    // minHeight: height,
    backgroundColor: bgColor,
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    // transition: theme.transitions.create(["width", "margin"], {
    //   easing: theme.transitions.easing.sharp,
    //   duration: theme.transitions.duration.enteringScreen,
    // }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    // padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    // ...theme.mixins.toolbar,
  },

  content: {
    flexGrow: 1,
    // padding: theme.spacing(3),
  },
}));

export default styles();
