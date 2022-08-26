import './Navbar.css'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import { CartWidget } from './CartWidget/CartWidget.js';

export const NavBar = () => {
    return (
        <><header className="header">
            <nav className="nav">
                <div>
                    <img src={'./img/logo_meraki.png'} alt="logo" width="180" height="125" />
                </div>
                <div>
                    <Nav
                        activeKey="/home"
                        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
                    >
                        <Nav.Item>
                            <Nav className="link"> Productos </Nav>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav className="link">Procesos</Nav>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav className="link">Nosotros</Nav>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav className="link">Ubicacion</Nav>
                        </Nav.Item>
                    </Nav>
                </div>

                <div className='btn'>
                    <Button variant="light">Inicia Sesion</Button>{' '}
                    <Button variant="light">Registrate</Button>{' '}
                </div>
                <div className='btnCar'>
                    <CartWidget />
                </div>
            </nav>
        </header>
        </>
    )
}