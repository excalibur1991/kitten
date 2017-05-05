export const Colors = {
  primary: '#f53d56',
  success: '#3bd555',
  foreground: '#212121',
  alterForeground: '#707070',
  overlayForeground: '#ffffff',
  secondaryText: '#bcbcbc',
  background: '#ffffff',
  faded: '#e5e5e5',
  alterBackground: '#f2f2f2',
  icon: '#c2c2c2',
  neutral: '#f2f2f2',
  hint: '#969696',
  overlay: '#00000057',
  gradient1: '#ff9147',
  gradient2: '#ff524c',
  twitter: '#41abe1',
  google: '#e94335',
  facebook: '#3b5998',
  //unused
  info: '#19bfe5',
  warning: '#feb401',
  danger: '#ed1c4d',
};

const FontBaseValue = 18;

export const KittenTheme = {
  colors: {
    primary: Colors.primary,
    primaryActive: Colors.primaryActive,
    success: Colors.success,
    successActive: Colors.successActive,
    info: Colors.info,
    infoActive: Colors.infoActive,
    warning: Colors.warning,
    warningActive: Colors.warningActive,
    danger: Colors.danger,
    dangerActive: Colors.dangerActive,
    foreground: Colors.foreground,
    background: Colors.background,
    overlay: Colors.overlay,
    text: {
      base: Colors.foreground,
      alter: Colors.alterForeground,
      secondary: Colors.secondaryText,
      overlay: Colors.overlayForeground
    },
    icon: {
      base: Colors.icon
    },
    back: {
      base: Colors.background,
      alternative: Colors.alterBackground,
      primary: Colors.primary,
      primaryActive: Colors.neutral,
      success: Colors.success,
      successActive: Colors.successActive,
      info: Colors.info,
      infoActive: Colors.infoActive,
      warning: Colors.warning,
      warningActive: Colors.warningActive,
      danger: Colors.danger,
      dangerActive: Colors.dangerActive,
      foreground: Colors.foreground,
      background: Colors.background,
      outline: 'transparent',
      material: Colors.primary,
      neutral: Colors.neutral,
      disabled: Colors.neutral,
      gradient1: Colors.gradient1,
      gradient2: Colors.gradient2,
    },
    border: {
      base: Colors.primary,
      underline: Colors.neutral,
      solid: '#0000003B',
      material: Colors.warning,
      disabled: Colors.neutral,
      card: '#00000014',
      hint: Colors.hint
    }
  },
  fonts: {
    sizes: {
      h1: 26,
      h2: 24,
      h3: 20,
      h4: 18,
      h5: 18,
      h6: 16,
      h7: 15,
      p1: 18,
      p2: 16,
      p3: 15,
      p4: 15,
      p5: 15,
      s1: 15,
      s2: 14,
      s3: 14,
      s4: 12,
      s5: 12,
      s6: 12,
      base: FontBaseValue,
      small: FontBaseValue * .8,
      medium: FontBaseValue,
      large: FontBaseValue * 1.2,
      xlarge: FontBaseValue / 0.75,
      xxlarge: FontBaseValue * 1.6,
    },
    family: {
      light: 'Roboto-Light',
      regular: 'Roboto-Regular',
      bold: 'Roboto-Medium'
    }
  }
};