import React, { createContext, useReducer } from "react";
import LayoutActionsType from "./LayoutActionsType";
import LayoutStateType from "./LayoutStateType";

const initialState: LayoutStateType = {
  collapsed: false,
  themeMode: "light",
};

function reducer(
  state: LayoutStateType,
  action: LayoutActionsType
): LayoutStateType {
  switch (action.type) {
    case "setCollapedSidebar":
      return { ...state, collapsed: action.payload };
    case "setThemeMode":
      return { ...state, themeMode: action.payload };
    default:
      throw new Error(`Ação de contexto desconhecida`);
  }
}

export const LayoutContext = createContext<{
  state: LayoutStateType;
  dispatch: React.Dispatch<LayoutActionsType>;
}>({
  state: initialState,
  dispatch: () => null,
});

export const LayoutProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <LayoutContext.Provider value={{ state, dispatch }}>
      {children}
    </LayoutContext.Provider>
  );
};
