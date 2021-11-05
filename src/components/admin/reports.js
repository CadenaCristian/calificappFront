import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { adminReports } from '../../actions/admin/admin';
import Header from '../header/header'
import 'bootstrap/dist/css/bootstrap.min.css';

const Reports = () => {
    const dispatch = useDispatch();
    const { listquality } = useSelector((state) => state.listquality);

    console.log("listquality: ", listquality)
    const listQualityTeachers = () => {
        dispatch(adminReports());
    }

    return (
        <div>
            <Header />
            <div className="container">
                <table className="table">
                    <thead className="table-dark">
                        <tr>
                            <th>Nombre instructor</th>
                            <th>Email instructor</th>
                            <th>Id instructor</th>
                            <th>Notas</th>
                            <th>Retroalimentación</th>
                        </tr>
                    </thead>
                    <tbody className="">
                        {listquality.data.map((elemnt, index) => {
                            return (
                                <tr>
                                    <td>{elemnt.teacher_name}</td>
                                    <td>{elemnt.teacher_email}</td>
                                    <td>{elemnt.teacher_dni}</td>
                                    <td>{elemnt.teacher_note}</td>
                                    <td>{elemnt.feedback}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Reports;