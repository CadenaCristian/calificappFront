import React, { useState } from "react";
import Header from "../header/header";
import { insertQualify, listTeachers } from "../../actions/qualifyTeachers/qualify";
import { useDispatch, useSelector } from "react-redux";
import { Rating } from 'react-simple-star-rating'
import 'bootstrap/dist/css/bootstrap.min.css';
import './qualify.css'

const Qualify = () => {
    const dispatch = useDispatch();
    const { listteachers } = useSelector((state) => state.listteachers);
    const { credentials } = useSelector((state) => state.credentials);
    console.log("credentials: ", credentials)
    const [rating, setRating] = useState([])


    const listAllTeachers = () => {
        dispatch(listTeachers());
    }
    const handleRating = (rate, index) => {
        let obj = { nStart: rate }
        let copy = rating
        copy[index] = obj
        setRating([...copy])
    }
    const changeFeedback = (e, index) => {
        let copy = rating
        copy[index].feedback = e.target.value
        setRating([...copy]);
    }
    const insertQuality = (e) => {
        let position = e.target.id
        let obj = {
            "student_name": credentials.dataUser.name,
            "student_email": credentials.dataUser.email,
            "student_dni": credentials.dataUser.dni,
            "teacher_name": listteachers.data[position].name,
            "teacher_email": listteachers.data[position].email,
            "teacher_dni": listteachers.data[position].dni,
            "teacher_note": rating[position].nStart,
            "feedback": rating[position].feedback
        }
        dispatch(insertQualify(obj));
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
                                                    <Rating onClick={rate => handleRating(rate, index)} ratingValue={rating[index]?.nStart} />
                                                </div>
                                                <label>Feedback</label>
                                                <textarea className="sizeAll" onChange={(e) => { changeFeedback(e, index) }} disabled={rating[index]?.nStart > 0 ? false : true} value={rating[index]?.feedback} />
                                                <button className="btn btn-success sizeAll" id={index} onClick={e => { insertQuality(e) }} disabled={rating[index]?.feedback?.length ? false : true} >Send Qualify</button>
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