import {Drawer} from "flowbite-react";
import React, {useState} from "react";
import {BellIcon, MessageSquareIcon} from "lucide-react";
import {useMessage} from "../context/MessageContext";
import {useNotifications} from "../context/NotificationContext";


function RightDrawer() {
    const [activeDrawer, setActiveDrawer] = useState(false);
    const { notifications, clearNotificaton} = useNotifications();
    const { messages, clearMessage } = useMessage();

    const openDrawer = (drawerName) => {
        setActiveDrawer(drawerName);
    }

    const closeDrawer = () => {
        setActiveDrawer(null);
    }

    return (
        <>
            <div className="rounded-full bg-white p-3 relative inline-block"><BellIcon size={20} onClick={()=>{openDrawer("notifications")}}/><span className="absolute top-1 right-1 h-4 w-4 flex justify-center items-center bg-yellow-300 rounded-full p-1 text-xs z-10 text-white">6</span></div>
            <div className="rounded-full bg-white p-3 relative inline-block"><MessageSquareIcon size={20} onClick={()=>{openDrawer("messages")}}/><span className="absolute top-1 right-1 h-4 w-4 flex justify-center items-center bg-lime-500 rounded-full p-1 text-xs z-10 text-white">4</span></div>
            {activeDrawer === "notifications" && (
               <Drawer open={true} onClose={closeDrawer} position={"right"}>
                   <Drawer.Header title="Notifications" titleIcon={BellIcon}/>
                   <Drawer.Items>
                       {notifications.map((item, index) => (
                           <div key={index} className="p-2 mb-1 border shadow-sm">
                               <p>{item}</p>
                           </div>
                       ))}
                   </Drawer.Items>
               </Drawer>
            )}
            {activeDrawer === "messages" && (
                <Drawer open={true} onClose={closeDrawer} position={"right"}>
                    <Drawer.Header title="Messages" titleIcon={MessageSquareIcon}/>
                    <Drawer.Items>
                        {messages.map((item, index) => (
                            <div key={index} className="p-2 mb-1 border shadow-sm">
                                <p>{item}</p>
                            </div>
                        ))}
                    </Drawer.Items>
                </Drawer>
            )}
        </>
    )
}
export default RightDrawer;