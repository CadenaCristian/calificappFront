import { fetchApi } from "../../helpers/fetch/fetch";
import { typesQualifyTeacher } from "../../types/types";

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