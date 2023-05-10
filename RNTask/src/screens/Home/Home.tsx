import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, Text} from 'react-native';
import {Button} from 'react-native-paper';

const Home = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Text>Hey</Text>
        <Button icon="camera">Press me</Button>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
