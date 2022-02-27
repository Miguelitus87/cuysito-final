import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom';
import { CartWidget } from './CartWidget'

export const NavBar = () =>{
    return (
        <>
            <div className="NavBar">
                <div className="NavBarTitulos">
                    <Link to="/" style={{textDecoration: 'none'}}><h1 className="cuysito">C U Y S I T O</h1></Link>
                    <h6>Tienda de ropa</h6>
                </div>
                <br/>
                <div className="Buttons">
                    <div>
                        <Link to="/categoria/remeras"><button type="button" className="btn btn-warning btn-lg">Remeras</button></Link>
                        <Link to="/categoria/camisas"><button type="button" className="btn btn-warning btn-lg">Camisas</button></Link>
                        <Link to="/categoria/chombas"><button type="button" className="btn btn-warning btn-lg">Chombas</button></Link>
                        <Link to="/categoria/pantalones"><button type="button" className="btn btn-warning btn-lg">Pantalones</button></Link>
                        
                    </div>
                    <div>
                        <CartWidget />
                    </div>
                </div>
            </div>
        </>
    );
}

