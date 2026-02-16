import React, {createContext, useContext, useState} from "react";

const MessageContext = createContext();

export const MessageProvider =({children}) => {
    const [messages, setMessages] = useState(["achi dejhk","kh ji hhh jj","vrgh vr dhjf hj","sey jushgyh jusgf"]);

    const clearMessage = (message) => {
      messages.pop(message)
    }
return (
    <MessageContext.Provider value={{messages,}}>
        {children}
    </MessageContext.Provider>
)}
export const useMessage = () => useContext(MessageContext);