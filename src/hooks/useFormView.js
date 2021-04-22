import { useState } from "react";
//Material UI icons
import {
    NotificationsNone,
    PaletteOutlined,
    MoveToInboxOutlined,
    LabelOutlined,
    MoreVertOutlined,
    TrainRounded,
} from "@material-ui/icons";
//Import components
import FormReminder from "../components/FormReminder/FormReminder";
import FormColor from "../components/FormColorPick/FormColor";
import FormTag from "../components/FormTag/FormTag";

const useFormView = () => {
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

    //Open form handler
    const openForm = (name) => {
        const icons = footerIcons;

        const update = icons.map((item) => {
            const active =
                item.name === name
                    ? (item.active = true)
                    : (item.active = false);

            return { ...item, ...active };
        });

        setFooterIcons(update);
    };

    //Close form handler (on useClickOutside)
    const closeForm = (name) => {
        const icons = footerIcons;

        const update = icons.map((item) => {
            const active = item.name === name && (item.active = false);

            return { ...item, ...active };
        });

        setFooterIcons(update);
        console.log("I close form", footerIcons);
    };

    return { footerIcons, setFooterIcons, openForm, closeForm };
};

export default useFormView;
