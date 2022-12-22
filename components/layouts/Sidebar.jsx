import { IconX } from '@tabler/icons'
import React from 'react'
import menu from '../../data/menu'
import Link from 'next/link'

function Sidebar({ sidebarToggle }) {
    return (
        <aside id="sidebar" className="relative">
            <button
                type="button"
                className="icon-button absolute top-0 right-0 m-2 sm:block md:hidden"
                onClick={sidebarToggle}
            >
                <IconX />
            </button>
            <header className="px-8 pb-5 pt-8">
                <h4>Sidebar</h4>
            </header>
            <div className="p-4">
                <ul className="sidebar-menu">
                    {menu.map((item, index) => (
                        <SidebarItem key={index} {...item} />
                    ))}
                </ul>
            </div>
        </aside>
    )
}

const SidebarItem = ({ path, title, children = null }) => {
    const [showDropdown, setShowDropdown] = React.useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    }

    return (
        <li className="sidebar-item">
            <Link
                href={path}
                className={`sidebar-link ${children ? `sidebar-link-dropdown ${showDropdown ? 'show' : ''}` : ''}`}
                onClick={toggleDropdown}
            >
                {title}
            </Link>
            {children && (
                <ul className={`sub-sidebar-menu ${showDropdown ? 'show' : ''}`}>
                    {children?.map((child, index) => (
                        <SidebarItem key={index} {...child} />
                    ))}
                </ul>
            )}
        </li>
    )
}

export default Sidebar