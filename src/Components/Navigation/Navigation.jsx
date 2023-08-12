import { Outlet, Link } from "react-router-dom";
import {ul, hr, burgerNav, rightMenu} from './styles/Navigation.module.css';
import { useLayoutEffect, useState } from "react";

function DesktopNav() {
    return (
        <nav>
            <ul className={ul}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/challenge1">Challenge 1</Link>
                </li>
                <li>
                    <Link to="/challenge2">Challenge 2</Link>
                </li>
                <li>
                    <Link to="/challenge3">Challenge 3</Link>
                </li>
                <li>
                    <Link to="/nothing-here">Nothing Here</Link>
                </li>
            </ul>
        </nav>
    );
}

function Navigation() {
    return (
        <>
            <DesktopNav />
            <hr className={hr} />
            <Outlet />
        </>
    );
}

export default Navigation;