import React from 'react';
import "./navbar.css"

function NavBar () {
    return (
        <nav>
            <ul className = "nav">
                <li className="horizontal"><a className="changeColor" href="Home">Home</a></li>
                <li className="horizontal"><a className="changeColor" href="ForSale">ForSale</a></li>
                <li className="horizontal"><a className="changeColor" href="Buylist">Buylist</a></li>
            </ul>
        </nav>
    )
}

export default NavBar