import React, {useEffect} from "react";
import {useNotifications} from "../context/NotificationContext";

function NotificationService() {
    const {notifications, setNotifications} = useNotifications();

    useEffect(() => {

    })
    return notifications;
}

export default NotificationService;