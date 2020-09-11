export const fakeAuth = {
  isAuthenticated: false,
  login(callBack) {
    fakeAuth.isAuthenticated = true;
    callBack();
  },
  logout(callBack) {
    fakeAuth.isAuthenticated = false;
    callBack();
  },
};
