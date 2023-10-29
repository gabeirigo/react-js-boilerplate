type LayoutActionsType =
  | { type: "setCollapedSidebar"; payload: boolean }
  | { type: "setThemeMode"; payload: "light" | "dark" };

export default LayoutActionsType;
