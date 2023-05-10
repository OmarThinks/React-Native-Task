import {AppBar} from '@root/components';
import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, View} from 'react-native';
import {useAppTheme} from '../../theme/theme';
import MapView from 'react-native-maps';
import {Marker} from 'react-native-maps';

const RestaurantDetails = () => {
  const colors = useAppTheme().colors;

  return (
    <SafeAreaView style={{backgroundColor: colors.appBg}}>
      <View
        style={{
          minHeight: '100%',
        }}>
        <StatusBar />

        <AppBar header="Restaurants" hasBack />

        <View
          style={{
            //backgroundColor: 'red',
            flexGrow: 1,
          }}>
          <MapView
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            style={{
              width: '100%',
              //height: 500,
              flexGrow: 1,
            }}>
            <Marker coordinate={{latitude: 37.78825, longitude: -122.4324}} />
          </MapView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RestaurantDetails;
