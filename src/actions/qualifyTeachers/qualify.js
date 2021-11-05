import { fetchApi } from "../../helpers/fetch/fetch";
import { typesQualifyTeacher } from "../../types/types";
import Swal from "sweetalert2";

//List all teachers
export const listTeachers = () => {
    return async (dispatch) => {
        const endpoint = `listTeachers`
        const resp = await fetchApi(endpoint, 'GET');
        const body = await resp.json();
        try {
            dispatch({ type: typesQualifyTeacher.LISTTEACHERS, payload: body })
        } catch (error) {
            console.log("error: ", error)
        }
    }
}
//Insert new qualify
export const insertQualify = (obj) => {
    console.log("obj: ", obj)
    return async (dispatch) => {
        const endpoint = `inserTeacherNotes`
        const resp = await fetchApi(endpoint, 'POST', obj);
        const body = await resp.json();
        console.log("body: ", body);
        try {
            dispatch({ type: typesQualifyTeacher.INSERTTEACHERS, payload: body })
            if (body.error === false) {
                Swal.fire({
                    title: 'Success',
                    type: 'success',
                    text: body.message,
                })
            } else {
                Swal.fire({
                    title: 'Error',
                    type: 'danger',
                    text: body.message,
                });
            }

        } catch (error) {
            console.log(error)
        }
    }
}