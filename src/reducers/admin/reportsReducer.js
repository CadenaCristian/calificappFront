import { typesAdminReports } from "../../types/types";

const initialState = {
    listquality: {},
}

export const adminReportsReducer = (state = initialState, action) => {
    switch (action.type) {
        case typesAdminReports.LISTQUALIFY:
            return {
                ...state,
                listquality: action.payload,
            }
        default:
            return state
    }
}