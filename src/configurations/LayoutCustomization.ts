import { ThemeConfig } from "antd";
import { ComponentsToken } from "antd/es/theme/context";

const lightLayout: Partial<ComponentsToken> = {
  Layout: {
    siderBg: "#FFF",
    headerBg: "#FFF",
    triggerBg: "#FFF",
    triggerColor: "#000",
  },
};

const darkLayout: Partial<ComponentsToken> = {
  Layout: {
    siderBg: "#181e24",
    headerBg: "#181e24",
    triggerBg: "#181e24",
  },
  Card: {
    colorBorderSecondary: "#1f252e",
  },
};

const componentsConfigs: ComponentsToken = {
  Menu: {
    darkItemBg: "#181e24",
    itemBg: "#FFF",
    darkSubMenuItemBg: "#1f262e",
    activeBarBorderWidth: 0,
  },
  Form: {
    controlHeightLG: 18,
    controlHeight: 16,
    controlHeightSM: 14,
    controlHeightXS: 12,
  },
  Button: {
    controlOutline: "rgba(0, 73, 153, 0)",
    controlTmpOutline: "rgba(255, 255, 255, 0)",
  },
  Table: {
    controlInteractiveSize: 16,
    cellPaddingBlock: 12,
    cellPaddingBlockMD: 10,
    cellPaddingBlockSM: 8,
  },
};

const customizationByThemeMode: {
  light: ThemeConfig;
  dark: ThemeConfig;
} = {
  light: {
    token: {
      colorBgLayout: "#f0f2f5",
      colorBgBase: "#FFF",
      colorTextBase: "#000",
      colorPrimary: "#F49C10",
      colorInfo: "#0984e3",
      colorSuccess: "#00b894",
      colorWarning: "#fdcb6e",
      colorError: "#d63031",
      borderRadius: 8,
    },
    components: { ...componentsConfigs, ...lightLayout },
  },
  dark: {
    token: {
      colorBgLayout: "#15191e",
      colorBgBase: "#181e24",
      colorTextBase: "FFF",
      colorPrimary: "#F49C10",
      colorInfo: "#0984e3",
      colorSuccess: "#00b894",
      colorWarning: "#fdcb6e",
      colorError: "#d63031",
      borderRadius: 8,
    },
    components: { ...componentsConfigs, ...darkLayout },
  },
};

export default function LayoutCustomization(themeMode: "dark" | "light") {
  return customizationByThemeMode[themeMode];
}
