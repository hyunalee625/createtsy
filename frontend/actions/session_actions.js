import * as sessionAPIUtil from "../util/session_api_util";


export const RECEIVE_USER = "RECEIVE_USER";
export const LOGOUT_USER = "LOGOUT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

// action creators 
export const receiveUser = user => ({
    type: RECEIVE_USER,
    user
});

export const logoutUser = () => ({
    type: LOGOUT_USER,
});

export const receiveErrors = errors => ({   // receives an array
    type: RECEIVE_ERRORS,
    errors
});


// thunk action creators
export const login = user => dispatch => {
    return sessionAPIUtil.login(user)
        .then(user => dispatch(receiveUser(user))
        ), error => dispatch(receiveErrors(error.responseJSON))
}

export const logout = () => dispatch => {
    return sessionAPIUtil.logout()
        .then(() => dispatch(logoutUser())
    )
}

export const signup = user => dispatch => {
    return sessionAPIUtil.signup(user)
        .then(user => dispatch(receiveUser(user))
        ), error => dispatch(receiveErrors(error.responseJSON))
}

