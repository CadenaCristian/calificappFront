import { fetchApi } from "../../helpers/fetch/fetch";
import { typesAdminReports } from "../../types/types";

export const adminReports = () => {

    return async (dispatch) => {
        const endpoint = `listTeacherNotes`
        const resp = await fetchApi(endpoint, 'GET');
        const body = await resp.json();
        console.log(body);
        try {
            dispatch({ type: typesAdminReports.LISTQUALIFY, payload: body })
        } catch (error) {
            console.log("error: ", error)
        }
    }

}