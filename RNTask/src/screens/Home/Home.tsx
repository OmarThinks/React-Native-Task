import AppBar from '@root/components/AppBar/AppBar';
import {useAppTheme} from '@root/theme/theme';
import React from 'react';
import {SafeAreaView, ScrollView, StatusBar} from 'react-native';

const Home = () => {
  const colors = useAppTheme().colors;

  return (
    <SafeAreaView style={{backgroundColor: colors.appBg}}>
      <StatusBar />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={{
          //backgroundColor: colors.primary,
          minHeight: '100%',
        }}>
        <AppBar header="Restaurants" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
