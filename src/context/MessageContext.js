import React, {createContext, useContext, useState, useEffect } from "react";
import data from "../data/dummy_data.json";

const MessageContext = createContext();

export const MessageProvider =({children}) => {
    const [messages, setMessages] = useState([]);

    const clearMessage = (message) => {
      messages.pop(message)
    }
    useEffect(() => {
        setMessages(data.messages);
    }, []);

return (
    <MessageContext.Provider value={{messages, clearMessage}}>
        {children}
    </MessageContext.Provider>
)}
export const useMessage = () => useContext(MessageContext);