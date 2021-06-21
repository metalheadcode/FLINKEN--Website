import React from "react";
import { useReducer } from "react";
import { CHANGE_THEME, DELIVER_FORM, LOADING } from "./types";
import FlinkenReducer from "./flinkenReducer";
import FlinkenContext from "./flinkenContext";

const FlinkenState = (props) => {
    const initialState = {
        dark: false,
        form: { name: null, message: null },
        loading: false,
    };

    const [state, dispatch] = useReducer(FlinkenReducer, initialState);

    // change theme from dark false to true
    const changeTheme = (theme) => {
        dispatch({ type: CHANGE_THEME, payload: theme });
    };

    // deliver message to whatsapp from contact forn

    // setLoading
    const setLoading = () => {
        dispatch({ type: LOADING });
    };

    return (
        <FlinkenContext.Provider
            value={{
                dark: state.dark,
                form: state.form,
                loading: state.loading,
                changeTheme,
                setLoading,
            }}
        >
            {props.children}
        </FlinkenContext.Provider>
    );
};

export default FlinkenState;
