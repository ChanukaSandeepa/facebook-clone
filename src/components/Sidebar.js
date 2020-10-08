import React from 'react'
import '../css/sidebar.css'
import SidebarRow from './SidebarRow'

export default function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow title="Pages"/>
            <SidebarRow title="Friends"/>
            <SidebarRow title="Messenger"/>
            <SidebarRow title="Videos"/>
        </div>
    )
}
