 const Values = {
  primary: '#f53d56',
  success: '#3bd555',
  info: '#19bfe5',
  warning: '#feb401',
  danger: '#ed1c4d',
  foreground: '#212121',
  background: '#f2f2f2',
  overlay: '#00000057',
  fontSize: 18,
  neutral: '#0000001A'
};

export const KittenTheme = {
  colors: {
    primary: Values.primary,
    primaryActive: Values.primaryActive,
    success: Values.success,
    successActive: Values.successActive,
    info: Values.info,
    infoActive: Values.infoActive,
    warning: Values.warning,
    warningActive: Values.warningActive,
    danger: Values.danger,
    dangerActive: Values.dangerActive,
    foreground: Values.foreground,
    background: Values.background,
    overlay: Values.overlay,

    text: {
      base: Values.foreground,
      additional: Values.background,
      subtitle: Values.foreground,
      hint: '#0000008e'
    },
    back: {
      base: Values.background,
      primary: Values.primary,
      primaryActive: Values.primaryActive,
      success: Values.success,
      successActive: Values.successActive,
      info: Values.info,
      infoActive: Values.infoActive,
      warning: Values.warning,
      warningActive: Values.warningActive,
      danger: Values.danger,
      dangerActive: Values.dangerActive,
      foreground: Values.foreground,
      background: Values.background,
      outline: 'transparent',
      material: Values.primary,
      disabled: Values.neutral
    },
    border: {
      base: Values.primary,
      underline: Values.neutral,
      solid: '#0000003B',
      material: Values.warning,
      disabled:Values.neutral,
      card: '#00000014'
    }
  },
  fonts: {
    sizes: {
      base: Values.fontSize,
      small: Values.fontSize * .8,
      medium: Values.fontSize,
      large: Values.fontSize * 1.2,
      xlarge: Values.fontSize / 0.75,
      xxlarge: Values.fontSize * 1.6,
    }
  }
};