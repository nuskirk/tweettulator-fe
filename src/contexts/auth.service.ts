const fakeAuthService = ({
  isAuthenticated: false,
  signIn(callback: (error: Error | null) => void) {
    fakeAuthService.isAuthenticated = true;
    setTimeout(callback, 300);
  },
  signOut(callback: (error: Error | null) => void) {
    fakeAuthService.isAuthenticated = false;
    setTimeout(callback, 300);
  }
});

export { fakeAuthService };