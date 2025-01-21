import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <Link to="/">
                <h1 className="title">Programuotojai API</h1>
            </Link>
            <nav>
                <Link to="/">Pradzia</Link>
                <Link to="/create">Kurti nauja</Link>
            </nav>
        </header>
    );
}

export default Header;
