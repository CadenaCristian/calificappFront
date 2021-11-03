import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, retrivePasswordUser } from '../../actions/login/login';
import { listTeachers } from '../../actions/qualifyTeachers/qualify';


const Login = () => {
    const dispatch = useDispatch();
    const History = useHistory();
    const handleRedirect = (route) => { History.push(route) }
    const { credentials } = useSelector((state) => state.credentials);
    // const { recovercredentials } = useSelector((state) => state.recovercredentials);
    const [visLogin, setvisLogin] = useState('block')
    const [visForgetpass, setvisForgetpass] = useState('none')
    const [dataUserValue, setdataUserValue] = useState({ user: "", password: "", email: "" })
    const { user, password, email } = dataUserValue;

    const setDataUser = ({ target }) => {
        setdataUserValue({
            ...dataUserValue,
            [target.name]: target.value,
        });
    }

    const logIn = () => {
        dispatch(loginUser(dataUserValue));
        if (credentials.error === false) {
            dispatch(listTeachers());
            handleRedirect("/qualify")
        }
    }
    const retrivePassword = () => {
        dispatch(retrivePasswordUser(dataUserValue));
    }


    const changeForm = () => {
        if (visLogin === 'block' && visForgetpass === 'none') {
            setvisLogin('none')
            setvisForgetpass('block')
        } else {
            setvisLogin('block')
            setvisForgetpass('none')
        }
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8 text-center">
                    <h1 style={{ fontWeight: '900', marginTop: '30%' }}>CalificAPP</h1>
                </div>
                <div className="col-md-4" style={{ display: visLogin }}>
                    <div className="login-box">
                        <h2>Login</h2>
                        <form>
                            <div className="user-box">
                                <input type="text" name="user" onChange={setDataUser} value={user} />
                                <label>Username</label>
                            </div>
                            <div className="user-box">
                                <input type="password" name="password" onChange={setDataUser} value={password} />
                                <label>Password</label>
                            </div>
                            <div className="row">
                                <button type="button" className="col-md-6" onClick={logIn} style={{ backgroundColor: 'transparent', border: '0px' }} >Log in</button>
                                <button type="button" className="col-md-6" onClick={changeForm} style={{ backgroundColor: 'transparent', border: '0px' }} >Forget password</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-md-4" style={{ display: visForgetpass }}>
                    <div className="login-box">
                        <h2>Retrieve password</h2>
                        <form>
                            <div className="user-box">
                                <input type="text" name="user" onChange={setDataUser} value={user} />
                                <label>Username</label>
                            </div>
                            <div className="user-box">
                                <input type="text" name="email" onChange={setDataUser} value={email} />
                                <label>Email Address</label>
                            </div>
                            <div className="user-box">
                                <input type="password" name="password" onChange={setDataUser} value={password} />
                                <label>New Password</label>
                            </div>
                            <div className="row">
                                <button type="button" className="col-md-6" onClick={retrivePassword} style={{ backgroundColor: 'transparent', border: '0px' }} >Retrieve password</button>
                                <button type="button" className="col-md-6" onClick={changeForm} style={{ backgroundColor: 'transparent', border: '0px' }} >Back Log in</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;