import React from "react";
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

const Footer = ({ menuIcon }) => {
    const classes = useStyles();

    //Footer icons
    const createNoteIcons = [
        { name: "alert", icon: <NotificationsNone /> },
        { name: "color", icon: <PaletteOutlined /> },
        { name: "archive", icon: <MoveToInboxOutlined /> },
        { name: "tag", icon: <LabelOutlined /> },
        { name: "menu", icon: <MoreVertOutlined /> },
    ];

    if (menuIcon === false) {
        const length = createNoteIcons.length;
        delete createNoteIcons[length - 1];
    }

    const openFormHandler = (e) => {
        switch (e.currentTarget.getAttribute("name")) {
            case "alert":
                document.getElementById("formReminder").style.display = "flex";
                document.getElementById("formColor").style.display = "none";
                document.getElementById("formTag").style.display = "none";
                break;
            case "color":
                document.getElementById("formColor").style.display = "flex";
                document.getElementById("formReminder").style.display = "none";
                document.getElementById("formTag").style.display = "none";
                break;
            case "tag":
                document.getElementById("formTag").style.display = "flex";
                document.getElementById("formColor").style.display = "none";
                document.getElementById("formReminder").style.display = "none";
                break;
            default:
                document.getElementById("formReminder").style.display = "none";
                document.getElementById("formColor").style.display = "none";
                document.getElementById("formTag").style.display = "none";
                break;
        }
    };

    return (
        <CardActionArea disableRipple={true} className={classes.footer}>
            <List className={classes.createNoteIcons}>
                {createNoteIcons.map((icon, index) => (
                    <ListItem
                        button={true}
                        disableRipple={true}
                        className={classes.iconItem}
                        key={index}
                        name={icon.name}
                        onClick={openFormHandler}
                    >
                        <ListItemIcon className={classes.icon}>
                            {icon.icon}
                        </ListItemIcon>
                    </ListItem>
                ))}
            </List>
        </CardActionArea>
    );
};

export default Footer;
