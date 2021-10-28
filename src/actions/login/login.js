import { fetchApi } from "../../helpers/fetch/fetch";
import { typesLogin } from "../../types/types";
//Log in
export const loginUser = (obj) => {
    return async (dispatch) => {
        const endpoint = `login`
        const resp = await fetchApi(endpoint, 'POST', obj);
        const body = await resp.json();
        try {
            dispatch({ type: typesLogin.USERCREDENCIALS, payload: body })
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