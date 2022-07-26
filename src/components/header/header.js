import React from "react";
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPowerOff } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    const History = useHistory();
    const handleRedirect = (route) => { History.push(route) }
    const { credentials } = useSelector((state) => state.credentials);

    const logOut = () => {
        handleRedirect("/")
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <h3 className="mt-1 col-md-10" style={{ color: 'black' }}>{credentials.dataUser.name}</h3>
                    <button className="btn btn-danger col-md-2" onClick={logOut}>Log out <FontAwesomeIcon icon={faPowerOff} /></button>
                </nav>
            </div>
        </div>
    )
}

export default Header;