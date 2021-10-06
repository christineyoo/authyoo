import navStyles from '../styles/Nav.module.css'
import Link from 'next/link'

const Nav = () => {
    return (
        <nav className={navStyles.nav}>
            <ul>
                <li>
                    <Link href='/'>Home</Link>
                </li>
                <li>
                    <Link href='/signup'>Sign up</Link>
                </li>
                <li>
                    <Link href='/login'>Login</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav