import { theme, ThemeConfig } from 'antd';

const customTheme: ThemeConfig = {
  ...theme.defaultConfig,
  token: {
    ...theme.defaultConfig.token,
    colorInfo: '#3abff8',
    colorPrimary: '#661ae6',
    colorSuccess: '#36d399',
    colorError: '#f87272',
    colorTextBase: '#000000',
    colorWarning: '#fbbd23',
    // colorBgBase: '#2a303c',
    borderRadius: 8,
    controlHeight: 42,
    fontFamilyCode: 'Noto Sans Thai',
    fontSize: 16,
  },
};

export { customTheme };
