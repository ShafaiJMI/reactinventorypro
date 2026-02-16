import React, {useEffect, useState} from "react";
import {useMessage} from "../context/MessageContext";


function MessagesService() {
    const {messages, setMessages} = useMessage();

    useEffect(() => {

    })
    return messages;
}

export default MessagesService;