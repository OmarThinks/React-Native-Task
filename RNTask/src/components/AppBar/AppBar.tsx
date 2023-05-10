import React from 'react';
import {Text, View} from 'react-native';

const AppBar = ({
  header,
  hasBack = false,
}: {
  header: string;
  hasBack: boolean;
}) => {
  return (
    <View
      style={{
        height: 70,
        flexDirection: 'row',
        alignSelf: 'stretch',
        justifyContent: 'space-between',
      }}>
      <Text>AppBar</Text>
    </View>
  );
};

export default AppBar;
