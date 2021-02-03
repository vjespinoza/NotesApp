import React from "react";
import useStyles from "./style";

//Imported components from Material UI
import Drawer from "@material-ui/core/Drawer";
import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    CssBaseline,
} from "@material-ui/core";
//Import icons from Material UI
import NoteOutlinedIcon from "@material-ui/icons/NoteOutlined";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import LabelOutlinedIcon from "@material-ui/icons/LabelOutlined";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import MoveToInboxOutlinedIcon from "@material-ui/icons/MoveToInboxOutlined";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";

const Sidebar = () => {
    const classes = useStyles();
    const sideBarItems = [
        {
            text: "notes",
            icon: <NoteOutlinedIcon />,
        },
        {
            text: "reminders",
            icon: <NotificationsNoneIcon />,
        },
        {
            text: "tags",
            icon: <LabelOutlinedIcon />,
        },
        {
            text: "edit tags",
            icon: <EditOutlinedIcon />,
        },
        {
            text: "filed notes",
            icon: <MoveToInboxOutlinedIcon />,
        },
        {
            text: "trash",
            icon: <DeleteOutlinedIcon />,
        },
    ];

    return (
        <Drawer
            variant="permanent"
            className={classes.drawer}
            classes={{
                paper: classes.drawerPaper,
            }}
        >
            <div className={classes.drawerContainer}>
                <CssBaseline />
                <List>
                    {sideBarItems.map((item, index) => (
                        <ListItem button key={index}>
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText
                                primary={
                                    item.text[0].toUpperCase() +
                                    item.text.slice(1)
                                }
                            ></ListItemText>
                        </ListItem>
                    ))}
                </List>
            </div>
        </Drawer>
    );
};

export default Sidebar;
