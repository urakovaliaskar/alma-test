export const isAuthenticated = (): boolean => {
  const token = localStorage.getItem("authToken");
  return !!token;
};

export const login = (token: string): void => {
  localStorage.setItem("authToken", token);
};

export const logout = (): void => {
  localStorage.removeItem("authToken");
};
