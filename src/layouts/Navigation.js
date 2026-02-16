import React from 'react';
import {NavLink} from "react-router-dom";
import {
   PackageCheckIcon,
   ShirtIcon,
   UserIcon,
   MessageSquareMoreIcon,
   LayoutGridIcon,
   ChartPieIcon,
   LogOutIcon,
   ChevronsUpDownIcon,
   SettingsIcon, NetworkIcon, WalletIcon, SparklesIcon
} from 'lucide-react';

const NavigationLink = ({path,title,icon}) => {
   return (
      <li>
         <NavLink to={path} className={({ isActive }) =>
             `flex items-center p-2 text-gray-600 rounded-lg dark:text-gray-900 hover:text-lime-600 hover:bg-lime-100 dark:hover:bg-gray-700 group ${isActive ? "bg-gray-200 text-gray-600" : ""}`}>
            {icon}
            <span className="flex-1 ms-3 whitespace-nowrap">{title}</span>
         </NavLink>
      </li>
   )
};

function Navigation(){
    return(
        <>
<nav id="default-sidebar" className="top-0 left-0 z-40 w-64 fixed h-full transition-transform -translate-x-full md:translate-x-0" aria-label="Sidebar">
   <div className="h-full px-3 py-4 overflow-y-auto bg-white shadow-lg dark:bg-gray-800">
      <div className='mb-4 px-2'>
         <h4 className='font-semibold flex'>ReactInventory Pro <SparklesIcon size={14} className={'text-yellow-300'}/></h4>
      </div>
      <div className='flex items-center h-16 mb-4 border-2 border-gray-200 gap-2 rounded-2xl dark:bg-gray-800'>
         <div className='bg-lime-100 p-2 rounded-full m-2'><UserIcon /></div>
      <div className='m-2'>
      <p className="font-semibold text-sm text-gray-800 dark:text-gray-500">Data Insight</p>
      <p className="font-semibold text-sm text-gray-500 dark:text-gray-500">3.3k Visitors</p>
      </div>
      <div className='m-2'><ChevronsUpDownIcon /></div>
      </div>
      <h4 className='text-gray-500 p-2 text-sm uppercase'>General</h4>
      <ul className="space-y-2 font-medium">
         <NavigationLink path={'/'} title={'Dashboard'} icon={<LayoutGridIcon />}/>
         <NavigationLink path={'/products'} title={'Products'} icon={<ShirtIcon />}/>
         <NavigationLink path={'/categories'} title={'Categories'} icon={<NetworkIcon />}/>
         <NavigationLink path={'/orders'} title={'Orders'} icon={<PackageCheckIcon />}/>
         <NavigationLink path={'/payments'} title={'Payments'} icon={<WalletIcon />}/>
         <NavigationLink path={'/analytics'} title={'Analytics'} icon={<ChartPieIcon />}/>
         <NavigationLink path={'/messages'} title={'Messages'} icon={<MessageSquareMoreIcon />}/>
      </ul>
      <h4 className='text-gray-500 p-2 text-sm uppercase'>Support & Settings</h4>
      <ul className="space-y-2 font-medium">
         <NavigationLink path={'/users'} title={'Customers'} icon={<UserIcon />}/>
         <NavigationLink path={'/settings'} title={'Settings'} icon={<SettingsIcon />}/>
         <NavigationLink path={'/sign-out'} title={'Sign Out'} icon={<LogOutIcon />}/>
      </ul>
   </div>
</nav>
        </>
    );
}

export default Navigation;