import { ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { ReactElement } from "react";
interface ISideBarItem {
    open:boolean,
    text:string,
    icon:ReactElement,
    path?: string,
    function?:()=>void,
}
const SideBarItem = (i:ISideBarItem) => {
    return ( 
        <ListItem>
              <ListItemButton href={i.path ? i.path : ''}
                sx={{
                  minHeight: 48,
                  justifyContent: i.open ? "initial" : "center",
                  px: 2.5,
                }}>
                <ListItemIcon onClick={i.function}
                  sx={{
                    minWidth: 0,
                    mr: i.open ? 3 : "auto",
                    justifyContent: "center",
                  }}>
                  {i.icon}
                </ListItemIcon>
                <ListItemText primary={i.text} sx={{ opacity: i.open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
     );
}
 
export default SideBarItem;