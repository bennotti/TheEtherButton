import React, { Component } from 'react'

import '../../css/oswald.css'
import '../../css/open-sans.css'
import '../../css/pure-min.css'
import './styles.css'

class Header extends Component {
    render() {
        return(
            <div>
                <nav className="navbar pure-menu pure-menu-horizontal">
                    <a href="#" className="pure-menu-heading pure-menu-link navbar-left">The Ether Button</a>
                    <a href="#" className="pure-menu-heading pure-menu-link navbar-right">0x0123456789...</a>
                </nav>
            </div>
        );
    }
}

export default Header