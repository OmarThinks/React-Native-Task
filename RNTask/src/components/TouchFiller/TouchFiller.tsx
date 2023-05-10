import React from 'react';
import {View} from 'react-native';
import {TouchableRipple} from 'react-native-paper';

const TouchFiller = ({onPress}: {onPress?: () => void}) => {
  if (onPress === undefined) {
    return null;
  }

  return (
    <TouchableRipple
      style={{
        alignSelf: 'stretch',
        flexGrow: 1,
        zIndex: 1,
        position: 'absolute',
        width: '100%',
        height: '100%',
      }}
      onPress={onPress}>
      <View />
    </TouchableRipple>
  );
};

export default TouchFiller;
