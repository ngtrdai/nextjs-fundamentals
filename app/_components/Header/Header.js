'use client'
import Link from "next/link";
import React from "react";
import {MENU_HEADER_ITEMS} from "@/app/_constants";
import {usePathname} from "next/navigation";

export default function Header() {
    const [childMenuActive, setChildMenuActive] = React.useState('');
    const [searchVisible, setSearchVisible] = React.useState(false);
    const currentRoute = usePathname();
    const checkActive = (url) => {
        return currentRoute === url ? 'current' : '';
    }

    React.useEffect(() => {
        if (searchVisible) {
            document.body.classList.add('search-visible');
        } else {
            document.body.classList.remove('search-visible');
        }
    }, [searchVisible]);

    React.useEffect(() => {
        const handleEsc = (event) => {
            if (event.keyCode === 27) {
                setSearchVisible(false);
            }
        };
        window.addEventListener('keydown', handleEsc);
        return () => {
            window.removeEventListener('keydown', handleEsc);
        };
    }, []);

    return (
        <header className={"short-header"}>
            <div className="gradient-block"></div>
            <div className="row header-content">
                <div className={"logo"}>
                    <Link href={"/"}>Author</Link>
                </div>
                <nav id="main-nav-wrap">
                    <ul className="main-navigation sf-menu">
                        {MENU_HEADER_ITEMS.map((item, index) => {
                            return (
                                <li key={index} {...(item.children && {className: "has-children"})}
                                    onMouseEnter={() => setChildMenuActive(item.name)}
                                    onMouseLeave={() => setChildMenuActive('')}
                                    {...(checkActive(item.url) && {className: "current"})}
                                >
                                    <Link href={item.url}>{item.name}</Link>
                                    {item.children && (
                                        <ul className="sub-menu"
                                            style={{display: childMenuActive === item.name ? 'block' : 'none'}}>
                                            {item.children.map((child, index) => {
                                                return (
                                                    <li key={index}>
                                                        <Link href={child.url}>{child.name}</Link>
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    )}
                                </li>
                            )
                        })}
                    </ul>
                </nav>
                <div className="search-wrap">
                    <form role="search" method="get" className="search-form" action="#">
                        <label>
                            <span className="hide-content">Search for:</span>
                            <input type="search" className="search-field" placeholder="Type Keywords..."
                                   defaultValue="" name="s" title="Search for:" autoComplete="off"/>
                        </label>
                        <input type="submit" className="search-submit" defaultValue="Search"/>
                    </form>
                    <a className="close-btn"
                            onClick={() => setSearchVisible(false)}
                    >Close</a>
                </div>
                <div className="triggers">
                    <a className="search-trigger"
                            onClick={() => setSearchVisible(true)}
                    ><i className="fa fa-search"></i></a>
                    <a className="menu-toggle" href="#"><span>Menu</span></a>
                </div>
            </div>
        </header>
    )
}