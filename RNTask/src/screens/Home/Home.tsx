import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, Text} from 'react-native';
import {Button} from 'react-native-paper';
import AppBar from '@root/components/AppBar/AppBar';
import {useTheme} from 'react-native-paper';

const Home = () => {
  const colors = useTheme().colors;

  return (
    <SafeAreaView style={{backgroundColor: colors.appBg}}>
      <StatusBar />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={{
          //backgroundColor: colors.primary,
          minHeight: '100%',
        }}>
        <Text>Hey</Text>
        <Button icon="camera">Press me</Button>
        <AppBar header="Restaurants" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
