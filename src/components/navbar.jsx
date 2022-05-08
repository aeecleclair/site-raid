import { Component } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

export function getCurrentDate(separator='/'){
  return new Date().getFullYear();
}

class CustomNavBar extends Component {
    state = {  }
    render() {
        return (
            <Navbar  collapseOnSelect  variant='light' expand="lg" bg="light">
                <Navbar.Brand className='logo-app' >
                    <div className="container-fluid">
                        <img
                        src={process.env.PUBLIC_URL + 'assets/logo.png'}
                        width='75'
                        height='70'
                        className='d-inline-block align-top'
                        alt='logo'
                        />
                    </div>
                </Navbar.Brand>
                <Navbar.Brand className='brand'>
                    <h2>Raid Centrale Lyon</h2>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className="navbar-toggler-css"/>
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-start">
                    <Nav>
                        <Nav.Link href='/' className='test'>Accueil</Nav.Link>
                        <Nav.Link href='/raid' className='test'>Raid {getCurrentDate()}</Nav.Link>
                        <Nav.Link href='/equipe' className='test'>L'équipe</Nav.Link>
                        <NavDropdown title="Partenaires" id="basic-nav-dropdown" className='test'>
                            <NavDropdown.Item href="/nos-partenaires">Nos Partenaires</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/devenir-partenaire">Devenir partenaire</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href='/infos-pratiques' className='test'>Infos Pratiques</Nav.Link>
                        <Nav.Link href ='/galerie' className='test'>Galerie</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse id="responsive-navbar-nav" className = "justify-content-end">
                    <Nav>
                        <Nav.Link href ='/inscription' className='test test2'>Inscription</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
export default CustomNavBar;