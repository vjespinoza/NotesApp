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

const useFormView = (domTarget) => {
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
            const active =
                item.name === name
                    ? (item.active = true)
                    : (item.active = false);

            return { ...item, ...active };
        });

        setFooterIcons(update);
    };

    const closeForm = () => {
        const icons = footerIcons;

        const update = icons.map((item) => {
            const active = item.active === true ? item : !item;
            item.active = false;

            return { ...item, ...active };
        });

        setFooterIcons(update);
    };

    // useEffect(() => {
    //     if (domTarget.current != null) {
    //         const clickOutside = (e) => {
    //             if (!domTarget.current.contains(e.target)) {
    //                 closeForm();
    //             }
    //         };
    //         document.addEventListener("mousedown", clickOutside);
    //         console.log("is NOT null", domTarget.current);
    //         return;
    //     }
    // }, [footerIcons]);

    // console.log(domTarget);

    return { footerIcons, setFooterIcons, openForm };
};

export default useFormView;
