import React from "react";
import useStyles from "./style";
//Components
import FormReminder from "../FormReminder/FormReminder";
import FormColor from "../FormColorPick/FormColor";
import FormTag from "../FormTag/FormTag";
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

const Footer = ({
    notes,
    footerID,
    uniqueID,
    menuIcon,
    toggleAlert,
    noteBgColor,
    setNoteBgColor,
    tag,
    setTag,
    noteTag,
    setNoteTag,
    checked,
    setChecked,
}) => {
    const classes = useStyles();

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
    const openFormHandler = (e) => {
        const buttonName = e.currentTarget.getAttribute("name");
        const footerId = e.currentTarget.closest("[id]").id.slice(6);
        // const targetElement = e.currentTarget.name;
        // console.log(targetElement);

        if (uniqueID === true) {
            if (buttonName === "alert") {
                document.getElementById(`formReminder`).style.display = "flex";
            } else if (buttonName === "color") {
                document.getElementById(`formColor`).style.display = "flex";
            } else if (buttonName === "tag") {
                document.getElementById(`formTag`).style.display = "flex";
            }
        } else {
            if (buttonName === "alert") {
                document.getElementById(
                    `formReminder_footer${footerId}`
                ).style.display = "flex";
            } else if (buttonName === "color") {
                document.getElementById(
                    `formColor_footer${footerId}`
                ).style.display = "flex";
            } else if (buttonName === "tag") {
                document.getElementById(
                    `formTag_footer${footerId}`
                ).style.display = "flex";
            }
        }
    };

    const closeFormHandler = (e) => {
        e.currentTarget.style.display = "none";
        console.log(e.currentTarget);
        // document.getElementById("formColor").style.display = "none";
        // document.getElementById("formTag").style.display = "none";
        // document.getElementById("formReminder").style.display = "none";
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
                            onClick={openFormHandler}
                        >
                            <ListItemIcon className={classes.icon}>
                                {icon.icon}
                            </ListItemIcon>
                        </ListItem>
                    ))}
                </List>
            </CardActionArea>
            <FormReminder
                uniqueID={uniqueID}
                footerID={footerID}
                closeFormHandler={closeFormHandler}
                toggleAlert={toggleAlert}
            />
            <FormColor
                uniqueID={uniqueID}
                footerID={footerID}
                closeFormHandler={closeFormHandler}
                noteBgColor={noteBgColor}
                setNoteBgColor={setNoteBgColor}
            />
            <FormTag
                uniqueID={uniqueID}
                footerID={footerID}
                notes={notes}
                closeFormHandler={closeFormHandler}
                tag={tag}
                setTag={setTag}
                noteTag={noteTag}
                setNoteTag={setNoteTag}
                checked={checked}
                setChecked={setChecked}
            />
        </div>
    );
};

export default Footer;
