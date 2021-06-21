import { data } from "jquery";
import { CHANGE_THEME, DELIVER_FORM, LOADING } from "./types";

export default (state, action) => {
    switch (action.type) {
        case CHANGE_THEME:
            return {
                ...state,
                dark: action.payload,
            };
        case DELIVER_FORM:
            return {
                ...state,
                message: action.payload,
            };
        case LOADING:
            return {
                ...state,
                loading: true,
            };
        default:
            return state;
    }
};
