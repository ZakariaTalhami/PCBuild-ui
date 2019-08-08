import React from 'react';
import { Link } from 'react-router-dom'
import './style.css'

class Navbar extends React.Component {

    render() {
        return (
            <div className="navbar">
                <div className="container">
                    <div className="logo">
                        PC Buildatron
                    </div>
                    <div className="nav">
                        <Link to="/">Home</Link>
                        <Link to="/build">Build</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navbar;