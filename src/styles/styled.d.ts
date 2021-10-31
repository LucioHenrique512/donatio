import 'styled-components/native';
import {ThemeType} from './themes';

export type Theme = ThemeType;

declare module 'styled-components/native' {
  export interface DefaultTheme extends Theme {}
}