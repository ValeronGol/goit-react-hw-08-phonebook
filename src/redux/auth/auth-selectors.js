const getIsLoggedIn = state => state.auth.isLoggedIn;
const getError = state => state.auth.isError;
const getUsername = state => state.auth.user.name;

const authSelectors = {
  getIsLoggedIn,
  getUsername,
  getError,
};
export default authSelectors;
