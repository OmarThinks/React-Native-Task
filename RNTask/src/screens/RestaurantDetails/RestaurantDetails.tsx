import {AppBar} from '@root/components';
import React from 'react';
import {SafeAreaView, ScrollView, StatusBar} from 'react-native';
import {useAppTheme} from '../../theme/theme';
import MapView from 'react-native-maps';

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

        <MapView
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          style={{
            width: '100%',
            height: 300,
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default RestaurantDetails;
