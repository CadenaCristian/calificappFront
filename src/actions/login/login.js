import { fetchApi } from "../../helpers/fetch/fetch";
import { typesLogin } from "../../types/types";
import Swal from "sweetalert2";

//Log in
export const loginUser = (obj) => {
    return async (dispatch) => {
        const endpoint = `login`
        const resp = await fetchApi(endpoint, 'POST', obj);
        const body = await resp.json();
        try {
            dispatch({ type: typesLogin.USERCREDENCIALS, payload: body })
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
            console.log("error: ", error)
        }
    }
}
//Retrive password
export const retrivePasswordUser = (obj) => {
    return async (dispatch) => {
        const endpoint = `recoverPassword`
        const resp = await fetchApi(endpoint, 'PUT', obj);
        const body = await resp.json();
        try {
            dispatch({ type: typesLogin.RECOVERCREDENCIALS, payload: body })
        } catch (error) {
            console.log("error: ", error)
        }
    }
}