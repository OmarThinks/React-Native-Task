import AppBar from '@root/components/AppBar/AppBar';
import React from 'react';
import {SafeAreaView, ScrollView, StatusBar} from 'react-native';
import {useAppTheme} from '@root/theme/theme';

const RestaurantDetails = () => {
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
        <AppBar header="Restaurants" hasBack />
      </ScrollView>
    </SafeAreaView>
  );
};

export default RestaurantDetails;
