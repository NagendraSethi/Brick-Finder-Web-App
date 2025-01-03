import { useState } from 'react';
import './navbar.scss';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [openSlider, setOpenSlider] = useState(false)
    const user = true;
    return (
        <nav>
            <div className="left">
                <a href="/" className="logo">
                    <img src="/logo.png" alt="Logo" />
                    <span>BrickFinder</span>
                </a>
                <a href="/">Home</a>
                <a href="/">About</a>
                <a href="/">Contact</a>
                <a href="/">Agents</a>
            </div>
            <div className="right">
                {user ? <>
                    <div className='user'>
                        <img src="" alt='' />
                        <span>John Doe</span>
                        <Link to='/profile' className='profile'>
                            <div className="notification">3</div>
                            <span>Profile</span>
                        </Link>
                    </div>
                </> : <>
                    <a href="/" className="signIn">Sign in</a>
                    <a href="/" className="register">Sign up</a>
                    <div className="menuIcon">
                        <img src="/menu.png" alt="" onClick={() => setOpenSlider((prev) => !prev)} />
                    </div>
                </>
                }
                <div className={openSlider ? "menu active" : "menu"}>
                    <a href="/">Home</a>
                    <a href="/">About</a>
                    <a href="/">Contact</a>
                    <a href="/">Agents</a>
                </div>
            </div>
        </nav>
    );
}
