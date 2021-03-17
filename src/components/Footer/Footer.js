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

const Footer = ({ footerID, menuIcon }) => {
    const classes = useStyles();

    const [isOpen, setIsOpen] = useState(false);

    //Footer icons
    const createNoteIcons = [
        { name: "alert", icon: <NotificationsNone /> },
        { name: "color", icon: <PaletteOutlined /> },
        { name: "archive", icon: <MoveToInboxOutlined /> },
        { name: "tag", icon: <LabelOutlined /> },
        { name: "menu", icon: <MoreVertOutlined /> },
    ];
    //Conditionally displays menu icon
    if (menuIcon === false) {
        const length = createNoteIcons.length;
        delete createNoteIcons[length - 1];
    }

    //Opens forms (Reminder, color, tags)
    const toggleOpen = () => {
        setIsOpen((isOpen) => !isOpen);
    };

    const buttonCoordinates = (e) => {
        let btnHeight = e.currentTarget.clientHeight;
        let btnWidth = e.currentTarget.clientWidth;
        let topDistance = e.clientY;
        let leftDistance = e.clientX;

        let absoluteTop = topDistance + btnHeight;
        let absoluteLeft = leftDistance + btnWidth;

        // console.log(btnHeight, btnWidth);
        // console.log(topDistance, leftDistance);
        // console.log(absoluteTop, absoluteLeft);
        return { top: absoluteTop, left: absoluteLeft };
    };

    return (
        <div id={footerID} className={classes.footer}>
            <CardActionArea disableRipple={true}>
                <List className={classes.createNoteIcons}>
                    {createNoteIcons.map((icon, index) => (
                        <ListItem
                            button={true}
                            disableRipple={true}
                            className={classes.iconItem}
                            key={index}
                            // id={`${icon.name}${index}`}
                            name={icon.name}
                            onClick={toggleOpen}
                            onMouseDown={buttonCoordinates}
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
