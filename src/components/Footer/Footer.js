import { useRef } from "react";
//Import styyles
import useStyles from "./style";
//Material UI elements
import {
    CardActionArea,
    List,
    ListItem,
    ListItemIcon,
} from "@material-ui/core";
//Import custom hook
import useFormView from "../../hooks/useFormView";
import useClickOutside from "../../hooks/useClickOutside";

const Footer = () => {
    const classes = useStyles();

    const targetDOM = useRef(null);

    const { footerIcons, openForm, closeForm } = useFormView();

    useClickOutside(targetDOM, footerIcons, closeForm);

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
                return (
                    <div
                        ref={form.active === true ? targetDOM : null}
                        name={form.name}
                        key={form.name}
                    >
                        {form.active && form.form}
                    </div>
                );
            })}
        </div>
    );
};

export default Footer;
