import React from "react";
import Header from "../header/header";
import 'bootstrap/dist/css/bootstrap.min.css';
import { listTeachers } from "../../actions/qualifyTeachers/qualify";
import { useDispatch, useSelector } from "react-redux";

const Qualify = () => {
    const dispatch = useDispatch();
    const { listteachers } = useSelector((state) => state.listteachers);
    console.log("listteachers: ", listteachers);

    const listAllTeachers = () => {
        dispatch(listTeachers());
    }

    return (
        <div>
            <Header />
            <div className="container">
                <div className="row">
                    <button type="submit" onClick={listAllTeachers} className="btn btn-primary"> Get all teachers</button>
                </div>
            </div>
        </div>
    )
}

export default Qualify;