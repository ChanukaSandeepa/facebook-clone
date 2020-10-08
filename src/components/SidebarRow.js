import React from 'react'
import { Avatar } from '@material-ui/core'
import '../css/sidebarrow.css'

export default function SidebarRow({title, src, Icon}) {
    return (
        <div className="sidebarrow">
            {src && <Avatar src={src}/>}
            {Icon && <Icon/>}
            <p>{title}</p>
        </div>
    )
}
