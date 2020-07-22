import { UPDATE_USER_STATUS } from "../actions";

const initialState = {
  userStatus: 0,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USER_STATUS:
      const userStatus = action.userStatus;
      return {...state, userStatus};
    default:
      return state;
  }
};

export default userReducer;