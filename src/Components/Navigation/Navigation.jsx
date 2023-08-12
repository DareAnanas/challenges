import { Outlet, Link } from "react-router-dom";
import {ul, hr, burgerNav, rightMenu} from './styles/Navigation.module.css';
import { useLayoutEffect, useState } from "react";

function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
}

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

function BurgerNav() {
    return (
        <nav className={burgerNav}>
            <div className={rightMenu}>
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 50 50" 
                width="30px" 
                height="30px">
                <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"/></svg>
            </div>
        </nav>
    );
}

function Navigation() {
    const [width, height] = useWindowSize();

    return (
        <>
            <DesktopNav />
            <hr className={hr} />
            <Outlet />
        </>
    );
}

export default Navigation;