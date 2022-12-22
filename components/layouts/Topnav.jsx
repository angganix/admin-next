import React from 'react'
import { IconLogout, IconMenu2 } from '@tabler/icons'

const Topnav = ({ sidebarToggle }) => {
    return (
        <header id="topnav">
            <div className="flex-shrink-0">
                <button type="button" className="icon-button sm:block md:hidden" onClick={sidebarToggle}>
                    <IconMenu2 />
                </button>
            </div>
            <div className="flex-grow"></div>
            <div className="flex-shrink-0">
                <button type="button" className="icon-button">
                    <IconLogout />
                </button>
            </div>
        </header>
    )
}

export default Topnav