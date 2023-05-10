import {MD3LightTheme as DefaultTheme} from 'react-native-paper';
import {useTheme} from 'react-native-paper';

export const lightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    //primary: 'tomato',
    //secondary: 'yellow',
    buttonBg: '#00000',
    buttonIcon: '#FFFFF',
    header: '#000000',
    imageHeader: '#FFFFFF',
    smallButtonText: '#000000',
    appBg: '#FFFFFF',
  },
};

export type AppTheme = typeof lightTheme;

export const useAppTheme = () => useTheme<AppTheme>();
