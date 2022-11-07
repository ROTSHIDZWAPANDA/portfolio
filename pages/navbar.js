import Link from 'next/link'

const Navbar = () => {
    return ( 
        <nav className='navi'>
            <div className="logo">
                <h1>MY PORTFOLIO</h1>
               

            </div>
            <Link href="/">HOME</Link>
            <Link href="/about">CONTACT INFO</Link>

        </nav>
     );
}
 
export default Navbar;