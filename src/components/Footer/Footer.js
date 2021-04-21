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

const Footer = () => {
    const classes = useStyles();

    const { footerIcons, toggleForm } = useFormView();

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
                            onClick={() => toggleForm(icon.name)}
                            // onClick={(e) => toggleForm(e.currentTarget)}
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
                    <div name={form.name} key={form.name}>
                        {form.active && form.form}
                    </div>
                );
            })}
        </div>
    );
};

export default Footer;
