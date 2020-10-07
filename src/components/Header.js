import React from 'react'
import '../css/Header.css'
import { Search, Home, Flag ,Subscriptions, StorefrontOutlined, SupervisedUserCircle, SubscriptionsOutlined, Add, Forum, NotificationsActive, ExpandMore } from '@material-ui/icons'
import { Avatar, IconButton } from '@material-ui/core'

export default function Header() {
    return (
        <div className="header">
            <div className="header_left">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png"/>
                <div className="header_input">
                    <Search/>
                    <input type="text"/>
                </div>
            </div>
            <div className="header_middle">
                <div className="header_option">
                    <Home fontSize="large"/>
                </div>
                <div className="header_option">
                    <Flag fontSize="large"/>
                </div>
                <div className="header_option">
                    <SubscriptionsOutlined fontSize="large"/>
                </div>
                <div className="header_option">
                    <StorefrontOutlined fontSize="large"/>
                </div>
                <div className="header_option">
                    <SupervisedUserCircle fontSize="large"/>
                </div>
                
            </div>
            <div className="header_right">
                <div className="header_info">
                    <Avatar/>
                    <h4>Chanuka</h4>
                </div>
                <IconButton>
                    <Add/>
                </IconButton>
                <IconButton>
                    <Forum/>
                </IconButton>
                <IconButton>
                    <NotificationsActive/>
                </IconButton>
                <IconButton>
                    <ExpandMore/>
                </IconButton>
            </div>
        </div>
    )
}
