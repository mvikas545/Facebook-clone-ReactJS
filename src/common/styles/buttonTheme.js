import theme from "./theme";

const buttonTheme = {
  colorMapping: {
    primary: {
      bgColor: theme.colors.PRIMARY,
      bgHover: theme.colors.PRIMARY_HIGHLIGHT,
      color: theme.colors.WHITE_HIGH,
    },
    gray: {
      bgColor: theme.colors.GRAY_DISABLE,
      bgHover: theme.colors.GRAY_DISABLE,
      color: theme.colors.GRAY_HIGH,
    },
    success: {
      bgColor: theme.colors.SUCCESS,
      bgHover: theme.colors.SUCCESS_HIGH,
      color: theme.colors.WHITE_HIGH,
    },
  },
};
export default buttonTheme;
