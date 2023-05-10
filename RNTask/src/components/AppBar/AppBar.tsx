import React from 'react';
import {Text, View} from 'react-native';
import {useAppTheme} from '@root/theme/theme';

const AppBar = ({
  header,
  hasBack = false,
}: {
  header: string;
  hasBack: boolean;
}) => {
  const colors = useAppTheme().colors;
  return (
    <View
      style={{
        height: 70,
        flexDirection: 'row',
        alignSelf: 'stretch',
        //justifyContent: 'space-between',
        alignItems: 'center',
        //backgroundColor: 'red',
        paddingHorizontal: 20,
      }}>
      <View
        style={{
          backgroundColor: colors.buttonBg,
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
          width: 50,
          height: 50,
        }}>
        <Text
          style={{
            //padding: 20,
            //backgroundColor: colors.buttonBg,
            color: colors.buttonIcon,
            fontWeight: 'bold',
            fontSize: 30,
          }}>
          {'<'}
        </Text>
      </View>
      <Text
        style={{
          fontSize: 25,
          color: colors.header,
          fontWeight: 'bold',
          marginLeft: 30,
        }}>
        {header}
      </Text>
      <View />
    </View>
  );
};

export default AppBar;
