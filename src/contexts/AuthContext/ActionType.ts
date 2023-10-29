type Actions =
  | { type: "setIsLogged"; payload: boolean }
  | { type: "setSub"; payload: string }
  | { type: "setAccessToken"; payload: string };

export default Actions;
