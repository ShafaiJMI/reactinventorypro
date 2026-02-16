import React, {useState, useContext, createContext} from 'react'

const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
    const [notifications, setNotifications] = useState(['Done','packed','neworder']);

    const clearNotification = (notification) => {
      notifications.pop(notification)
    }

    return(
        <NotificationContext.Provider value={{notifications, clearNotification}}>
            {children}
        </NotificationContext.Provider>
    )
}

export const useNotifications = () => useContext(NotificationContext);