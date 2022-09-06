import './Navbar.css'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import { CartWidget } from './CartWidget/CartWidget.js';
import { Link } from 'react-router-dom'




export const NavBar = () => {
    return (
        <><header className="header">
            <nav className="nav">
                <div>
                   <Link to="/"><img src={'../img/logo_meraki.png'} alt="logo" width="180" height="125" /></Link>
                </div>
                <div>
                    <Nav >
                        <Link to='/produ/burbuja' className="link"> Burbujas </Link>
                        <Link to='/produ/caja' className="link"> Cajas </Link>
                        <Link to='/produ/flores' className="link"> Flores </Link>
                        <Link to='/produ/personal' className="link"> Personalizado </Link>
                        <Link to='/produ/pinata' className="link"> Piñatas </Link>
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