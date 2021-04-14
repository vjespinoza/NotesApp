import React from "react";
//Imported styles
import useStyles from "./style";
//Imported components from Material UI
import { Card, Typography, Container, Chip } from "@material-ui/core";
import NotificationsActiveOutlinedIcon from "@material-ui/icons/NotificationsActiveOutlined";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
//Components
import Footer from "../Footer/Footer";

const Note = ({ title, body }) => {
    const classes = useStyles();

    // console.log(note.color);

    const alertBadge = (
        <Chip
        // id={`badge${id}`}
        // className={classes.alertBadge}
        // icon={<NotificationsActiveOutlinedIcon />}
        // size="small"
        // onDelete={handleBadgeDelete}
        // label={`${activeAlert.date}, ${activeAlert.time}`}
        // deleteIcon={<HighlightOffIcon id={`badgeClose${id}`} />}
        ></Chip>
    );

    return (
        <Card variant="outlined" className={classes.note}>
            <Container>
                <Typography
                    className={classes.noteTitle}
                    align="left"
                    variant="h6"
                >
                    {title}
                </Typography>
            </Container>
            <Container>
                <Typography className={classes.noteContent} align="left">
                    {body}
                </Typography>
            </Container>
            {/* <Container>{active === true ? alertBadge : ""}</Container>
            <Container>
                {tags.map((tag, index) => (
                    <Chip
                        id={`tag${index}`}
                        key={index}
                        className={classes.alertBadge}
                        size="small"
                        onDelete={handleTagDelete}
                        label={`${tag}`}
                        deleteIcon={
                            <HighlightOffIcon id={`tagClose${index}`} />
                        }
                    ></Chip>
                ))}
            </Container> */}
            <Container className={classes.noteFooter}>
                <Footer />
            </Container>
        </Card>
    );
};

export default Note;
