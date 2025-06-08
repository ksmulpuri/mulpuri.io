import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    background: string;
    text: string;
    primary: string;
    primaryLight: string;
    secondary: string;
    accent: string;
    cardBackground: string;
    border: string;
    gradientStart: string;
    gradientEnd: string;
    navBackground: string;
    sectionAlt: string;
  }
}
