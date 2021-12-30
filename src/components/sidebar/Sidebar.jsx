import React from 'react'
import './sidebar.css'
import LineStyleIcon from '@mui/icons-material/LineStyle';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PeopleIcon from '@mui/icons-material/People';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import AssessmentIcon from '@mui/icons-material/Assessment';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import FeedbackIcon from '@mui/icons-material/Feedback';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
export default function Sidebar() {
    return (
        <div className="sidebar">
           <div className="sidebarwrapper">
               <div className="sidebarMenu">
               
                   <h3 
                   className="sidebarTitle">Dashboard</h3>
                   <hr/>
                   <ul className="sidebarList">
                       <li className="sidebarListItem active">
                            <LineStyleIcon className="sidebarIcon"/>
                            Home
                       </li>
                       <li className="sidebarListItem">
                            <TimelineIcon className="sidebarIcon"/>
                            Analytics
                       </li>
                       <li className="sidebarListItem">
                            <TrendingUpIcon className="sidebarIcon"/>
                            Sales
                       </li>
                   </ul>
               </div>
               <div className="sidebarMenu">
               
                   <h3 
                   className="sidebarTitle">Quick Menu</h3>
                   <hr/>
                   <ul className="sidebarList">
                       <li className="sidebarListItem active">
                            <PeopleIcon className="sidebarIcon"/>
                            Users
                       </li>
                       <li className="sidebarListItem">
                            <Inventory2Icon className="sidebarIcon"/>
                            Products
                       </li>
                       <li className="sidebarListItem">
                            <MonetizationOnIcon className="sidebarIcon"/>
                            Transaction
                       </li>
                       <li className="sidebarListItem">
                            <AssessmentIcon className="sidebarIcon"/>
                            Reports
                       </li>
                   </ul>
               </div>
               <div className="sidebarMenu">
               
                   <h3 
                   className="sidebarTitle">Notification</h3>
                   <hr/>
                   <ul className="sidebarList">
                       <li className="sidebarListItem active">
                            <MailOutlineIcon className="sidebarIcon"/>
                            Mail
                       </li>
                       <li className="sidebarListItem">
                            <FeedbackIcon className="sidebarIcon"/>
                            Feedback
                       </li>
                       <li className="sidebarListItem">
                            <ChatBubbleOutlineIcon className="sidebarIcon"/>
                            Message
                       </li>
                   </ul>
               </div>
               <div className="sidebarMenu">
               
                   <h3 
                   className="sidebarTitle">Staff</h3>
                   <hr/>
                   <ul className="sidebarList">
                       <li className="sidebarListItem active">
                            <ManageAccountsIcon className="sidebarIcon"/>
                            Manage
                       </li>
                       <li className="sidebarListItem">
                            <TimelineIcon className="sidebarIcon"/>
                            Analytics
                       </li>
                       <li className="sidebarListItem">
                            <ReportGmailerrorredIcon className="sidebarIcon"/>
                            Reports
                       </li>
                   </ul>
               </div>
               
             
           </div>
        </div>
    )
}
