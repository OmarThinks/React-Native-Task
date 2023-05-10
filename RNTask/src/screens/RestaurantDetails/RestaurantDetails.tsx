import {AppBar} from '@root/components';
import React from 'react';
import {SafeAreaView, ScrollView, StatusBar} from 'react-native';
import {useAppTheme} from '../../theme/theme';

const RestaurantDetails = () => {
  const colors = useAppTheme().colors;

  return (
    <SafeAreaView style={{backgroundColor: colors.appBg}}>
      <StatusBar />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={{
          minHeight: '100%',
        }}>
        <AppBar header="Restaurants" hasBack />
      </ScrollView>
    </SafeAreaView>
  );
};

export default RestaurantDetails;
