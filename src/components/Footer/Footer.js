import { useState } from "react";
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
//Import components
import FormReminder from "../FormReminder/FormReminder";
import FormColor from "../FormColorPick/FormColor";
import FormTag from "../FormTag/FormTag";

const Footer = () => {
    const classes = useStyles();

    const [footerIcons, setFooterIcons] = useState([
        {
            name: "alert",
            active: false,
            form: <FormReminder />,
            icon: <NotificationsNone />,
        },
        {
            name: "color",
            active: false,
            form: <FormColor />,
            icon: <PaletteOutlined />,
        },
        {
            name: "archive",
            active: false,
            form: null,
            icon: <MoveToInboxOutlined />,
        },
        {
            name: "tag",
            active: false,
            form: <FormTag />,
            icon: <LabelOutlined />,
        },
        { name: "menu", active: false, form: null, icon: <MoreVertOutlined /> },
    ]);

    const openForm = (name) => {
        const icons = footerIcons;

        const update = icons.map((item) => {
            const y =
                item.name === name
                    ? (item.active = true)
                    : (item.active = false);

            return { ...item, ...y };
        });

        setFooterIcons(update);
    };

    return (
        <div className={classes.footer}>
            <CardActionArea disableRipple={true}>
                <List className={classes.footerIcons}>
                    {footerIcons.map((icon, index) => (
                        <ListItem
                            button={true}
                            disableRipple={true}
                            className={classes.iconItem}
                            key={index}
                            name={icon.name}
                            onClick={() => openForm(icon.name)}
                        >
                            <ListItemIcon className={classes.icon}>
                                {icon.icon}
                            </ListItemIcon>
                        </ListItem>
                    ))}
                </List>
            </CardActionArea>
            {footerIcons.map((form) => {
                return <div key={form.name}>{form.active && form.form}</div>;
            })}
        </div>
    );
};

export default Footer;
