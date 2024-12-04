import './Navbar.css';

function Navbar(props) {

    function scrollToPage(page) {
            props.scrollToPage(page);
    }

    return (
        <div id="Navbar">
            <a href="https://sps.edu" className="nav-button" id="SPS">SPS</a>
            <button onClick={e => scrollToPage("team")} className="nav-button">TEAM 1512</button>
            <button onClick={e => scrollToPage("members")} className="nav-button">MEMBERS</button>
            <button onClick={e => scrollToPage("season2")} className="nav-button">2024 SEASON</button>
            <button onClick={e => scrollToPage("season")} className="nav-button">PAST SEASONS</button>
            <button onClick={e => scrollToPage("contact")} className="nav-button">CONTACT US</button>
        </div>
    );
}

export default Navbar;
