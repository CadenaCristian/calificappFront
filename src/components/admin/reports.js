import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { adminReports } from '../../actions/admin/admin';
import Header from '../header/header'
import 'bootstrap/dist/css/bootstrap.min.css';

const Reports = () => {
    const dispatch = useDispatch();
    const { listquality } = useSelector((state) => state.listquality);
    const [showDetails, setshowDetails] = useState(false);
    const [especificData, setespecificData] = useState([]);

    const listQualityTeachers = () => {
        dispatch(adminReports());
    }

    const showData = (index) => {
        setespecificData([])
        setespecificData([listquality.data[index]]);
        setshowDetails(true);
        console.log("especificData: ", especificData);
    }

    return (
        <div>
            <Header />
            <div className="container-fluid">
                <div className="row mt-3">
                    <div className="col-md-7">
                        {listquality.data === undefined ?
                            <div>
                                <h1>No hay calificaciones por el momento</h1>
                            </div>
                            : <table className="table">
                                <thead className="table-dark">
                                    <tr>
                                        <th className="text-center">Nombre instructor</th>
                                        <th className="text-center">Email instructor</th>
                                        <th className="text-center">Id instructor</th>
                                        <th className="text-center">Notas</th>
                                        <th className="text-center">Acciones</th>
                                    </tr>
                                </thead>
                                <tbody className="">
                                    {listquality.data.map((elemnt, index) => {
                                        return (
                                            <tr key={index} style={{ backgroundColor: '#F5F5F5', color: 'black' }}>
                                                <td className="text-center">{elemnt.teacher_name}</td>
                                                <td className="text-center">{elemnt.teacher_email}</td>
                                                <td className="text-center">{elemnt.teacher_dni}</td>
                                                <td className="text-center">{elemnt.teacher_note}</td>
                                                <td className="text-center">
                                                    <button className="btn btn-success" onClick={() => showData(index)}>Ver detalles</button>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>}

                    </div>
                    <div className="col-md-4 offset-1">
                        {showDetails === false ?
                            <div><h3>Por favor haga click en ver detalles</h3></div>
                            : <div className="card" style={{ width: '18rem' }}>
                                <div class="card-header">
                                    Datos de la calificación
                                </div>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">
                                        <label>Nombre del estudiante:</label>
                                        <br />{especificData[0]?.student_name}
                                    </li>
                                    <li class="list-group-item">
                                        <lable>Correo del estudiante:</lable>
                                        <br />{especificData[0]?.student_email}
                                    </li>
                                    <li class="list-group-item">
                                        <label>ID del estudiante:</label>
                                        <br />{especificData[0]?.student_dni}
                                    </li>
                                    <li class="list-group-item">
                                        <label>Nombre del instructor:</label>
                                        <br />{especificData[0]?.teacher_name}
                                    </li>
                                    <li class="list-group-item">
                                        <label>Correo del instructor</label>
                                        <br />{especificData[0]?.teacher_email}
                                    </li>
                                    <li class="list-group-item">
                                        <label>ID del instructor</label>
                                        <br />{especificData[0]?.teacher_dni}
                                    </li>
                                    <li class="list-group-item">
                                        <label>Nota del instructor:</label>
                                        <br />{especificData[0]?.teacher_note}
                                    </li>
                                    <li class="list-group-item">
                                        <label>feedback del estudiante:</label>
                                        <br />{especificData[0]?.feedback}
                                    </li>
                                </ul>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reports;