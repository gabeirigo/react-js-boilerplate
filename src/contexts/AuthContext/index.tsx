import React, { createContext, useEffect, useReducer } from "react";
import Actions from "./ActionType";
import State from "./StateType";

const initialState: State = {
  isLogged: true,
};

function reducer(state: State, action: Actions): State {
  switch (action.type) {
    case "setIsLogged":
      return { ...state, isLogged: action.payload };
    case "setSub":
      return { ...state, sub: action.payload };
    default:
      throw new Error(`Ação de contexto desconhecida`);
  }
}

export const AuthContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Actions>;
}>({
  state: initialState,
  dispatch: () => null,
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (sessionStorage.getItem("@ImobiGS:accessToken")) {
      dispatch({ type: "setIsLogged", payload: true });
      return;
    }

    dispatch({ type: "setIsLogged", payload: false });
  }, []);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
