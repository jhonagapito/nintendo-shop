import React from 'react';
import { Container } from 'reactstrap';


const Header: React.FC = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <Container>
                    <a className="navbar-brand" href="#"><img src="/images/logo.png" /></a>
                </Container>
            </nav>
        </div>

    );
}

export default Header;