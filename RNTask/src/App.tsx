import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {Home} from './screens';
import {lightTheme} from './theme/theme';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <PaperProvider theme={lightTheme}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
