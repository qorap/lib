import React from 'react';

import {Link, IndexLink} from 'react-router';
import Navlink from './components/Navlink.jsx';

class App extends React.Component {
    render() {
        return (
            <div className="mdl-layout mdl-layout--no-drawer-button mdl-layout--fixed-header">
                <header className="mdl-layout__header">
                    <div className="mdl-layout__header-row">
                        <span className="mdl-layout-title">LibraryJS</span>
                        <span className="mdl-layout-spacer"></span>
                        <nav className="mdl-navigation">
                            <Navlink to="/" onlyActiveOnIndex={true} className="mdl-navigation__link">Главная</Navlink>
                            <Navlink to="/about" className="mdl-navigation__link">О проекте</Navlink>
                            <Navlink to="/books" className="mdl-navigation__link">Книги</Navlink>
                        </nav>
                    </div>
                </header>

                <main className="mdl-layout__content">
                    {this.props.children}
                </main>
            </div>
        );
    }
}

export default App;