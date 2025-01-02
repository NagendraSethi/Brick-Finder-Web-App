import { useState } from 'react';
import './navbar.scss';

export default function Navbar() {
    const [openSlider, setOpenSlider] = useState(false)
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
                <a href="/" className="signIn">Sign in</a>
                <a href="/" className="register">Sign up</a>
                <div className="menuIcon">
                    <img src="/menu.png" alt="" onClick={()=>setOpenSlider((prev)=>!prev)}/>
                </div>
                <div className={openSlider?"menu active":"menu"}>
                    <a href="/">Home</a>
                    <a href="/">About</a>
                    <a href="/">Contact</a>
                    <a href="/">Agents</a>
                </div>
            </div>
        </nav>
    );
}
