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
    menuIcon,
    originNote,
    originCreateNote,
    closeFormHandler,
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

        //With this same function I can set the positioning of the forms
        //depending on 'origin'
        if (originNote === true && buttonName === "alert") {
            console.log(e.currentTarget.closest("#note1")); //Promising
            console.log("i come from Note", buttonName);
        } else if (originNote === true && buttonName === "color") {
            console.log("i come from Note", buttonName);
        } else if (originNote === true && buttonName === "archive") {
            console.log("i come from Note", buttonName);
        } else if (originNote === true && buttonName === "tag") {
            console.log("i come from Note", buttonName);
        }

        if (originCreateNote === true && buttonName === "alert") {
            console.log("i come from CreateNote", buttonName);
        } else if (originCreateNote === true && buttonName === "color") {
            console.log("i come from CreateNote", buttonName);
        } else if (originCreateNote === true && buttonName === "archive") {
            console.log("i come from CreateNote", buttonName);
        } else if (originCreateNote === true && buttonName === "tag") {
            console.log("i come from CreateNote", buttonName);
        }
    };

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
                closeFormHandler={closeFormHandler}
                toggleAlert={toggleAlert}
            />
            <FormColor
                closeFormHandler={closeFormHandler}
                noteBgColor={noteBgColor}
                setNoteBgColor={setNoteBgColor}
            />
            <FormTag
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
