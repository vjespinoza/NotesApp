import React, { useState } from "react";
import useStyles from "./style";
//Material UI elements
import {
    CardActionArea,
    List,
    ListItem,
    ListItemIcon,
} from "@material-ui/core";

//Material UI icons
import {
    NotificationsNone,
    PaletteOutlined,
    MoveToInboxOutlined,
    LabelOutlined,
    MoreVertOutlined,
} from "@material-ui/icons";

//Footer icons
const createNoteIcons = [
    { name: "alert", icon: <NotificationsNone /> },
    { name: "color", icon: <PaletteOutlined /> },
    { name: "archive", icon: <MoveToInboxOutlined /> },
    { name: "tag", icon: <LabelOutlined /> },
    { name: "menu", icon: <MoreVertOutlined /> },
];

const Footer = () => {
    const classes = useStyles();

    return (
        <div className={classes.footer}>
            <CardActionArea disableRipple={true}>
                <List className={classes.createNoteIcons}>
                    {createNoteIcons.map((icon, index) => (
                        <ListItem
                            button={true}
                            disableRipple={true}
                            className={classes.iconItem}
                            key={index}
                            name={icon.name}
                        >
                            <ListItemIcon className={classes.icon}>
                                {icon.icon}
                            </ListItemIcon>
                        </ListItem>
                    ))}
                </List>
            </CardActionArea>
        </div>
    );
};

export default Footer;
