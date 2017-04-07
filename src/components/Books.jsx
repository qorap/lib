import React from 'react';
import Navlink from './Navlink.jsx';

function Books(props) {
    return (
        <section className="content books">
            <div className="mdl-tabs">
                <div className="mdl-tabs__tab-bar">
                    <Navlink to="/books/javascript" className="mdl-tabs__tab">JavaScript</Navlink>
                    <Navlink to="/books/react" className="mdl-tabs__tab">React</Navlink>
                    <Navlink to="/books/angular" className="mdl-tabs__tab">Angular</Navlink>
                </div>
                
                <div className="mdl-tabs__panel">
                    {props.children}
                </div>
            </div>
        </section>
    );
}

export default Books;