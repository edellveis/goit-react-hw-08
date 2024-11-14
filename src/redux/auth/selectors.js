export const selectisLoggedIn = (state) => state.auth.isLoggedIn;
export const selectUserName = (state) => state.auth.userData.name;
export const selectisRefreshing = (state) => state.auth.isRefreshing;