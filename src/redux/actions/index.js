export const UPDATE_USER_STATUS = 'UPDATE_USER_STATUS';

export const updateUserStatus = userStatus => ({
  type: UPDATE_USER_STATUS,
  userStatus,
});