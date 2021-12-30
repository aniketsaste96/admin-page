import React from 'react'
import  './topbar.css'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsIcon from '@mui/icons-material/Settings';
import LanguageIcon from '@mui/icons-material/Language';
import ChatIcon from '@mui/icons-material/Chat';

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarwrapper">
                <div className="topLeft">
                    <span className="logo">Aniket Admin</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                    <NotificationsNoneIcon/>
                    <span className="topIconBadge">8</span>
                    </div>
                    <div className="topbarIconContainer">
                    <LanguageIcon/>
                    <span className="topIconBadge">8</span>
                    </div>                   
                    <div className="topbarIconContainer">
                    <ChatIcon/>
                    <span className="topIconBadge">8</span>
                    </div>
                    <div className="topbarIconContainer">
                    <SettingsIcon/>                    
                    </div>
                    <img src="https://wallpapercave.com/wp/wp6086581.jpg" alt="profile pic" className="topAvatar" />
                </div>
            </div>
       
        </div>
    )
}
