import * as UserAPIUtil from "../util/user_api_util";

export const RECEIVE_USER_PROFILE = "RECEIVE_USER_PROFILE";

const receiveUser = (user) => ({
  type: RECEIVE_USER_PROFILE,
  user
});

export const fetchUser = (userId) => dispatch => {
    return UserAPIUtil.fetchUser(userId).then((user) => dispatch(receiveUser(user)))};

// export const updateUser = (user) => dispatch => {
//     return UserAPIUtil.updateUser(user).then((user) => dispatch(receiveUser(user)));
// }
