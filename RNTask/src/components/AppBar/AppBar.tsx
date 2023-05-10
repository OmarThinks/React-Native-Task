import React from 'react';
import {Text, View} from 'react-native';
import {useTheme} from 'react-native-paper';

const AppBar = ({
  header,
  hasBack = false,
}: {
  header: string;
  hasBack: boolean;
}) => {
  const colors = useTheme().colors;
  return (
    <View
      style={{
        height: 70,
        flexDirection: 'row',
        alignSelf: 'stretch',
        justifyContent: 'space-between',
        alignItems: 'center',
        //backgroundColor: 'red',
      }}>
      <View
        style={
          {
            //backgroundColor:colors.
          }
        }>
        <Text>{'>'}</Text>
      </View>
      <Text
        style={{
          fontSize: 25,
          color: colors.header,
          fontWeight: 'bold',
        }}>
        {header}
      </Text>
      <View />
    </View>
  );
};

export default AppBar;
