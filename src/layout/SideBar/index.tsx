import * as React from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import MenuIcon from "@mui/icons-material/Menu";
import GroupIcon from "@mui/icons-material/Group";
import StoreIcon from "@mui/icons-material/Store";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import MailIcon from "@mui/icons-material/Mail";
import SideBarItem from "../../components/SideBarItem";
import { ROUTES } from "../../routes";
import NewspaperIcon from '@mui/icons-material/Newspaper';
const drawerWidth = 300;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `112px`,
  [theme.breakpoints.up("sm")]: {
    width: `112px`,
  },
});

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

const SideBar = () => {
  const [open, setOpen] = React.useState(false);

  const handleDrawer = () => {
    setOpen((e) => !e);
  };

  return (
    <div className={open ? `w-80` : 'w-28'}>.
      <Drawer className="!duration-500" variant="permanent" open={open}>
        <SideBarItem open={open} function={handleDrawer} text={"header"} icon={<MenuIcon />} />
        <Divider />
        <List>
          <SideBarItem open={open} path={ROUTES.Dashboard} text={"Dashboard"} icon={<MailIcon />} />
          <SideBarItem open={open} path={ROUTES.Custumers} text={"Customers"} icon={<GroupIcon />} />
          <SideBarItem open={open} path={ROUTES.Products} text={"Products"} icon={<StoreIcon />} />
          <SideBarItem open={open} path={ROUTES.Blogs} text={"Blogs"} icon={<NewspaperIcon />} />
          <SideBarItem open={open} path={ROUTES.Orders} text={"Orders"} icon={<BusinessCenterIcon />} />
        </List>
        <Divider />
      </Drawer>
    </div>
  );
};

export default SideBar;
