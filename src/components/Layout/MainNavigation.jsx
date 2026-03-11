import { NavLink } from "react-router-dom";
import { IoSunnyOutline } from "react-icons/io5";
import { FaRegMoon } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

import classes from './MainNavigation.module.css';
import { useEffect, useState } from "react";

export default function MainNavigation() {
    const [dark,setDark] = useState(false);
    const [showNav,setShowNav] = useState(false);

    useEffect(() => {
        const savedMode = localStorage.getItem('theme');

        if(savedMode === 'dark') {
            document.documentElement.classList.add('dark');
            setDark(true);
        };
    }, [])

    function toggleMode() {
        if(dark) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        }

        setDark((prev) => !prev);
    }

    function toggleNav() {
        setShowNav((prev) => !prev);
    }

    function hiddenNav() {
        setShowNav(false);
        window.scroll(0,0)
    }

    return (
        <header className={classes.header}>
            <div className={`container ` + classes.container}>
                <div className={classes.logo}>
                    <h2>Mostafa<span>.</span></h2>
                </div>

                <div className={classes.list}>
                    <div className="mode">
                        {dark ? 
                            <p onClick={toggleMode}><IoSunnyOutline /></p> 
                            : <p onClick={toggleMode}><FaRegMoon /></p>
                        }
                    </div>

                    <button className={classes.showbar} onClick={toggleNav}>
                        <FaBars />
                    </button>

                    <ul className={showNav ? classes.listActive : undefined}>
                        <span onClick={toggleNav}><IoMdClose /></span>
                        <li>
                            <NavLink 
                            onClick={() => hiddenNav()}
                            to="/"
                            className={({isActive}) => 
                                isActive ? classes.active : undefined
                            }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                            onClick={() => hiddenNav()}
                            to="/about"
                            className={({isActive}) => 
                                isActive ? classes.active : undefined
                            }
                            >
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                            onClick={() => hiddenNav()} 
                            to="/skills"
                            className={({isActive}) => 
                                isActive ? classes.active : undefined
                            }
                            >
                                Skills
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                            onClick={() => hiddenNav()}
                            to="/projects"
                            className={({isActive}) => 
                                isActive ? classes.active : undefined
                            }
                            >
                                Projects
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                            onClick={() => hiddenNav()}
                            to="/contact"
                            className={({isActive}) => 
                                isActive ? classes.active : undefined
                            }
                            >
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}