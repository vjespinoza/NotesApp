import { useState, useEffect } from "react";
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
    const [toggleActive, setToggleActive] = useState(true);
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

    const toggleForm = (name) => {
        const icons = footerIcons;

        setToggleActive((toggleActive) => !toggleActive);

        const update = icons.map((item) => {
            const active =
                item.name === name
                    ? (item.active = toggleActive)
                    : (item.active = false);

            return { ...item, ...active };
        });

        setFooterIcons(update);
    };

    return { footerIcons, setFooterIcons, toggleForm };
};

export default useFormView;
