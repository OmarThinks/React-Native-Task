import AppBar from '@root/components/AppBar/AppBar';
import {useAppTheme} from '@root/theme/theme';
import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {TouchFiller} from '@root/components';

const Home = () => {
  const colors = useAppTheme().colors;
  const navigation = useNavigation();

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
        <View>
          <Text>Go to RestaurantDetails</Text>
          <TouchFiller
            onPress={() => {
              navigation.navigate('RestaurantDetails');
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
