import * as sessionAPIUtil from "../util/session_api_util";


export const RECEIVE_USER = "RECEIVE_USER";
export const LOGOUT_USER = "LOGOUT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

// action creators 
export const receiveUser = currentUser => {
    // debugger
    return {
        type: RECEIVE_USER,
        currentUser
    }
};

export const logoutUser = () => {
    return { type: LOGOUT_USER }
};

export const receiveErrors = errors => {   // receives an array
    // debugger
    return {
        type: RECEIVE_ERRORS,
        errors
    }
};

export const removeErrors = () => {
    debugger
    return {
        type: CLEAR_ERRORS,
        errors: []
    }
};


// thunk action creators
export const login = user => dispatch => {
    // debugger
    return sessionAPIUtil.login(user)
        .then(user => dispatch(receiveUser(user))
    , err => (
        dispatch(receiveErrors(err.responseJSON))
    ))
}

export const logout = () => dispatch => {
    return sessionAPIUtil.logout()
        .then(() => dispatch(logoutUser())
    )
}

export const signup = user => dispatch => {
    return sessionAPIUtil.signup(user)
        .then(user => dispatch(receiveUser(user))
        , error => dispatch(receiveErrors(error.responseJSON))
        )
}

debugger
export const clearErrors = () => dispatch => dispatch(removeErrors())



