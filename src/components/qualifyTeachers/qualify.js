import React, { useState } from "react";
import Header from "../header/header";
import 'bootstrap/dist/css/bootstrap.min.css';
import { listTeachers } from "../../actions/qualifyTeachers/qualify";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as faRegular } from '@fortawesome/free-regular-svg-icons'
import './qualify.css'

const Qualify = () => {
    const dispatch = useDispatch();
    const { listteachers } = useSelector((state) => state.listteachers);
    console.log("listteachers: ", listteachers);

    const starFullColor = <FontAwesomeIcon icon={faStar} style={{ color: 'yellow' }} />
    const starWithoutColor = <FontAwesomeIcon icon={faRegular} style={{ color: 'yellow' }} />
    // const [starState, setstarState] = useState({ firstStar: starWithoutColor, secondStar: starWithoutColor, thirdStar: starWithoutColor, fourStar: starWithoutColor, fiveStar: starWithoutColor })
    // const { firstStar, secondStar, thirdStar, fourStar, fiveStar } = '';
    const [starState, setstarState] = useState([
        { name: starWithoutColor },
        { name: starWithoutColor },
        { name: starWithoutColor },
        { name: starWithoutColor },
        { name: starWithoutColor }
    ])

    const listAllTeachers = () => {
        dispatch(listTeachers());
    }

    const changeStar = () => {
        console.log("Enttre");
        for (var i = 0; i < starState.length; i++) {
            setstarState(starState => [...starState, starState[i].name]);
            console.log("Si hago algo")
        }
    }

    return (
        <div>
            <Header />
            <div className="container">
                <div className="row justify-content-md-center">
                    {listteachers.data === undefined ?
                        <div><h1>No hay profesores por el momento</h1></div>
                        : listteachers.data.map((elemnt, index) => {
                            return (
                                <div className="flip-card mt-3" key={index} tabIndex="0">
                                    <div className="flip-card-inner">
                                        <div className="flip-card-front">
                                            <img src={`data:image/png;base64,${elemnt.img}`} style={{ width: '70%', margin: 'auto' }} />
                                            <div className="card-body">
                                                <h3 className="card-text" >{elemnt.name}</h3>
                                            </div>
                                        </div>
                                        <div className="flip-card-back">
                                            <div className="card-body">
                                                <h3 className="card-text" >{elemnt.name}</h3>
                                                <div className="row justify-content-md-center col-md-12">
                                                    {starState.map((posiStar, index) => {
                                                        return (
                                                            <div key={index} className="col-md-2" onClick={changeStar}>{posiStar.name}</div>
                                                        )
                                                    })}
                                                </div>
                                                <label>Feedback</label>
                                                <textarea className="sizeAll" />
                                                <button className="btn btn-success sizeAll" >Send Qualify</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                </div>
            </div>
        </div>
    )
}

export default Qualify;