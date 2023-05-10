import AppBar from '@root/components/AppBar/AppBar';
import {useAppTheme} from '@root/theme/theme';
import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {TouchFiller} from '@root/components';
import {useQuery, useQueryClient} from '@tanstack/react-query';
import axios from 'axios';
import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then(res => res.json());

const token =
  'Jw0oIMgpId1HV8x-mogAapr36SVRDSAM00qOEvAmLyxCaOV1I0T6kzJbSvazjA6Q7sNS46uHfHzRzLLAESkHYv3ES50h-sUQwtwvh836OsN-D5UwO6ObMswyxDM6YXYx';

const config = {
  headers: {Authorization: `Bearer ${token}`},
};

const bodyParameters = {
  key: 'value',
};

const instance = axios.create({
  baseURL: 'https://api.yelp.com/v3/',
  timeout: 10000,
  headers: {Authorization: 'Bearer ' + token},
});

const getData = axios
  .get('https://api.github.com/repos/tannerlinsley/react-query')
  .then(res => res.data);

const Home = () => {
  const colors = useAppTheme().colors;
  const navigation = useNavigation();

  const queryClient = useQueryClient();

  const {data, error, isLoading} = useSWR(
    'https://api.yelp.com/v3/businesses/search',
    fetcher,
  );

  let toRender = null;

  if (!error && !isLoading) {
    toRender = <></>;
  }

  /*
  const {data, isError, isFetched, error} = useQuery({
    queryKey: ['todos'],
    queryFn: getData,
  });*/

  console.log('data', data);
  //console.log('isError', isError);
  //console.log('isFetched', isFetched);
  console.log('isLoading', isLoading);
  console.log('error', error);
  console.log('------------------------------------');

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
        <View
          style={{
            height: 100,
            backgroundColor: 'lime',
            borderRadius: 20,
            overflow: 'hidden',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text>Go to RestaurantDetails screen</Text>
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
