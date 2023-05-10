import {View, Text} from 'react-native';
import React from 'react';
import {TouchableRipple} from 'react-native-paper';

const TouchFiller = ({onPress}: {onPress?: () => void}) => {
  if (onPress === undefined) {
    return null;
  }

  return (
    <View>
      <Text>TouchFiller</Text>
    </View>
  );
};

export default TouchFiller;
