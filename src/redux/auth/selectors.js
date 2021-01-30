const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUsername = state => state.auth.user?.name;

const getIsRefreshing = state => state.auth.isFetchingCurrentUser;

const authSelectors = {
  getIsLoggedIn,
  getUsername,
  getIsRefreshing,
};
export default authSelectors;
