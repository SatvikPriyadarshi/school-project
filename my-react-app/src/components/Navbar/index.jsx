import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import './nav.css'

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        if (darkMode) {
            document.body.style.backgroundColor = "#121212";
            document.body.style.color = "#ffffff";
        } else {
            document.body.style.backgroundColor = "#ffffff";
            document.body.style.color = "#000000";
        }
    }, [darkMode]);

    const toggleMode = () => {
        setDarkMode(!darkMode);
    };

    const menus = [
        {
            label: 'Home',
            href: '/'
        },
        {
            label: 'Teacher',
            href: '/teachers'
        },
        {
            label: 'HoliDays',
            href: '/holidays'
        },
        {
            label: 'ContactUs',
            href: '/contact-us'
        },

    ]

    return (
        <>
            <nav className="navbar sticky top-0 left-0 z-50" style={{
                background: darkMode ? '#333' : 'white',
                color: darkMode ? 'white' : 'black',
                boxShadow: '0 8px 8px 0 rgba(0,0,0,0.2)'
            }}>
                <div className="navbar-brand">
                    <img src="./photo/download.png" width="60" alt="Logo" />
                    <h1>VKV</h1>
                </div>

                <ul className="navbar-links">
                    {
                        menus.map((menu, indx) => {
                            return (
                                <>
                                    <Link to={menu.href} style={{ textDecoration: 'none', color: darkMode ? 'white' : '#323232' }} key={indx} >
                                        {menu.label}
                                    </Link>
                                </> 
                            )
                        })
                    }
                    <li>
                        <button
                            className="toggle-btn"
                            onClick={toggleMode}
                            style={{
                                background: darkMode ? '#f38e1e' : '#333',
                                color: 'white',
                                border: 'none',
                                borderRadius: '50%',
                                padding: '8px',
                                fontSize: 12,
                                marginLeft: '16px',
                                cursor: 'pointer'
                            }}>
                            {darkMode ? 'Light' : 'Dark'}
                        </button>
                    </li>
                </ul>


            </nav>
        </>
    )
}

export default Navbar;
