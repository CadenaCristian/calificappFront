import { typesLogin } from "../../types/types";

const initialState = {
    credentials: {},
    recovercredentials: {},
}

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case typesLogin.USERCREDENCIALS:
            return {
                ...state,
                credentials: action.payload,
            }
        case typesLogin.RECOVERCREDENCIALS:
            return {
                ...state,
                recovercredentials: action.payload,
            }
        default:
            return state
    }
}