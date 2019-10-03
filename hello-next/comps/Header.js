import Link from 'next/link';

const linkStyle = { marginRight: 15 }

const Header = () => (
    <div>
        {/* Link is just a HOC which only accepts href and similar props.
        Do not expect Link to pass props to its children. The child of Link
        is the anchor tag. */}
        <Link href='/'>
            <a style={linkStyle}>Home</a>
        </Link>
        <Link href='/about'>
            <a style={linkStyle}>About</a>
        </Link>
    </div>
)

export default Header;