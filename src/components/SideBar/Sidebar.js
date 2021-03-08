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
import {
    NoteOutlined,
    NotificationsNone,
    LabelOutlined,
    EditOutlined,
    MoveToInboxOutlined,
    DeleteOutlined,
} from "@material-ui/icons";

const Sidebar = () => {
    const classes = useStyles();
    const sideBarItems = [
        {
            text: "notes",
            icon: <NoteOutlined />,
        },
        {
            text: "reminders",
            icon: <NotificationsNone />,
        },
        {
            text: "tags",
            icon: <LabelOutlined />,
        },
        {
            text: "edit tags",
            icon: <EditOutlined />,
        },
        {
            text: "filed notes",
            icon: <MoveToInboxOutlined />,
        },
        {
            text: "trash",
            icon: <DeleteOutlined />,
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
