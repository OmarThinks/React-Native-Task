/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, Text} from 'react-native';

const Stack = createNativeStackNavigator();

function TestScreen(): JSX.Element {
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Text>Hey</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={TestScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
