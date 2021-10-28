import { typesQualifyTeacher } from "../../types/types";

const initialState = {
    listteachers: {},
}

export const qualifyTeachersReducer = (state = initialState, action) => {
    switch (action.type) {
        case typesQualifyTeacher.LISTTEACHERS:
            return {
                ...state,
                listteachers: action.payload,
            }
        default:
            return state
    }
}